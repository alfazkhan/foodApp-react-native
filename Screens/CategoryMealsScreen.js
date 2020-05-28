import React from 'react'
import { useSelector } from "react-redux";
import { CATEGORIES} from '../Data/Dummy-Data'
import MealList from '../Components/MealList'

const CategoryMeals = (props) => {

    const catID = props.navigation.getParam('categoryID')
    const availableMeals = useSelector(state => state.meals.filteredMeals)
    const displayedMeals = availableMeals.filter(meal=>{
        if(meal.categoryIds.indexOf(catID) >= 0 ){
            return true
        }
    })


    return (<MealList listData={displayedMeals} navigation={props.navigation} />)
}

CategoryMeals.navigationOptions = (navData) => {
    const catID = navData.navigation.getParam('categoryID')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return {
        headerTitle: selectedCategory.title,
    }
};

export default CategoryMeals

