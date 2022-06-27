import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const IconButton = ( {icon, size, color, onPress}) => {
  return (
    <Pressable onPress={onPress} pressed={(pressed) => pressed && styles.pressed}>
            <View>
            <Ionicons name={icon} size={size} color={color}/>
            </View>
        </Pressable>
      
    // </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 5,
        margin: 10,
    },
    pressed: {
        opacity: 0.75
    }
})

export default IconButton;

