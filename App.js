import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MaterialIconsPack } from "./assets/icons/material-icons.js";
import { IconRegistry, ApplicationProvider } from "react-native-ui-kitten";
import { mapping, light, dark } from "@eva-design/eva";
import store from "./store";
import AppNavigator from "./navigation/AppNavigator";
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";

Sentry.init({
  dsn: "https://8bd9a58b22d8459e9b153f9e181a11d3@sentry.io/1846158",
  enableInExpoDevelopment: false,
  debug: true
});

Sentry.setRelease(Constants.manifest.revisionId);

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <IconRegistry icons={[EvaIconsPack, MaterialIconsPack]} />
        <ApplicationProvider mapping={mapping} theme={light}>
          <AppNavigator />
        </ApplicationProvider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
      require("./assets/images/current-location.png")
    ]),
    Font.loadAsync(MaterialCommunityIcons.font),
    Permissions.askAsync(Permissions.LOCATION)
  ]);
  await Location.watchPositionAsync(
    { accuracy: Location.Accuracy.BestForNavigation },
    location => {
      store.dispatch({ type: "location/setLocation", payload: location });
    }
  );
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
