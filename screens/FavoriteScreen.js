import React, { useEffect } from "react";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

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

  if (favMeals.length === 0 || !favMeals)
    return (
      <View style={styles.screen}>
        <DefaultText>No Favorite yet</DefaultText>
      </View>
    );

  return <MealList listData={favMeals} navigation={navigation} />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteScreen;
