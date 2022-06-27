import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';


const ExpensesSummary = ({ expenses, expensesPeriod }) => {

    const expensesSum = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);


  return (
    <View>
          <Text>Expenses Summary</Text>
          <View style={styles.container}>
              <Text style={styles.period}>Period: {expensesPeriod}</Text>
              <Text style={styles.sum}>Total: ${expensesSum.toFixed(2)}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500
  }
})

export default ExpensesSummary
