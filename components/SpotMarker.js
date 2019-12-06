import React from "react";
import { Image, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { uris } from "../constants/Icons";

export default function CurrentLocationMarker({ category, ...props }) {
  return (
    <Marker {...props}>
      <Image source={uris[category]} style={styles.marker} />
    </Marker>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 0.08 * 300,
    height: 0.08 * 503
  }
});
