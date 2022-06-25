import { StyleSheet, Text, View, FlatList } from 'react-native'
import react from 'react'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
      <View>
          <ExpensesSummary expenses={expenses}  expensesPeriod={expensesPeriod}/>
          <ExpensesList/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})