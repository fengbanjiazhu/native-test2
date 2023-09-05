import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CategoriesGridTile({ title, onSelect, color }) {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 120,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
});

export default CategoriesGridTile;
