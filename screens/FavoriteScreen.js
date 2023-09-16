import React, { useEffect } from "react";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";

import { useSelector } from "react-redux";

import { DrawerActions } from "@react-navigation/native";

function FavoriteScreen({ navigation }) {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return <MealList listData={favMeals} navigation={navigation} />;
}

export default FavoriteScreen;
