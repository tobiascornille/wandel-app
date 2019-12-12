import React from "react";
import { connect } from "react-redux";
import { fetchRoutes, clearRoutes } from "./routesSlice";
import { Button } from "@ui-kitten/components";

const mapDispatchToProps = { clearRoutes, fetchRoutes };

const RouteButton = ({ navigation, fetchRoutes }) => {
  const { navigate } = navigation;

  handleFindRoute = () => {
    clearRoutes();
    fetchRoutes();
    navigate("Routes");
  };

  return <Button onPress={handleFindRoute}>Find route</Button>;
};

export default connect(null, mapDispatchToProps)(RouteButton);
