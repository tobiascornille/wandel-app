import axios from "axios";

export async function getRoutesInfo(location, destination, interests) {
  // const { latitude, longitude } = location.coords;

  // try {
  //   const routesResponse = await axios.post(
  //     "https://jsonplaceholder.typicode.com/posts",
  //     {
  //       origin: {
  //         lat: latitude,
  //         lng: longitude
  //       },
  //       destination,
  //       preferences: interests
  //     }
  //   );

  //   console.log("API response");
  //   console.log(routesResponse.data);
  // } catch (err) {
  //   throw err;
  // }

  const mockupUrl =
    "https://maps.googleapis.com/maps/api/directions/json?destination=38.736843%2C-9.13075&mode=walking&origin=38.7377939%2C-9.1380037&un%20its=metric&waypoints=38.7367036%2C-9.1383635%7C38.736988%2C-9.135464&optimize=true";

  const mockupSpots = [
    {
      location: {
        lat: 38.7367036,
        lng: -9.1383635
      },
      name: "Frankie's Hot Dogs",
      category: ["restaurant"],
      description: "Hot Dog restaurant.",
      gDetail: null
    },
    {
      location: {
        lat: 38.736988,
        lng: -9.135464
      },
      name: "Alameda Park",
      category: ["park"],
      description: "Large green space.",
      gDetail: null
    }
  ];

  const mockupResponse = [
    {
      routeName: "Route 1",
      url: mockupUrl,
      spots: mockupSpots
    },
    {
      routeName: "Route 2",
      url: mockupUrl,
      spots: mockupSpots
    },
    {
      routeName: "Route 3",
      url: mockupUrl,
      spots: mockupSpots
    }
  ];

  return mockupResponse;
}
