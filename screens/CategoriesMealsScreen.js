import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function CategoriesMealsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          navigation.navigate("MealDetail");
        }}
      />
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

export default CategoriesMealsScreen;
