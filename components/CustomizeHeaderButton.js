import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

function CustomizeHeaderButton(props) {
  return (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={Colors.primaryColor} />
  );
}

export default CustomizeHeaderButton;
