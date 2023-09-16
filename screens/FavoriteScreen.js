import React, { useEffect } from "react";
import MealList from "../components/MealList";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";

import { useSelector } from "react-redux";
import { getFavoriteMeals } from "../store/mealReducer";

import { DrawerActions } from "@react-navigation/native";

function FavoriteScreen({ navigation }) {
  const favMeals = useSelector(getFavoriteMeals);

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
