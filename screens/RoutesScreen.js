import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../features/routes/Map";
import RoutesSwiper from "../features/routes/RoutesSwiper";
import LoadingCircle from "../features/routes/LoadingCircle";

export default function RoutesScreen(props) {
  return (
    <View style={styles.container}>
      <Map {...props} />
      <LoadingCircle />
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
    justifyContent: "space-between",
    alignItems: "center"
  },
  swiper: {
    flexDirection: "row"
  }
});
