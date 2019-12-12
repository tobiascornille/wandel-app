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
    const distance = getTotalDistance(legs);
    const duration = getTotalDuration(legs);

    return {
      waypoint_order,
      region,
      legs,
      polylineCoords,
      distance,
      duration
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
    latitudeDelta: deltaX + 0.2 * deltaX,
    longitudeDelta: deltaY + 0.2 * deltaY
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

const getTotalDistance = legs => {
  const meters = legs.reduce((acc, { distance }) => acc + distance.value, 0);
  const kilometers = Math.round(meters / 100) / 10; // round to 1 number after comma
  return `${kilometers} km`;
};

const getTotalDuration = legs => {
  const seconds = legs.reduce((acc, { duration }) => acc + duration.value, 0);
  const minutes = Math.round(seconds / 60);
  return `${minutes} mins`;
};
