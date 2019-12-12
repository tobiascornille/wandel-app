import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import CurrentLocationMarker from "../location/CurrentLocationMarker";
import SpotMarker from "../../components/SpotMarker";
import mapStyle from "../../constants/mapStyle";

const initalRegion = {
  latitude: 38.736946,
  longitude: -9.137685,
  latitudeDelta: 0.0151,
  longitudeDelta: 0.0151
};

const mapStateToProps = state => ({
  routes: state.routes
});

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Map = ({ routes }) => {
  let mapRef = useRef(null);
  const { list, currentIndex } = routes;

  if (list.length > 0) {
    const { region, polylineCoords, spots } = list[currentIndex];

    const prevRegion = usePrevious(region);
    if (prevRegion !== region && mapRef && mapRef.current) {
      mapRef.current.animateToRegion(region);
    }

    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        customMapStyle={mapStyle}
        ref={mapRef}
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
    usePrevious(null);
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initalRegion}
        ref={mapRef}
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
