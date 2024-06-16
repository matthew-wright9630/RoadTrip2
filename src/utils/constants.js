const places = [];
// places.push({name: "San Jose", latitude: 100, longitude: 30}, {name: "Sacramento", latitude: 200, longitude: 30},);

const destinationList = document.querySelector(".destinations__list");

const destinationSelect = document.querySelector(".destinations-form__list");

const routeSubmitBtn = document.querySelector(".routes__form-button");

const mapSelector = document.querySelector(".header__map-image");

const nextButton = document.querySelector(".header__map-next-btn");

const travelToCityTime = document.querySelector(
  ".header__map-data__travel-to-city"
);
const totalTravelTime = document.querySelector(
  ".header__map-data__total-travel-time"
);

const travelDescription = document.querySelector(".header__map-data-city-names");

const closetAttraction = document.querySelector(".header__map-data__attraction__name");
const distanceToAttraction = document.querySelector(".header__map-data__distance-to-attraction");

const optimalRoute1 = [
  {
    city: "Loyalton",
    coordinates: [39.676294, -120.241039],
    segment_distance: 0.0,
    rolling_distance: 0.0,
    segment_travel_time: 0.0,
    rolling_travel_time: 0.0,
  },
  {
    city: "Cudahy",
    coordinates: [33.960569, -118.18535],
    segment_distance: 410.0,
    rolling_distance: 410.0,
    segment_travel_time: 8.08,
    rolling_travel_time: 8.08,
  },
  {
    city: "Farmersville",
    coordinates: [36.297728, -119.206778],
    segment_distance: 171.0,
    rolling_distance: 581.0,
    segment_travel_time: 3.37,
    rolling_travel_time: 11.45,
  },
  {
    city: "Stockton",
    coordinates: [37.957703, -121.290781],
    segment_distance: 162.0,
    rolling_distance: 744.0,
    segment_travel_time: 3.2,
    rolling_travel_time: 14.65,
  },
  {
    city: "Mill Valley",
    coordinates: [37.906036, -122.544975],
    segment_distance: 69.0,
    rolling_distance: 812.0,
    segment_travel_time: 1.35,
    rolling_travel_time: 16.0,
    closest_attraction: "Alcatraz",
    distance_to_attraction: 9,
  },
  {
    city: "Loyalton",
    coordinates: [39.676294, -120.241039],
    segment_distance: 174.0,
    rolling_distance: 987.0,
    segment_travel_time: 3.43,
    rolling_travel_time: 19.43,
  },
];

const optimalRoute2 = [
  {
    city: "Cudahy",
    coordinates: [33.960569, -118.18535],
    segment_distance: 0.0,
    rolling_distance: 0.0,
    segment_travel_time: 0.0,
    rolling_travel_time: 0.0,
  },
  {
    city: "Laguna Beach",
    coordinates: [33.542247, -117.783111],
    segment_distance: 37.0,
    rolling_distance: 37.0,
    segment_travel_time: 0.73,
    rolling_travel_time: 0.73,
  },
  {
    city: "Calimesa",
    coordinates: [34.003903, -117.061975],
    segment_distance: 52.0,
    rolling_distance: 89.0,
    segment_travel_time: 1.03,
    rolling_travel_time: 1.76,
  },
  {
    city: "Yreka",
    coordinates: [41.735419, -122.634472],
    segment_distance: 614.0,
    rolling_distance: 703.0,
    segment_travel_time: 12.09,
    rolling_travel_time: 13.85,
  },
  {
    city: "Pittsburg",
    coordinates: [38.027975, -121.884681],
    segment_distance: 259.0,
    rolling_distance: 962.0,
    segment_travel_time: 5.1,
    rolling_travel_time: 18.95,
  },
  {
    city: "Santa Paula",
    coordinates: [34.354167, -119.059269],
    segment_distance: 298.0,
    rolling_distance: 1260.0,
    segment_travel_time: 5.88,
    rolling_travel_time: 24.83,
  },
  {
    city: "Oxnard",
    coordinates: [34.197506, -119.177053],
    segment_distance: 13.0,
    rolling_distance: 1273.0,
    segment_travel_time: 0.25,
    rolling_travel_time: 25.08,
  },
  {
    city: "Fillmore",
    coordinates: [34.399164, -118.918153],
    segment_distance: 20.0,
    rolling_distance: 1293.0,
    segment_travel_time: 0.4,
    rolling_travel_time: 25.48,
  },
  {
    city: "Commerce",
    coordinates: [34.000569, -118.159792],
    segment_distance: 51.0,
    rolling_distance: 1345.0,
    segment_travel_time: 1.01,
    rolling_travel_time: 26.49,
    closest_attraction: "Universal Studios Hollywood",
    distance_to_attraction: 15,
  },
  {
    city: "Temple City",
    coordinates: [34.107231, -118.057847],
    segment_distance: 9.0,
    rolling_distance: 1354.0,
    segment_travel_time: 0.19,
    rolling_travel_time: 26.67,
  },
  {
    city: "Cudahy",
    coordinates: [33.960569, -118.18535],
    segment_distance: 12.0,
    rolling_distance: 1367.0,
    segment_travel_time: 0.25,
    rolling_travel_time: 26.92,
  },
];

