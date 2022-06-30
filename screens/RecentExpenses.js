import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesSummary from '../components/ExpensesOutput/ExpensesSummary'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from '../utils/date'

const RecentExpenses = () => {

  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  })

  return (
    <View>
      <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"}/>
    </View>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})