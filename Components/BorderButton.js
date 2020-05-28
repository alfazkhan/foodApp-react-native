import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={{ ...styles.button, ...props.style }}> {props.title} </Text>
        </TouchableOpacity>

    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlign: 'center'
    },
})
