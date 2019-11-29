import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const MaterialIconsPack = {
  name: "material",
  icons: createIconsMap()
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      }
    }
  );
}

function IconProvider(name) {
  return {
    toReactElement: props => MaterialIcon({ name, ...props })
  };
}

function MaterialIcon({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <MaterialCommunityIcons
      name={name}
      size={height}
      color={tintColor}
      style={iconStyle}
    />
  );
}
