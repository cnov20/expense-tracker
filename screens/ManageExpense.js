import { StyleSheet, Text, View } from 'react-native';
import react, { useLayoutEffect, useEffect, useContext } from 'react';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';

const ManageExpense = ({ route, navigation }) => {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  // useEffect(() => {
    
  // }, [])

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, { description: 'Test!!!!', amount: 29.99, date: new Date()});
    } else {
      expensesCtx.addExpense({ description: 'Test', amount: 19.99, date: new Date()});
    }
   
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode={"flat"} onPress{cancelHandler} style={styles.button}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})