import React from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import CurrentLocationMarker from "../location/CurrentLocationMarker";
import SpotMarker from "../../components/SpotMarker";
import mapStyle from "../../constants/mapStyle";

const mapStateToProps = state => ({
  routes: state.routes
});

const Map = ({ routes }) => {
  const { list, currentIndex } = routes;

  if (list.length > 0) {
    const { region, polylineCoords, spots } = list[currentIndex];

    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        customMapStyle={mapStyle}
      >
        {spots.map(spot => (
          <SpotMarker
            zIndex={3}
            key={spot.name}
            anchor={{ x: 0.5, y: 0.85 }}
            category={spot.category[0]}
            coordinate={{
              latitude: spot.location.lat,
              longitude: spot.location.lng
            }}
          ></SpotMarker>
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
