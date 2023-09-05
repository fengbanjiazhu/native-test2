import React from "react";
import { FlatList } from "react-native";
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

export default CategoriesScreen;
