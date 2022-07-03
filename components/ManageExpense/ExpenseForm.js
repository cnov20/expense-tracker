import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import { GlobalStyles } from '../../constants/styles'

const ExpenseForm = () => {

    function amountChangedHandler() {
        
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Expense</Text>
            <View style={styles.inputsRow}>
                <Input label={"Amount"} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangedHandler
                }} />
                <Input
                    style={styles.rowInput}
                    label={"Date"}
                    textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { }
                }}/>
                <Input
                    style={styles.rowInput}
                    label={"Description"}
                    textInputConfig={{
                    multiline: true,
                    // autoCapitslize: 'none'
                    // autoCorrect: false — default is "true"
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'

    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
})

export default ExpenseForm
