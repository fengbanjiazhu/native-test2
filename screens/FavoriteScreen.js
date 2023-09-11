import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen({ navigation }) {
  const favoriteMeals = MEALS.filter((meal) => meal.id === "m1" || "m2");

  return <MealList listData={favoriteMeals} navigation={navigation} />;
}

export default FavoriteScreen;
