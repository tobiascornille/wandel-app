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

  const route = {
    geocoded_waypoints: [
      {
        geocoder_status: "OK",
        place_id: "ChIJ08sepaMzGQ0R6LQAyVZHB3E",
        types: ["premise"]
      },
      {
        geocoder_status: "OK",
        place_id: "ChIJFx-oSqIzGQ0RI0SlMcfHgAg",
        types: ["establishment", "point_of_interest", "university"]
      },
      {
        geocoder_status: "OK",
        place_id: "ChIJY1Em26IzGQ0RiXe-NQIBB4E",
        types: ["street_address"]
      },
      {
        geocoder_status: "OK",
        place_id: "ChIJp30Gur0zGQ0RLkyAxY90zII",
        types: ["street_address"]
      }
    ],
    routes: [
      {
        bounds: {
          northeast: {
            lat: 38.7378796,
            lng: -9.130749399999999
          },
          southwest: {
            lat: 38.7365107,
            lng: -9.1387848
          }
        },
        copyrights: "Dados do mapa ©2019 Google",
        legs: [
          {
            distance: {
              text: "0,3 km",
              value: 261
            },
            duration: {
              text: "4 min",
              value: 268
            },
            end_address: "Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal",
            end_location: {
              lat: 38.7367012,
              lng: -9.138412199999999
            },
            start_address:
              "Pavilhão de Mecânica IV, Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal",
            start_location: {
              lat: 38.7378,
              lng: -9.1380935
            },
            steps: [
              {
                distance: {
                  text: "7 m",
                  value: 7
                },
                duration: {
                  text: "1 min",
                  value: 7
                },
                end_location: {
                  lat: 38.7377944,
                  lng: -9.138175799999999
                },
                html_instructions:
                  'Siga para \u003cb\u003eoeste\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "g~lkF`xwv@?H@F"
                },
                start_location: {
                  lat: 38.7378,
                  lng: -9.1380935
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: -1
                },
                distance: {
                  text: "31 m",
                  value: 31
                },
                duration: {
                  text: "1 min",
                  value: 28
                },
                end_location: {
                  lat: 38.7378333,
                  lng: -9.1385264
                },
                html_instructions:
                  'Caminhe durante 31&nbsp;m\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "e~lkFrxwv@?B?LADEl@"
                },
                start_location: {
                  lat: 38.7377944,
                  lng: -9.138175799999999
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: -1
                },
                distance: {
                  text: "16 m",
                  value: 16
                },
                duration: {
                  text: "1 min",
                  value: 20
                },
                end_location: {
                  lat: 38.7378237,
                  lng: -9.138474799999999
                },
                html_instructions:
                  'Suba as escadas \u003cb\u003eaté\u003c/b\u003e ao 0\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "m~lkFxzwv@I??IJA"
                },
                start_location: {
                  lat: 38.7378333,
                  lng: -9.1385264
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: 0
                },
                distance: {
                  text: "4 m",
                  value: 4
                },
                duration: {
                  text: "1 min",
                  value: 7
                },
                end_location: {
                  lat: 38.7378206,
                  lng: -9.138519799999999
                },
                html_instructions: "Caminhe durante 4&nbsp;m",
                polyline: {
                  points: "k~lkFlzwv@?H"
                },
                start_location: {
                  lat: 38.7378237,
                  lng: -9.138474799999999
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: 0
                },
                distance: {
                  text: "15 m",
                  value: 15
                },
                duration: {
                  text: "1 min",
                  value: 19
                },
                end_location: {
                  lat: 38.7378211,
                  lng: -9.138485899999999
                },
                html_instructions:
                  'Suba as escadas \u003cb\u003eaté\u003c/b\u003e ao 1º andar\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "k~lkFvzwv@I@?GH?"
                },
                start_location: {
                  lat: 38.7378206,
                  lng: -9.138519799999999
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: 1
                },
                distance: {
                  text: "68 m",
                  value: 68
                },
                duration: {
                  text: "1 min",
                  value: 86
                },
                end_location: {
                  lat: 38.7373429,
                  lng: -9.138756599999999
                },
                html_instructions: "Caminhe durante 68&nbsp;m",
                polyline: {
                  points: "k~lkFpzwv@Jb@PDZCD?PAJN@@"
                },
                start_location: {
                  lat: 38.7378211,
                  lng: -9.138485899999999
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: 1
                },
                distance: {
                  text: "12 m",
                  value: 12
                },
                duration: {
                  text: "1 min",
                  value: 14
                },
                end_location: {
                  lat: 38.7373453,
                  lng: -9.1387848
                },
                html_instructions:
                  'Desça as escadas \u003cb\u003eaté\u003c/b\u003e ao 0\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "k{lkFf|wv@HA?DK?"
                },
                start_location: {
                  lat: 38.7373429,
                  lng: -9.138756599999999
                },
                travel_mode: "WALKING"
              },
              {
                building_level: {
                  number: 0
                },
                distance: {
                  text: "19 m",
                  value: 19
                },
                duration: {
                  text: "1 min",
                  value: 19
                },
                end_location: {
                  lat: 38.737267,
                  lng: -9.1386337
                },
                html_instructions:
                  'Caminhe durante 19&nbsp;m\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                polyline: {
                  points: "m{lkFj|wv@@K?KHC@?@A"
                },
                start_location: {
                  lat: 38.7373453,
                  lng: -9.1387848
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "18 m",
                  value: 18
                },
                duration: {
                  text: "1 min",
                  value: 13
                },
                end_location: {
                  lat: 38.7371029,
                  lng: -9.138616799999999
                },
                html_instructions: "Siga para \u003cb\u003esul\u003c/b\u003e",
                polyline: {
                  points: "}zlkFl{wv@`@A"
                },
                start_location: {
                  lat: 38.737267,
                  lng: -9.1386337
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "5 m",
                  value: 5
                },
                duration: {
                  text: "1 min",
                  value: 4
                },
                end_location: {
                  lat: 38.7370988,
                  lng: -9.138677399999999
                },
                html_instructions: "Vire à \u003cb\u003edireita\u003c/b\u003e",
                maneuver: "turn-right",
                polyline: {
                  points: "{ylkFj{wv@?J"
                },
                start_location: {
                  lat: 38.7371029,
                  lng: -9.138616799999999
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "34 m",
                  value: 34
                },
                duration: {
                  text: "1 min",
                  value: 31
                },
                end_location: {
                  lat: 38.7367924,
                  lng: -9.1386483
                },
                html_instructions:
                  'Vire à \u003cb\u003eesquerda\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                maneuver: "turn-left",
                polyline: {
                  points: "{ylkFv{wv@NARAXA"
                },
                start_location: {
                  lat: 38.7370988,
                  lng: -9.138677399999999
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "20 m",
                  value: 20
                },
                duration: {
                  text: "1 min",
                  value: 12
                },
                end_location: {
                  lat: 38.7368083,
                  lng: -9.1384209
                },
                html_instructions: "Vire à \u003cb\u003eesquerda\u003c/b\u003e",
                maneuver: "turn-left",
                polyline: {
                  points: "}wlkFp{wv@Cm@"
                },
                start_location: {
                  lat: 38.7367924,
                  lng: -9.1386483
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "12 m",
                  value: 12
                },
                duration: {
                  text: "1 min",
                  value: 8
                },
                end_location: {
                  lat: 38.7367012,
                  lng: -9.138412199999999
                },
                html_instructions:
                  'Vire à \u003cb\u003edireita\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eO destino encontra-se à esquerda\u003c/div\u003e',
                maneuver: "turn-right",
                polyline: {
                  points: "axlkFbzwv@TA"
                },
                start_location: {
                  lat: 38.7368083,
                  lng: -9.1384209
                },
                travel_mode: "WALKING"
              }
            ],
            traffic_speed_entry: [],
            via_waypoint: []
          },
          {
            distance: {
              text: "0,3 km",
              value: 310
            },
            duration: {
              text: "4 min",
              value: 256
            },
            end_address:
              "Alameda Dom Afonso Henriques 43A, 1000-252 Lisboa, Portugal",
            end_location: {
              lat: 38.7365495,
              lng: -9.135419299999999
            },
            start_address: "Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal",
            start_location: {
              lat: 38.7367012,
              lng: -9.138412199999999
            },
            steps: [
              {
                distance: {
                  text: "12 m",
                  value: 12
                },
                duration: {
                  text: "1 min",
                  value: 10
                },
                end_location: {
                  lat: 38.7368083,
                  lng: -9.1384209
                },
                html_instructions: "Siga para \u003cb\u003enorte\u003c/b\u003e",
                polyline: {
                  points: "kwlkF`zwv@U@"
                },
                start_location: {
                  lat: 38.7367012,
                  lng: -9.138412199999999
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "0,1 km",
                  value: 143
                },
                duration: {
                  text: "2 min",
                  value: 119
                },
                end_location: {
                  lat: 38.7369151,
                  lng: -9.136773999999999
                },
                html_instructions:
                  'Vire à \u003cb\u003edireita\u003c/b\u003e em direção a \u003cb\u003eAv. Manuel da Maia\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eSuba pelas escadas\u003c/div\u003e',
                maneuver: "turn-right",
                polyline: {
                  points: "axlkFbzwv@EsACcACkACu@Co@"
                },
                start_location: {
                  lat: 38.7368083,
                  lng: -9.1384209
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "44 m",
                  value: 44
                },
                duration: {
                  text: "1 min",
                  value: 31
                },
                end_location: {
                  lat: 38.7366592,
                  lng: -9.1365433
                },
                html_instructions:
                  "Vire à \u003cb\u003edireita\u003c/b\u003e em direção a \u003cb\u003eAv. Manuel da Maia\u003c/b\u003e",
                maneuver: "turn-right",
                polyline: {
                  points: "wxlkFxowv@`@AFABABC@K?W"
                },
                start_location: {
                  lat: 38.7369151,
                  lng: -9.136773999999999
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "14 m",
                  value: 14
                },
                duration: {
                  text: "1 min",
                  value: 11
                },
                end_location: {
                  lat: 38.7365372,
                  lng: -9.1365341
                },
                html_instructions:
                  "Vire \u003cb\u003eà direita\u003c/b\u003e em direção a \u003cb\u003eAv. Manuel da Maia\u003c/b\u003e",
                maneuver: "turn-right",
                polyline: {
                  points: "cwlkFjnwv@VA"
                },
                start_location: {
                  lat: 38.7366592,
                  lng: -9.1365433
                },
                travel_mode: "WALKING"
              },
              {
                distance: {
                  text: "0,1 km",
                  value: 97
                },
                duration: {
                  text: "1 min",
                  value: 85
                },
                end_location: {
                  lat: 38.7365495,
                  lng: -9.135419299999999
                },
                html_instructions:
                  'Vire \u003cb\u003eà esquerda\u003c/b\u003e em direção a \u003cb\u003eAlameda Dom Afonso Henriques\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eO destino encontra-se à esquerda\u003c/div\u003e',
                maneuver: "turn-left",
                polyline: {
                  points: "kvlkFhnwv@DU?wAGoB"
                },
                start_location: {
                  lat: 38.7365372,
                  lng: -9.1365341
                },
                travel_mode: "WALKING"
              }
            ],
            traffic_speed_entry: [],
            via_waypoint: []
          },
          {
            distance: {
              text: "0,4 km",
              value: 406
            },
            duration: {
              text: "6 min",
              value: 345
            },
            end_address:
              "Alameda Dom Afonso Henriques 13A, 1900-179 Lisboa, Portugal",
            end_location: {
              lat: 38.7368389,
              lng: -9.130749399999999
            },
            start_address:
              "Alameda Dom Afonso Henriques 43A, 1000-252 Lisboa, Portugal",
            start_location: {
              lat: 38.7365495,
              lng: -9.135419299999999
            },
            steps: [
              {
                distance: {
                  text: "0,4 km",
                  value: 406
                },
                duration: {
                  text: "6 min",
                  value: 345
                },
                end_location: {
                  lat: 38.7368389,
                  lng: -9.130749399999999
                },
                html_instructions:
                  "Siga para \u003cb\u003eeste\u003c/b\u003e em \u003cb\u003eAlameda Dom Afonso Henriques\u003c/b\u003e em direção a \u003cb\u003eR. Quirino da Fonseca\u003c/b\u003e",
                polyline: {
                  points: "mvlkFjgwv@?AIcDCcACy@@UA]EaACcAEyAEwAEgBCsACs@Ce@"
                },
                start_location: {
                  lat: 38.7365495,
                  lng: -9.135419299999999
                },
                travel_mode: "WALKING"
              }
            ],
            traffic_speed_entry: [],
            via_waypoint: []
          }
        ],
        overview_polyline: {
          points:
            "g~lkF`xwv@@b@Gr@I??IJA?HI@?GH?Jb@PDZCVALPHA?DK?@K?KHCBA`@A?JNAl@CCm@TAU@EsAGoCGeBh@CFE@c@VADUGgEIeDG}B?s@UwHQuG"
        },
        summary: "",
        warnings: [
          "As direções a pé estão em versão beta. Tenha atenção – Este trajeto poderá não incluir passeios ou caminhos para peões."
        ],
        waypoint_order: [0, 1]
      }
    ],
    status: "OK"
  };

  const mockup = [
    {
      routeName: "Route 1",
      route,
      spots: mockupSpots
    },
    {
      routeName: "Route 2",
      route,
      spots: mockupSpots
    },
    {
      routeName: "Route 3",
      route,
      spots: mockupSpots
    }
  ];
  return mockup;
  // } catch (err) {
  //   throw err;
  // }
}
