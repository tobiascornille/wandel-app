import React from "react";
import { connect } from "react-redux";
import { fetchRoutes } from "./routesSlice";
import { Button } from "react-native-ui-kitten";

const mapDispatchToProps = { fetchRoutes };

const RouteButton = ({ navigation, fetchRoutes }) => {
  const { navigate } = navigation;

  handleFindRoute = () => {
    fetchRoutes();
    navigate("Routes");
  };

  return <Button onPress={handleFindRoute}>Find route</Button>;
};

export default connect(null, mapDispatchToProps)(RouteButton);