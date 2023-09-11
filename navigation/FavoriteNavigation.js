import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

import Colors from "../constants/Colors";

const FavoriteNavigator = createNativeStackNavigator();

import React from "react";

function FavoriteNavigation() {
  return (
    <FavoriteNavigator.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerTitleStyle: { color: Colors.primaryColor },
        headerTitle: "Your Favorite Meals",
      }}
    >
      <FavoriteNavigator.Screen name="Favorite" component={FavoriteScreen} />
      <FavoriteNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </FavoriteNavigator.Navigator>
  );
}

export default FavoriteNavigation;
