import React from "react";
import { connect } from "react-redux";
import Carousel from "react-native-snap-carousel";
import layout from "../../constants/Layout";
import { slideWidth } from "../../constants/Layout";
import RouteCard from "./RouteCard";
import { setCurrentIndex } from "./routesSlice";

const mapStateToProps = state => ({
  routes: state.routes
});

const mapDispatchToProps = { setCurrentIndex };

const RoutesSwiper = ({ routes, setCurrentIndex, navigation }) => {
  const sliderWidth = layout.window.width;
  return (
    <Carousel
      data={routes.list}
      renderItem={({ item, index }) => (
        <RouteCard index={index} data={item} navigation={navigation} />
      )}
      sliderWidth={sliderWidth}
      itemWidth={slideWidth}
      onBeforeSnapToItem={slideIndex => setCurrentIndex(slideIndex)}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesSwiper);

// const styles = StyleSheet.create({
// });
