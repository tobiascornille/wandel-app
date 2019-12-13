import React from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import InterestsList from "../features/interests/InterestsList";

const slides = [
  {
    key: "tutorial1",
    title: "Welcome to Wandel",
    text: "Wandel makes exploring cities easier than ever.",
    image: require("../assets/images/logo.png")
  },
  {
    key: "tutorial2",
    title: "Walk to your destination",
    text:
      "Wandel creates interesting walking routes to wherever you want to go.",
    image: require("../assets/images/walk.png")
  },
  {
    key: "tutorial3",
    title: "Discover new spots",
    text: "The routes will take you along some of the best places in town.",
    image: require("../assets/images/love.png")
  },
  {
    key: "tutorial4",
    title: "Explore the city your way",
    text: "Wandel generates walking routes based on your unique preferences.",
    image: require("../assets/images/select.png")
  },
  {
    key: "tutorial5",
    title: "Choose your interests",
    text: "Select the kinds of places you'd like to walk past",
    image: require("../assets/images/robot-dev.png")
  }
];

export default function TutorialScreen({ navigation }) {
  return (
    <Layout style={styles.container}>
      <AppIntroSlider
        slides={slides}
        renderItem={renderItem}
        activeDotStyle={{ backgroundColor: Colors.tintColor }}
        showNextButton={false}
        showPrevButton={false}
        renderDoneButton={renderDoneButton(navigation)}
      />
    </Layout>
  );
}

TutorialScreen.navigationOptions = {
  header: null
};

const renderItem = ({ item }) => {
  return item.title === "Choose your interests" ? (
    <Layout style={styles.interestsCard}>
      <Text category="h2" style={styles.interestsTitle}>
        {item.title}
      </Text>
      <Text style={styles.description}>{item.text}</Text>
      <Layout style={styles.listContainer}>
        <InterestsList />
      </Layout>
    </Layout>
  ) : (
    <Layout style={styles.card}>
      <Image
        source={item.image}
        style={item.title === "Welcome to Wandel" ? styles.logo : styles.image}
      />
      <Text category="h2" style={styles.title}>
        {item.title}
      </Text>
      <Text style={styles.description}>{item.text}</Text>
    </Layout>
  );
};

const renderDoneButton = navigation => () => (
  <Button onPress={() => navigation.navigate("App")}>Done</Button>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  interestsCard: {
    height: "100%",
    alignItems: "center"
  },
  listContainer: {
    width: "100%"
  },
  logo: {
    height: 170,
    resizeMode: "contain",
    marginBottom: 40
  },
  image: {
    height: 250,
    resizeMode: "contain"
  },
  title: {
    marginVertical: 16
  },
  interestsTitle: {
    marginTop: 128,
    marginBottom: 16
  },
  description: {
    textAlign: "center",
    width: 300
  }
});
