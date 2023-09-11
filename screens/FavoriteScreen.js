import React, { useEffect } from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";

function FavoriteScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={() => {}} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  const favoriteMeals = MEALS.filter((meal) => meal.id === "m1" || "m2");

  return <MealList listData={favoriteMeals} navigation={navigation} />;
}

export default FavoriteScreen;
