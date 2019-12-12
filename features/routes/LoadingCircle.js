import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors";

const mapStateToProps = state => ({
  waiting: state.routes.waiting
});

const LoadingCircle = ({ waiting }) => {
  return (
    <View style={styles.container}>
      {waiting && (
        <View style={styles.loadingCircle}>
          <ActivityIndicator
            color={Colors.tintColor}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      )}
    </View>
  );
};

export default connect(mapStateToProps)(LoadingCircle);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingCircle: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    elevation: 6
  },
  activityIndicator: {
    justifyContent: "center",
    padding: 10,
    zIndex: 11
  }
});
