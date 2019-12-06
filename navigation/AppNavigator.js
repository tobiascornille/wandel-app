import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RoutesScreen from "../screens/RoutesScreen";
import InterestsScreen from "../screens/InterestsScreen";
import SpotListScreen from "../screens/SpotListScreen";
import DirectionsScreen from "../screens/DirectionsScreen";

export default createAppContainer(
  createStackNavigator({
    Home: HomeScreen,
    Routes: RoutesScreen,
    Interests: InterestsScreen,
    SpotList: SpotListScreen,
    Directions: DirectionsScreen
  })
);
