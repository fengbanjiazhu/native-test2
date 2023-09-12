import React from "react";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

function CategoriesMealsScreen({ route, navigation }) {
  const { categoryID } = route.params;
  const selectedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0);

  return <MealList listData={selectedMeals} navigation={navigation} />;
}

export default CategoriesMealsScreen;
