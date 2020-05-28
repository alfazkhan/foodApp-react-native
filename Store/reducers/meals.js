import { MEALS } from '../../Data/Dummy-Data'
import { TOGGLE_FAVORITE } from '../actions/mealsAction';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favorites: []
}

const mealsReducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favorites.findIndex(meal => meal.id === action.mealID)
            if (existingIndex >= 0) {
                const updatedFavorites = [...state.favorites]
                updatedFavorites.splice(existingIndex,1)
                return {...state,favorites: updatedFavorites}
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealID)
                return {...state, favorites: state.favorites.concat(meal)}
            }
            default:
                return state;
    }
    return state;
}

export default mealsReducers;