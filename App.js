import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MealsNavigation from "./navigation/MealsNavigation";
import FavoriteScreen from "./screens/FavoriteScreen";

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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Meals" component={MealsNavigation} />
        <Tab.Screen name="Fav" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
