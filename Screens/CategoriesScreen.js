import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Header from '../Components/Header'

import { CATEGORIES } from '../Data/Dummy-Data'
import CategoryThumbnail from '../Components/CategoryThumbnail'



const CategoriesScreen = (props) => {

    const renderGridItems = (itemData) => {
        return (
            <CategoryThumbnail
                id={itemData.item.id}
                title={itemData.item.title}
                color={itemData.item.color}
                onTap={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}
            />
        )
    }


    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Food Category',
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

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})
