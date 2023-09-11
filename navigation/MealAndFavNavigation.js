import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MealsNavigation from "./MealsNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import Colors from "../constants/Colors";

function MealAndFavNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primaryColor }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MealAndFavNavigation;
