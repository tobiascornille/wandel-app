import React from "react";
import { connect } from "react-redux";
import { setDestination } from "./destinationSlice";
import { Input } from "@ui-kitten/components";

const mapStateToProps = state => ({
  destination: state.destination
});
const mapDispatchToProps = { setDestination };

const Destination = ({ destination, setDestination }) => {
  return (
    <Input
      onChangeText={text => setDestination(text)}
      value={destination}
      placeholder={"Alameda"}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destination);
