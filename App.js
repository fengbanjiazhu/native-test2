import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { enableScreens } from "react-native-screens";

import MealsNavigation from "./navigation/MealsNavigation";

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

  return <MealsNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
  },
});
