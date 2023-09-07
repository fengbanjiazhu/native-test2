import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function CategoriesMealsScreen({ route, navigation }) {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onSelect={() => {
          navigation.navigate("MealDetail", { mealId: itemData.item.id });
        }}
      />
    );
  };

  const { categoryID } = route.params;
  const selectedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryID) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={selectedMeals} renderItem={renderMealItem} style={{ width: "100%" }} />
    </View>
  );
}

CategoriesMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryID");
  const { title } = CATEGORIES.find((cat) => cat.id === cateId);

  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
