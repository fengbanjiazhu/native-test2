import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createNativeStackNavigator();

function MealsNavigation() {
  return (
    <MealsNavigator.Navigator
      initialRouteName="Categories"
      screenOptions={{ headerTitleStyle: { color: Colors.primaryColor } }}
    >
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen} />
      <MealsNavigator.Screen
        name="CategoryMeals"
        component={CategoriesMealsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </MealsNavigator.Navigator>
  );
}

export default MealsNavigation;
