import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function MealDetailScreen() {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
