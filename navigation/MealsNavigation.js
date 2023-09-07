import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createNativeStackNavigator();

function MealsNavigation() {
  return (
    <MealsNavigator.Navigator initialRouteName="Categories">
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen} />
      <MealsNavigator.Screen name="CategoryMeals" component={CategoriesMealsScreen} />
      <MealsNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </MealsNavigator.Navigator>
  );
}

export default MealsNavigation;
