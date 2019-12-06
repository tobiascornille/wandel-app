import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { List, ListItem } from "@ui-kitten/components";
import SpotIcon from "../../components/SpotIcon";

const mapStateToProps = state => ({
  routes: state.routes
});

const SpotList = ({ routes }) => {
  currentRoute = routes.list[routes.currentIndex];
  const { spots } = currentRoute;

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      description={item.description}
      style={styles.listItem}
      icon={style => <SpotIcon category={item.category[0]} {...style} />}
      titleStyle={styles.listItemTitle}
    />
  );

  return <List data={spots} renderItem={renderItem} />;
};

export default connect(mapStateToProps)(SpotList);

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 20,
    marginBottom: 2
  },
  listItemTitle: {
    fontSize: 16
  }
});
