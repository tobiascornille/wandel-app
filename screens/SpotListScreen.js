import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "react-native-ui-kitten";
import SpotList from "../features/routes/SpotList";

export default function SpotListScreen(props) {
  return (
    <Layout style={styles.container}>
      <SpotList />
    </Layout>
  );
}

SpotListScreen.navigationOptions = {
  title: "Spot List"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
