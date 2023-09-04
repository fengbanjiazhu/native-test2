import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// push(),goBack(),pop(),popToTop(),replace()
function MealDetailScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Back to home"
        onPress={() => {
          navigation.popToTop();
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

export default MealDetailScreen;
