import { StyleSheet, Text, View, FlatList } from 'react-native'
import react from 'react'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'
import { GlobalStyles } from '../../constants/styles'

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
