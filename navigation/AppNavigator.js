import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import RoutesScreen from "../screens/RoutesScreen";
import InterestsScreen from "../screens/InterestsScreen";
import SpotListScreen from "../screens/SpotListScreen";
import DirectionsScreen from "../screens/DirectionsScreen";
import TutorialScreen from "../screens/TutorialScreen";
import StorageLoadingScreen from "../screens/StorageLoadingScreen";

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Routes: RoutesScreen,
  Interests: InterestsScreen,
  SpotList: SpotListScreen,
  Directions: DirectionsScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      StorageLoading: StorageLoadingScreen,
      App: AppStack,
      Tutorial: TutorialScreen
    },
    {
      initialRouteName: "StorageLoading"
    }
  )
);
