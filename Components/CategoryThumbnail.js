import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'

const CategoryThumbnail = (props) => {
    return (
        <View style={styles.gridItem}>
            <TouchableNativeFeedback  onPress={props.onTap}>
                <View style={{ ...styles.mealContainer,backgroundColor:props.color } }>
                    <Text style={styles.containerText} maxLines={2} >{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

export default CategoryThumbnail

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow:'hidden',
        borderRadius:10,
        elevation:10,
    },
    mealContainer:{
        flex:1,
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    containerText:{
        textAlign:'center',
        fontSize: 25,
        color:'#1e1e1e',
        fontFamily:'jost-semi-bold'
    }
})
