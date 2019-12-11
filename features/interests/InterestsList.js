import React, { useEffect } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { toggleInterest } from "./interestsSlice";
import { List, ListItem, CheckBox } from "@ui-kitten/components";

const mapStateToProps = state => ({
  interests: state.interests
});
const mapDispatchToProps = { toggleInterest };

const InterestsList = ({ interests, toggleInterest }) => {
  interestNames = Object.keys(interests);
  interestsList = Object.entries(interests);

  useEffect(() => {
    const updateInterestsStorage = async () => {
      await AsyncStorage.setItem("interests", JSON.stringify(interests));
    };

    updateInterestsStorage();
  });

  const renderAccessory = (style, index) => (
    <CheckBox
      style={style}
      checked={interestsList[index][1]}
      onChange={() => {
        toggleInterest(interestsList[index][0]);
      }}
    />
  );

  const renderItem = ({ item }) => (
    <ListItem
      title={item}
      accessory={renderAccessory}
      style={styles.listItem}
      titleStyle={styles.listItemTitle}
    />
  );

  return <List data={interestNames} renderItem={renderItem} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestsList);

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 20,
    marginBottom: 2
  },
  listItemTitle: {
    fontSize: 16
  }
});
