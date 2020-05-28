import React from 'react'
import MealList from '../Components/MealList'
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Header from '../Components/Header'

const FavoritesScreen = (props) => {

    const selectedMeals = useSelector(state => state.meals.favorites)

    // const favMeals = selectedMeals.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList listData={selectedMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Favorites!! ',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={Header}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => { 
                   navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    }
}

export default FavoritesScreen

