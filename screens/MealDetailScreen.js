import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";
import DefaultText from "../components/DefaultText";

// push(),goBack(),pop(),popToTop(),replace()
function MealDetailScreen({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
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
    });
  }, [navigation]);

  const { mealId } = route.params;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  const {
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = selectedMeals;

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{duration} mins</DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
        <DefaultText>{affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
});

export default MealDetailScreen;
