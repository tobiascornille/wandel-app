import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Polyline from "@mapbox/polyline";
import CurrentLocationMarker from "../location/CurrentLocationMarker";

const mapStateToProps = state => ({
  routes: state.routes
});

const Mapscreen = ({ routes }) => {
  // TODO: extract
  let coords = [];
  for (let j = 0; j < routes.list[0].route.routes[0].legs.length; j++) {
    for (
      let i = 0;
      i < routes.list[0].route.routes[0].legs[j].steps.length;
      i++
    ) {
      let polyline =
        routes.list[0].route.routes[0].legs[j].steps[i].polyline.points;
      let points = Polyline.decode(polyline);
      let stepCoords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      coords = coords.concat(stepCoords);
    }
  }

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 38.736946,
        longitude: -9.137685,
        latitudeDelta: 0.0151, // TODO: use google results and convert them to this
        longitudeDelta: 0.0151
      }}
    >
      {routes.list[0].spots.map(spot => (
        <MapView.Marker
          coordinate={{
            latitude: spot.location.lat,
            longitude: spot.location.lng
          }}
        />
      ))}
      <MapView.Polyline
        coordinates={coords}
        strokeWidth={4}
        strokeColor="blue" // TODO: update color
      />
      <CurrentLocationMarker />
    </MapView>
  );
};

export default connect(mapStateToProps)(Mapscreen);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
