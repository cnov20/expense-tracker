import { StyleSheet, Text, View } from 'react-native';
import react, { useLayoutEffect, useEffect } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

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

  function deleteExpenseHandler() { };
  
  return (
    <View style={styles.container}>
      <View style={styles.deleteContainer}>
      {isEditing && <IconButton icon={"trash"} color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />}
      </View>
    </View>
  )
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  }
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})