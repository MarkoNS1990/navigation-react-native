import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { CATEGORIES } from '../data/data';

const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat=>cat.id===catId)
    return (
        <View style={styles.screen}>
            <Text>Category Meal screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title='Go to details' onPress={()=>props.navigation.push('MealDetails')} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})    

CategoryMealsScreen.navigationOptions = (navigationData) =>{
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat=>cat.id===catId)

    return {
        headerTitle:`This is ${selectedCategory.title} food`,
    }
}
    

export default CategoryMealsScreen;
