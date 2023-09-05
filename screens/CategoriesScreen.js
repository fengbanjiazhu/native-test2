import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate("CategoryMeals", { categoryID: itemData.item.id });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
