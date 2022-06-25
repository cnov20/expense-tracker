import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ expenses, expensesPeriod }) => {

    const expensesSum = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);


  return (
    <View>
          <Text>Expenses Summary</Text>
          <View>
              <Text>Period: {expensesPeriod}</Text>
              <Text>Total: ${expensesSum.toFixed(2)}</Text>
          </View>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})