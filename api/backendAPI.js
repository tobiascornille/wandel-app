import axios from "axios";

export async function getRoutes(location, destination, interests) {
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

  const mockup = [
    {
      routeName: "Route 1",
      route: null,
      spots: mockupSpots
    },
    {
      routeName: "Route 2",
      route: null,
      spots: mockupSpots
    },
    {
      routeName: "Route 3",
      route: null,
      spots: mockupSpots
    }
  ];
  return mockup;
  // } catch (err) {
  //   throw err;
  // }
}
