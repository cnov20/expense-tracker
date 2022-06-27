import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import ExpenseItem from '../ExpenseItem';

function renderExpenseItem(itemData) {

  return (
    <ExpenseItem {...itemData.item}/>
  )

}

const ExpensesList = ( { expenses } ) => {
  return (
    <View>
      <Text style={styles.container}>ExpensesList</Text>
      <FlatList
        // style={styles.}
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default ExpensesList

