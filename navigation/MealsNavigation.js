import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoriesMealsScreen,
      navigationOptions: {},
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    // mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primaryColor : "white",
    },
  }
);

export default createAppContainer(MealsNavigator);
