import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './Navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import mealsReducers from './Store/reducers/meals';
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducers
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'jost-regular': (require('./assets/Fonts/Jost-Regular.ttf')),
    'jost-bold': (require('./assets/Fonts/Jost-Bold.ttf')),
    'jost-semi-bold': (require('./assets/Fonts/Jost-SemiBold.ttf'))
  })
}

export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setfontLoaded(true)}
    />
  }

  return (
    <Provider store={store} >
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
