import { View, Text, Button, StyleSheet, LayoutAnimation } from "react-native";
import React, { useState } from "react";

export default function LayoutAnimationTest() {
  const [showView, setShowView] = useState(false);

  return (
    <View style={styles.root}>
      <Text>LayoutAnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.Presets.easeInEaseOut,
            () => {
              console.log("动画结束的回调函数");
            },
            () => {
              console.log("动画异常/错误的回调函数");
            }
          );
          setShowView(!showView);
        }}
      />

      {showView && <View style={styles.container}></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 100,
    height: 100,
    backgroundColor: "#3050ff",
    marginTop: 20,
  },
});
