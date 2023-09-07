import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createNativeStackNavigator();

function MealsNavigation() {
  return (
    <MealsNavigator.Navigator initialRouteName="Categories">
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen} />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoriesMealsScreen} />
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </MealsNavigator.Navigator>
  );
}

export default MealsNavigation;
