import React from "react";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

import { useSelector } from "react-redux";

function CategoriesMealsScreen({ route, navigation }) {
  const { categoryID } = route.params;
  const meals = useSelector((state) => state.meals.filteredMeals);

  const selectedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0);

  if (selectedMeals.length < 1)
    return (
      <View style={styles.content}>
        <DefaultText>No meal found, please check with the filter</DefaultText>
      </View>
    );

  return <MealList listData={selectedMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
