import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../features/routes/Map";
import DirectionsCard from "../features/routes/DirectionsCard";

export default function DirectionsScreen(props) {
  return (
    <View style={styles.container}>
      <Map {...props} />
      <DirectionsCard />
    </View>
  );
}

DirectionsScreen.navigationOptions = {
  title: "Directions"
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
