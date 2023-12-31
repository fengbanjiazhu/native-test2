import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          const moveX = Animated.timing(marginLeft, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
          });

          const scaleAni = Animated.timing(scale, {
            toValue: 1.5,
            duration: 1000,
            useNativeDriver: false,
          });

          Animated.sequence([moveX, Animated.delay(500), scaleAni]).start();
        }}
      />

      <Animated.View
        style={[styles.container, { transform: [{ scale: scale }, { translateX: marginLeft }] }]}
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
// const rotate = useRef(new Animated.Value(0)).current;
// const rotateValue = rotate.interpolate({
//     inputRange: [0, 30],
//     outputRange: ["0deg", "30deg"],
//   });

// Decay & Spring
// Animated.decay(marginLeft, {
//   velocity: 1,
//   deceleration: 0.997,
//   useNativeDriver: false,
// }).start();

// Animated.spring(marginLeft, {
//   toValue: 1.5,
//   speed: 13,
//   useNativeDriver: false,
//   bounciness: 10,
// }).start();
