import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterSwitch from "../components/FilterSwitch";
import { CommonActions } from "@react-navigation/native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";
import { DrawerActions } from "@react-navigation/native";

function FilterScreen({ navigation }) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const appliedFilters = {
    glutenFree: isGlutenFree,
    lactoseFree: isLactoseFree,
    vegan: isVegan,
    vegetarian: isVegetarian,
  };

  const saveFilters = () => {
    console.log(appliedFilters);
  };

  useEffect(() => {
    navigation.dispatch(CommonActions.setParams({ filter: appliedFilters }));
  }, [navigation]);

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
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              saveFilters();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restrictions</Text>
      <FilterSwitch
        title="Gluten-free"
        state={isGlutenFree}
        valueChangeHandler={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose-free"
        state={isLactoseFree}
        valueChangeHandler={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        state={isVegan}
        valueChangeHandler={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="Vegetarian"
        state={isVegetarian}
        valueChangeHandler={(newValue) => {
          setIsVegetarian(newValue);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;
