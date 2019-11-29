import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import CurrentLocationMarker from "../features/location/CurrentLocationMarker";
import RoutesSwiper from "../features/routes/RoutesSwiper";

export default function RoutesScreen(props) {
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
      <View style={styles.swiper}>
        <RoutesSwiper {...props} />
      </View>
    </View>
  );
}

RoutesScreen.navigationOptions = {
  title: "Routes"
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  swiper: {
    flexDirection: "row",
    marginVertical: 20,
    marginBottom: 10
  }
});
