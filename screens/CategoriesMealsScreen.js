import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function CategoriesMealsScreen({ navigation }) {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const cateId = navigation.getParam("categoryID");
  const selectedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(cateId) >= 0);

  return (
    <View style={styles.screen}>
      <FlatList data={selectedMeals} renderItem={renderMealItem} />
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
