import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { slideWidth, slideHeight } from "../../constants/Layout";

const RouteCard = ({ data, navigation }) => {
  const { navigate } = navigation;
  const { routeName, legs } = data;
  const { distance, duration } = legs[0];
  return (
    <View style={styles.slide}>
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
    </View>
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  slide: {
    borderColor: "#ddd",
    width: slideWidth,
    height: slideHeight,
    borderRadius: 8,
    elevation: 2
  },
  textContainer: {
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    height: 30,
    marginVertical: 10
  }
});
