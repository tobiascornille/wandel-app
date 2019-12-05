import axios from "axios";
import { API_KEY } from "./secret";
import Polyline from "@mapbox/polyline";

export async function getDirections(url) {
  const urlWithKey = `${url}&key=${API_KEY}`;
  const directionsResponse = await axios.get(urlWithKey);
  const { routes, status } = directionsResponse.data;
  if (status === 200 || status === "OK") {
    const { bounds, legs, overview_polyline, waypoint_order } = routes[0];
    const region = createRegion(bounds);
    const polylineCoords = createPolylineCoords(overview_polyline);

    return {
      waypoint_order,
      region,
      legs,
      polylineCoords
    };
  } else {
    throw `Status code: ${status}`;
  }
}

const createRegion = ({ northeast, southwest }) => {
  const maxX = northeast.lat;
  const minX = southwest.lat;

  const maxY = northeast.lng;
  const minY = southwest.lng;

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = maxX - minX;
  const deltaY = maxY - minY;

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX + 0.1 * deltaX,
    longitudeDelta: deltaY + 0.1 * deltaY
  };
};

const createPolylineCoords = ({ points }) => {
  const decodedPoints = Polyline.decode(points);
  const coords = decodedPoints.map(p => ({
    latitude: p[0],
    longitude: p[1]
  }));
  return coords;
};
