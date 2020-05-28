import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {
    const renderMealItem = (itemData) => {
        return (
            <MealItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealID: itemData.item.id,
                            mealTitle: itemData.item.title
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.listData}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginVertical: 20
    }
})

export default MealList;