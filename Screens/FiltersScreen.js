import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Header from '../Components/Header'
import { Switch } from 'react-native-paper'

const FiltersSwitch = props => {
    return (
        <View style={styles.filtersContainer} >
            <Text style={styles.label}>{props.label}</Text>
            <Switch
                trackColor={{ true: 'blue' }}
                thumbColor={'#6078ff'}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FiltersScreen = (props) => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactosFree, setIsLactosFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetrian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactosFree: isLactosFree,
            vegan: isVegan,
            Vegetarian: isVegetrian
        }
        console.log(appliedFilters)
    }, [isGlutenFree, isLactosFree, isVegan, isVegetrian])

    useEffect(() => {
        navigation.setParams({ save: saveFilters });
    }, [saveFilters]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}> Available Filters </Text>
            <FiltersSwitch label='Gluten Free'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />

            <FiltersSwitch label='Lactos Free'
                state={isLactosFree}
                onChange={newValue => setIsLactosFree(newValue)}
            />

            <FiltersSwitch label='Vegan'
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />

            <FiltersSwitch label='Vegetarian'
                state={isVegetrian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={Header}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={Header}>
            <Item
                title='Menu'
                iconName='ios-save'
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>
    }
}

export default FiltersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    title: {
        fontFamily: 'jost-semi-bold',
        margin: 20,
        textAlign: 'center',
        fontSize: 22
    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        fontFamily: 'jost-regular',
        fontSize: 15
    }
})
