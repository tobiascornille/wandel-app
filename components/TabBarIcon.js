import React from "react";
import { Icon } from "@ui-kitten/components";

export default function TabBarIcon({ name, focused }) {
  const newName = focused ? name : name + "-outline";
  return (
    <Icon name={newName} style={{ marginBottom: -3, width: 20, height: 20 }} />
  );
}
