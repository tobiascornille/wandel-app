import React from "react";
import { Image, StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import Destination from "../features/destination/Destination";
import RouteButton from "../features/routes/RouteButton";

export default function HomeScreen(props) {
  const { navigate } = props.navigation;

  return (
    <Layout style={styles.container}>
      <Layout style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </Layout>

      <Layout style={styles.sectionContainer}>
        <Text category="h4">Welcome to Lisbon!</Text>
      </Layout>

      <Layout style={styles.sectionContainer}>
        <Text appearance="hint" style={{ paddingBottom: 8 }}>
          Where do you want to go?
        </Text>
        <Destination />
      </Layout>

      <Layout style={styles.sectionContainer}>
        <RouteButton {...props} />
      </Layout>

      <Layout style={styles.sectionContainer}>
        <Button appearance="outline" onPress={() => navigate("Interests")}>
          Change interests
        </Button>
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
    paddingTop: 30,
    paddingHorizontal: 16
  },
  sectionContainer: {
    paddingVertical: 8
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 60
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: "contain"
  }
});
