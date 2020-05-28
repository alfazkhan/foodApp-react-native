import React, { useEffect, useCallback } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Header from '../Components/Header'
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { toggleFavorite } from '../Store/actions/mealsAction';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealID = props.navigation.getParam('mealID');
  const availableMeals = useSelector(state => state.meals.meals)
  const selectedMeal = availableMeals.find(meal => meal.id === mealID);
  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() =>{
    dispatch(toggleFavorite(mealID))
  },[dispatch,mealID])

  useEffect(() => {
    props.navigation.setParams({ toggleFav : toggleFavHandler})
  }, [toggleFavHandler])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.mealInfo}>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.mealInfo}>{selectedMeal.duration}m</Text>
        <Text style={styles.mealInfo}>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}><MaterialCommunityIcons name="solid" size={10} color="black" /> {" ".repeat(5) + ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}><MaterialCommunityIcons name="solid" size={10} color="black" /> {" ".repeat(5) + step}</ListItem>
      ))} 
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item
          title="Favorite"
          iconName="ios-star-outline"
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    borderWidth: 1,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'jost-semi-bold'
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    // borderColor: '#ccc',
    // borderWidth: 1,
    padding: 10,
    fontFamily: 'jost-regular'
  },
  mealInfo:{
    fontFamily: 'jost-regular',
    fontSize: 20
  }
});

export default MealDetailScreen;
