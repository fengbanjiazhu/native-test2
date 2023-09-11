import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import Colors from "../constants/Colors";
// import MainNavigation from "./MainNavigation";

const FavoriteNavigator = createNativeStackNavigator();

function FavoriteNavigation() {
  return (
    <>
      {/* <MainNavigation /> */}
      <FavoriteNavigator.Navigator
        initialRouteName="Favorite"
        screenOptions={{
          headerTitleStyle: { color: Colors.primaryColor },
          headerTitle: "Favorite Meals",
        }}
      >
        <FavoriteNavigator.Screen name="Favorite" component={FavoriteScreen} />
        <FavoriteNavigator.Screen
          name="MealDetail"
          options={{ headerTitle: "Meal Details" }}
          component={MealDetailScreen}
        />
      </FavoriteNavigator.Navigator>
    </>
  );
}

export default FavoriteNavigation;
