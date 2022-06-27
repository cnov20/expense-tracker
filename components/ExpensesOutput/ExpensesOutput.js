import { StyleSheet, Text, View, FlatList } from 'react-native'
import react from 'react'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import { GlobalStyles } from '../../constants/styles'

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
      <View style={styles.container}>
          <ExpensesSummary expenses={DUMMY_EXPENSES}  expensesPeriod={expensesPeriod}/>
          <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})

export default ExpensesOutput
