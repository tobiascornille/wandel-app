import React from "react";
import { Image, StyleSheet } from "react-native";
import { Layout, Text, Button } from "react-native-ui-kitten";
import Destination from "../features/destination/Destination";
import RouteButton from "../features/routes/RouteButton";

export default function HomeScreen(props) {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.contentContainer}>
        <Layout style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/robot-dev.png")
                : require("../assets/images/robot-prod.png")
            }
            style={styles.welcomeImage}
          />
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Text category="h4">Welcome to Lisbon!</Text>
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Text appearance="hint" style={{ paddingBottom: 8 }}>
            Where do you want to go??
          </Text>
          <Destination />
        </Layout>

        <Layout style={styles.sectionContainer}>
          <RouteButton {...props} />
        </Layout>

        <Layout style={styles.sectionContainer}>
          <Button appearance="outline">Change preferences</Button>
        </Layout>
      </Layout>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  sectionContainer: {
    paddingVertical: 8
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: "contain",
    marginVertical: 30
  }
});
