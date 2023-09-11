import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterScreen from "../screens/FilterScreen";
import MealAndFavNavigation from "./MealAndFavNavigation";

import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const FilterNav = createNativeStackNavigator();

const FilterScreenWrapper = () => {
  return (
    <FilterNav.Navigator
      screenOptions={{ headerTitleStyle: { color: Colors.primaryColor }, headerTitle: "Filter" }}
      initialRouteName="Filter"
    >
      <FilterNav.Screen name="Filter" component={FilterScreen} />
    </FilterNav.Navigator>
  );
};

function MainNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Favorite" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Favorite" component={MealAndFavNavigation} />
      <Drawer.Screen name="Filter" component={FilterScreenWrapper} />
    </Drawer.Navigator>
  );
}

export default MainNavigation;
