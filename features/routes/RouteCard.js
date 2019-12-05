import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { slideWidth, slideHeight } from "../../constants/Layout";

const RouteCard = ({ data, navigation }) => {
  const { navigate } = navigation;
  const { routeName, legs } = data;
  const { distance, duration } = legs[0];
  return (
    <Layout style={styles.slide}>
      <Layout style={styles.textContainer}>
        <Text category="h4">{routeName}</Text>
        <Text category="h6">
          {duration.text} - {distance.text}
        </Text>
        <Layout style={styles.footer}>
          <Button style={styles.button} onPress={() => navigate("SpotList")}>
            Spot List
          </Button>
          <Button style={styles.button} onPress={() => navigate("Directions")}>
            Directions
          </Button>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  slide: {
    width: slideWidth + 10,
    height: slideHeight,
    paddingHorizontal: 5,
    paddingBottom: 18
  },
  textContainer: {
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10
  },
  button: {
    height: 30,
    width: slideWidth / 3,
    marginVertical: 10
  }
});
