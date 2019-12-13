import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { slideWidth, slideHeight } from "../../constants/Layout";
import Colors from "../../constants/Colors";

const mapStateToProps = state => ({
  routes: state.routes
});

const RoutesSwiper = ({ routes }) => {
  const htmlInstructions =
    routes.list[routes.currentIndex].legs[0].steps[0].html_instructions;
  const decodedInstructions = decodeURI(htmlInstructions);
  const instructionsWithoutBold = decodedInstructions.replace(
    /(<.?b>|<div.*)/g,
    ""
  );
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={{ color: "white" }} category="h4">
          {instructionsWithoutBold}
        </Text>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(RoutesSwiper);

const styles = StyleSheet.create({
  card: {
    width: slideWidth + 20,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  textContainer: {
    width: slideWidth,
    justifyContent: "center",
    elevation: 6,
    backgroundColor: Colors.tintColor,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16
  }
});
