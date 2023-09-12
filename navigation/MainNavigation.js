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
      initialRouteName="FilterScreen"
    >
      <FilterNav.Screen name="FilterScreen" component={FilterScreen} />
    </FilterNav.Navigator>
  );
};

function MainNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Favorite"
      screenOptions={{ headerShown: false, drawerActiveTintColor: Colors.accentColor }}
    >
      <Drawer.Screen
        name="Favorite"
        options={{ drawerLabel: "Meals" }}
        component={MealAndFavNavigation}
      />
      <Drawer.Screen
        name="Filter"
        options={{ drawerLabel: "Filter" }}
        component={FilterScreenWrapper}
      />
    </Drawer.Navigator>
  );
}

export default MainNavigation;
