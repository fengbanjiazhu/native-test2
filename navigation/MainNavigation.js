import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterScreen from "../screens/FilterScreen";
import MealAndFavNavigation from "./MealAndFavNavigation";
import AnimationTest from "../animation/AnimationTest";

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
      initialRouteName="mealsAndFavorite"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.accentColor,
        drawerLabelStyle: { fontFamily: "open-sans-bold" },
      }}
    >
      <Drawer.Screen
        name="mealsAndFavorite"
        options={{ drawerLabel: "Meals" }}
        component={MealAndFavNavigation}
      />
      <Drawer.Screen
        name="Filter"
        options={{ drawerLabel: "Filter" }}
        component={FilterScreenWrapper}
      />
      <Drawer.Screen
        name="Animation"
        options={{ drawerLabel: "Animation" }}
        component={AnimationTest}
      />
    </Drawer.Navigator>
  );
}

export default MainNavigation;
