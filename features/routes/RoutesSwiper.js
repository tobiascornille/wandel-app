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
  const { list } = routes;
  const sliderWidth = layout.window.width;
  return list.length > 0 ? (
    <Carousel
      data={routes.list}
      renderItem={({ item, index }) => (
        <RouteCard index={index} data={item} navigation={navigation} />
      )}
      sliderWidth={sliderWidth}
      itemWidth={slideWidth + 20}
      inactiveSlideOpacity={1}
      onBeforeSnapToItem={slideIndex => setCurrentIndex(slideIndex)}
    />
  ) : null;
};

export default connect(mapStateToProps, mapDispatchToProps)(RoutesSwiper);
