import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          Animated.timing(marginLeft, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View style={[styles.container, { marginLeft: marginLeft }]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    marginTop: 50,
    flex: 1,
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#3050ff",
    marginTop: 20,
  },
});

export default AnimationTest;
