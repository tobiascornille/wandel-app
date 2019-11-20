import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function RoutesScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        provider={"google"}
        initialRegion={{
          latitude: 38.736946,
          longitude: -9.142685,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </View>
  );
}

RoutesScreen.navigationOptions = {
  title: "Routes"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mapStyle: {
    width: "100%",
    height: "100%"
  }
});