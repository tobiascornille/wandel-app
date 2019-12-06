import React from "react";
import { View } from "react-native";
import { Icon } from "@ui-kitten/components";
import { names, colors } from "../constants/Icons";

export default function SpotIcon(props) {
  const name = names[props.category];
  const color = colors[props.category];
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: color,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10
      }}
    >
      <Icon
        pack="material"
        {...props}
        name={name}
        style={{ color: "white", width: 25, height: 25 }}
      />
    </View>
  );
}
