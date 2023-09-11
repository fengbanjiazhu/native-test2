import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import MealsNavigation from "./navigation/MealsNavigation";
import FavoriteNavigation from "./navigation/FavoriteNavigation";
import MainNavigation from "./navigation/MainNavigation";

import Colors from "./constants/Colors";

SplashScreen.preventAutoHideAsync();

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    async function loaded() {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      loaded();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      {/* <MainNavigation /> */}
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
    </NavigationContainer>
  );
}
