import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CurrentLocationMarker from "../features/location/CurrentLocationMarker";

export default function DirectionsScreen(props) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 38.736946,
          longitude: -9.142685,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <CurrentLocationMarker />
      </MapView>
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
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
