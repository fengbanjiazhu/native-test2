import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Colors from "../constants/Colors";
// import MainNavigation from "./MainNavigation";

const FavoriteNavigator = createNativeStackNavigator();

function FavoriteNavigation() {
  return (
    <FavoriteNavigator.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerTitleStyle: { color: Colors.primaryColor },
        headerTitle: "Favorite Meals",
        headerBackTitle: "Back",
      }}
    >
      <FavoriteNavigator.Screen name="Favorite" component={FavoriteScreen} />
      <FavoriteNavigator.Screen
        name="MealDetail"
        options={({ route }) => ({ headerTitle: route.params.title })}
        component={MealDetailScreen}
      />
    </FavoriteNavigator.Navigator>
  );
}

export default FavoriteNavigation;
