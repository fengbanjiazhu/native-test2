import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoriesGridTile from "../components/CategoriesGridTile";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", { categoryID: itemData.item.id });
        }}
      />
    );
  };

  return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}></FlatList>;
}

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
  },
});

export default CategoriesScreen;
