import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import mealStore from "./store/mealStore";

import MainNavigation from "./navigation/MainNavigation";

SplashScreen.preventAutoHideAsync();

enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

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
    <Provider store={mealStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
