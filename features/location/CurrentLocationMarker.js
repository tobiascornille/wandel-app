import React from "react";
import { Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Marker } from "react-native-maps";

const mapStateToProps = state => ({
  location: state.location
});

const CurrentLocationMarker = ({ location }) => {
  if (location.coords) {
    const { latitude, longitude } = location.coords;
    return (
      <Marker coordinate={{ latitude, longitude }}>
        <Image
          source={require("../../assets/images/current-location.png")}
          style={styles.marker}
        />
      </Marker>
    );
  } else return null;
};

export default connect(mapStateToProps)(CurrentLocationMarker);

const styles = StyleSheet.create({
  marker: {
    width: 20,
    height: 20
  }
});
