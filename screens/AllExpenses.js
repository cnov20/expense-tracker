import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpenses = () => {

  const expensesCtx = useContext(ExpensesContext);

  return (
    <View>
      <ExpensesOutput expensesPeriod={"Total"} expenses={expensesCtx.expenses} fallbackText="No registered expenses found"/>
    </View>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})