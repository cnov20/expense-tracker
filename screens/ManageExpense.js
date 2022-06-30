import { StyleSheet, Text, View } from 'react-native';
import react, { useLayoutEffect, useEffect } from 'react';

const ManageExpense = ({ route, navigation }) => {

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  // useEffect(() => {
    
  // }, [])
  
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default ManageExpense;

const styles = StyleSheet.create({})