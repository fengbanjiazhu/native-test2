import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";

// push(),goBack(),pop(),popToTop(),replace()
function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  const { title } = selectedMeals;
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Button
        title="Back to home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

MealDetailScreen.navigationOptions = (route, navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");

  // const { mealId } = route.params;
  console.log(mealId);
  const { title } = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Marked");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
