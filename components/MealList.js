import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealList({ listData, navigation }) {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onSelect={() => {
          navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={listData} renderItem={renderMealItem} style={{ width: "100%" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
