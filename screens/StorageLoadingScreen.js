import React, { useEffect } from "react";
import { ActivityIndicator, View, AsyncStorage } from "react-native";
import { Layout } from "@ui-kitten/components";
import store from "../store";

export default function StorageLoadingScreen({ navigation }) {
  useEffect(() => {
    isFirstOpen(navigation);
  });

  return (
    <Layout>
      <ActivityIndicator />
    </Layout>
  );
}

const isFirstOpen = async navigation => {
  const userToken = await AsyncStorage.getItem("openedBefore");
  const interestsString = await AsyncStorage.getItem("interests");
  if (interestsString) {
    const interests = JSON.parse(interestsString);
    store.dispatch({ type: "interests/setInterests", payload: interests });
  }
  await AsyncStorage.setItem("openedBefore", "true");

  navigation.navigate("Tutorial");
};
