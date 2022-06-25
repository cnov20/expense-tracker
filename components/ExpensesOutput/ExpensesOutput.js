import { StyleSheet, Text, View, FlatList } from 'react-native'
import react from 'react'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of jeans',
        amount: 89.99,
        date: new Date('2022-01-20')
    },
    {
        id: 'e3',
        description: 'A bushel of bananas',
        amount: 5.99,
        date: new Date('2022-02-14')
    }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
      <View>
          <ExpensesSummary expenses={DUMMY_EXPENSES}  expensesPeriod={expensesPeriod}/>
          <ExpensesList/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})