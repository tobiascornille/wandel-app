import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { slideWidth, slideHeight } from "../../constants/Layout";

const RouteCard = ({ data, navigation }) => {
  const { navigate } = navigation;
  const { routeName, distance, duration } = data;
  return (
    <View style={styles.slide}>
      <View style={styles.textContainer}>
        <Text category="h4">{routeName}</Text>
        <Text category="h6">
          {duration} - {distance}
        </Text>
        <Layout style={styles.footer}>
          <Button style={styles.button} onPress={() => navigate("SpotList")}>
            Spot List
          </Button>
          <Button style={styles.button} onPress={() => navigate("Directions")}>
            Directions
          </Button>
        </Layout>
      </View>
    </View>
  );
};

export default RouteCard;

const styles = StyleSheet.create({
  slide: {
    width: slideWidth + 20,
    height: slideHeight + 40,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  textContainer: {
    width: slideWidth,
    justifyContent: "center",
    elevation: 6,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    height: 30
  }
});
