import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";

function ListItem({ children }) {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default ListItem;
