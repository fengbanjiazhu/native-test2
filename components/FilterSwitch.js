import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/Colors";

function FilterSwitch({ title, state, onChange }) {
  return (
    <View style={styles.filterContainer}>
      <Text>{title}</Text>
      <Switch trackColor={{ true: Colors.primaryColor }} value={state} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FilterSwitch;
