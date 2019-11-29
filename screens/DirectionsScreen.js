import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../features/routes/Map";

export default function DirectionsScreen(props) {
  return (
    <View style={styles.container}>
      <Map {...props} />
    </View>
  );
}

DirectionsScreen.navigationOptions = {
  title: "Directions"
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
