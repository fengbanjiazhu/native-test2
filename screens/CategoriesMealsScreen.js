import React from "react";
import MealList from "../components/MealList";

import { useSelector } from "react-redux";

function CategoriesMealsScreen({ route, navigation }) {
  const { categoryID } = route.params;
  const meals = useSelector((state) => state.meals.filteredMeals);

  const selectedMeals = meals.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0);

  return <MealList listData={selectedMeals} navigation={navigation} />;
}

export default CategoriesMealsScreen;
