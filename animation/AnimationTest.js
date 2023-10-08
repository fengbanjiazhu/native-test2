import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateValue = rotate.interpolate({
    inputRange: [0, 30],
    outputRange: ["0deg", "30deg"],
  });

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          Animated.timing(rotate, {
            toValue: 30,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        }}
      />

      <Animated.View
        style={[styles.container, { transform: [{ rotate: rotateValue }] }]}
      ></Animated.View>
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
    marginTop: 60,
    marginLeft: 60,
  },
});

export default AnimationTest;

// basic
// const marginLeft = useRef(new Animated.Value(0)).current;
// { marginLeft: marginLeft }
// Animated.timing(marginLeft, {
//             toValue: 200,
//             duration: 1000,
//             useNativeDriver: false,
//           }).start();

// rotate
