import React from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Icon, List, ListItem } from "react-native-ui-kitten";

const mapStateToProps = state => ({
  routes: state.routes
});

const SpotList = ({ routes }) => {
  currentRoute = routes.list[routes.currentIndex]; // TODO: move to selector
  const { spots } = currentRoute;

  const renderItemIcon = category => {
    let name = category;
    switch (category) {
      case "restaurant":
        name = "silverware-fork-knife";
        break;
      case "park":
        name = "nature-people";
    }
    return style => <Icon {...style} name="star" />;
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      description={item.description}
      style={styles.listItem}
      icon={renderItemIcon(item.category[0])}
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
