import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import InterestsList from "../features/interests/InterestsList";

export default function InterestsScreen(props) {
  return (
    <Layout style={styles.container}>
      <InterestsList />
    </Layout>
  );
}

InterestsScreen.navigationOptions = {
  title: "Select interests"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
