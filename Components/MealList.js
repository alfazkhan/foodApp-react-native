import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import MealItem from './MealItem'
import { useSelector} from "react-redux";


const MealList = props => {
    const Favorites = useSelector(state => state.meals.favorites)
    const renderMealItem = (itemData) => {
        const isFavorite = Favorites.some(meal=> meal.id === itemData.item.id)
        // console.log('Star='+isFavorite)
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
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
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