import React from 'react'
import MealList from '../Components/MealList'
import { MEALS } from '../Data/Dummy-Data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Header from '../Components/Header'

const FavoritesScreen = (props) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList listData={favMeals} navigation={props.navigation} />
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

