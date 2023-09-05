import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesMealsScreen({ navigation }) {
  const cateId = navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === cateId);

  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
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
