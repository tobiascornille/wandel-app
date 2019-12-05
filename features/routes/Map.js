import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import CurrentLocationMarker from "../location/CurrentLocationMarker";

const mapStateToProps = state => ({
  routes: state.routes
});

const Map = ({ routes }) => {
  const { list, currentIndex } = routes;

  if (list.length > 0) {
    const { region, polylineCoords, spots } = list[currentIndex];
    const inactiveRoutes = list.filter((_, index) => index !== currentIndex);

    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {spots.map(spot => (
          <Marker
            zIndex={3}
            key={spot.name}
            coordinate={{
              latitude: spot.location.lat,
              longitude: spot.location.lng
            }}
          />
        ))}
        <CurrentLocationMarker />
        <Polyline
          zIndex={0}
          coordinates={polylineCoords}
          strokeWidth={9}
          strokeColor={"#2353b2"}
        />
        <Polyline
          zIndex={1}
          coordinates={polylineCoords}
          strokeWidth={7}
          strokeColor={"#4cb1ff"}
        />
        {inactiveRoutes.map(route => (
          <Polyline
            zIndex={0}
            key={route.routeName}
            coordinates={route.polylineCoords}
            strokeWidth={7}
            strokeColor={"grey"}
          />
        ))}
      </MapView>
    );
  } else {
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 38.736946,
          longitude: -9.137685,
          latitudeDelta: 0.0151,
          longitudeDelta: 0.0151
        }}
      >
        <CurrentLocationMarker />
      </MapView>
    );
  }
};

export default connect(mapStateToProps)(Map);

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});