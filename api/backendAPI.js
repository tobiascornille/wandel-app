import axios from "axios";

export async function getRoutes(location, destination, interests) {
  const { latitude, longitude } = location.coords;

  try {
    const routesResponse = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        origin: {
          lat: latitude,
          lng: longitude
        },
        destination,
        preferences: interests
      }
    );

    console.log(routesResponse.data);
    return routesResponse.data;
  } catch (err) {
    throw err;
  }
}