const optimalRoute3 = [
  {
    city: "Milpitas",
    coordinates: [37.428272, -121.906625],
    segment_distance: 0.0,
    rolling_distance: 0.0,
    segment_travel_time: 0.0,
    rolling_travel_time: 0.0,
  },
  {
    city: "Santa Maria",
    coordinates: [34.953033, -120.435719],
    segment_distance: 189.0,
    rolling_distance: 189.0,
    segment_travel_time: 3.73,
    rolling_travel_time: 3.73,
  },
  {
    city: "Arvin",
    coordinates: [35.2018, -118.833106],
    segment_distance: 92.0,
    rolling_distance: 282.0,
    segment_travel_time: 1.82,
    rolling_travel_time: 5.55,
  },
  {
    city: "Blythe",
    coordinates: [33.617233, -114.589175],
    segment_distance: 266.0,
    rolling_distance: 548.0,
    segment_travel_time: 5.24,
    rolling_travel_time: 10.79,
  },
  {
    city: "Calexico",
    coordinates: [32.678947, -115.498883],
    segment_distance: 83.0,
    rolling_distance: 631.0,
    segment_travel_time: 1.64,
    rolling_travel_time: 12.43,
  },
  {
    city: "Cathedral City",
    coordinates: [33.779742, -116.465292],
    segment_distance: 94.0,
    rolling_distance: 725.0,
    segment_travel_time: 1.86,
    rolling_travel_time: 14.29,
  },
  {
    city: "Calimesa",
    coordinates: [34.003903, -117.061975],
    segment_distance: 38.0,
    rolling_distance: 763.0,
    segment_travel_time: 0.74,
    rolling_travel_time: 15.03,
  },
  {
    city: "Pomona",
    coordinates: [34.055228, -117.752306],
    segment_distance: 40.0,
    rolling_distance: 803.0,
    segment_travel_time: 0.78,
    rolling_travel_time: 15.81,
  },
  {
    city: "Compton",
    coordinates: [33.89585, -118.220072],
    segment_distance: 29.0,
    rolling_distance: 832.0,
    segment_travel_time: 0.57,
    rolling_travel_time: 16.38,
  },
  {
    city: "Moorpark",
    coordinates: [34.144897, -118.268742],
    segment_distance: 17.0,
    rolling_distance: 849.0,
    segment_travel_time: 0.34,
    rolling_travel_time: 16.73,
    closest_attraction: "Universal Studios Hollywood",
    distance_to_attraction: 15,
  },
  {
    city: "Fowler",
    coordinates: [36.630506, -119.678469],
    segment_distance: 189.0,
    rolling_distance: 1038.0,
    segment_travel_time: 3.72,
    rolling_travel_time: 20.45,
  },
  {
    city: "Hollister",
    coordinates: [36.852453, -121.401603],
    segment_distance: 97.0,
    rolling_distance: 1135.0,
    segment_travel_time: 1.91,
    rolling_travel_time: 22.36,
  },
  {
    city: "Riverbank",
    coordinates: [37.736039, -120.935489],
    segment_distance: 66.0,
    rolling_distance: 1201.0,
    segment_travel_time: 1.3,
    rolling_travel_time: 23.66,
  },
  {
    city: "Yreka",
    coordinates: [41.735419, -122.634472],
    segment_distance: 290.0,
    rolling_distance: 1492.0,
    segment_travel_time: 5.72,
    rolling_travel_time: 29.38,
  },
  {
    city: "Millbrae",
    coordinates: [37.598547, -122.387194],
    segment_distance: 286.0,
    rolling_distance: 1777.0,
    segment_travel_time: 5.63,
    rolling_travel_time: 35.01,
  },
  {
    city: "Milpitas",
    coordinates: [37.428272, -121.906625],
    segment_distance: 29.0,
    rolling_distance: 1806.0,
    segment_travel_time: 0.57,
    rolling_travel_time: 35.57,
  },
];

export {
  places,
  destinationList,
  destinationSelect,
  routeSubmitBtn,
  optimalRoute1,
  optimalRoute2,
  optimalRoute3,
  mapSelector,
  nextButton,
  travelToCityTime,
  totalTravelTime,
  closetAttraction,
  distanceToAttraction,
  travelDescription
};
