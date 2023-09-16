import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/ListItem";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/mealReducer";

// push(),goBack(),pop(),popToTop(),replace()
function MealDetailScreen({ route, navigation }) {
  const allMeal = useSelector((state) => state.meals.meals);
  const { favoriteMealsId } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const { mealId } = route.params;

  const selectedMeal = allMeal.find((meal) => meal.id === mealId);
  const isFavorite = favoriteMealsId.includes(mealId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={() => {
              dispatch(toggleFavorite(mealId));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, isFavorite]);

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
  } = selectedMeal;

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
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
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
