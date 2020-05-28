import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'


import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryMealsScreen from '../Screens/CategoryMealsScreen.js'
import MealDetailsScreen from '../Screens/MealDetailsScreen.js'
import FavoritesScreen from '../Screens/FavoritesScreen'
import FiltersScreen from '../Screens/FiltersScreen'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const defaultNavOptions = {

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'jost-bold'
    },

}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FF5F5F',
                height: 100,
                elevation: 10,
            },
            ...defaultNavOptions
        }
    }
)

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'orange',
                height: 100,
                elevation: 10,
            },
            ...defaultNavOptions
        }
    }
)

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#6078ff',
            height: 100,
            elevation: 10,
        },
        ...defaultNavOptions
    }
}
)

const Tabs = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="food" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: '#ff5f5f'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites!!!',
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="star" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: 'orange'
        }
    }
}

const MealFavBottomTab = createMaterialBottomTabNavigator(Tabs, {

    activeColor: 'white',
    shifting: true,
    
})

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealFavBottomTab,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterNavigator
},{
    contentOptions:{
        activeTintColor: 'orange',
    }
})




export default createAppContainer(MainNavigator)
