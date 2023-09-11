import React, { useEffect } from "react";
import { FlatList } from "react-native";
import CategoriesGridTile from "../components/CategoriesGridTile";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomizeHeaderButton from "../components/CustomizeHeaderButton";

// import { DrawerActions } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomizeHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              // navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  const renderGridItem = (itemData) => {
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeals", {
            categoryID: itemData.item.id,
            title: itemData.item.title,
          });
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
