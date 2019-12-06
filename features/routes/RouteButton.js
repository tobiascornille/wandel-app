import React from "react";
import { connect } from "react-redux";
import { fetchRoutes } from "./routesSlice";
import { Button } from "@ui-kitten/components";

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
