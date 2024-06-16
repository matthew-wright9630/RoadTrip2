const places = [];
// places.push({name: "San Jose", latitude: 100, longitude: 30}, {name: "Sacramento", latitude: 200, longitude: 30},);

const destinationList = document.querySelector(".destinations__list");

const destinationSelect = document.querySelector(".destinations-form__list");

const routeSubmitBtn = document.querySelector(".routes__form-button");

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

export {
  places,
  destinationList,
  destinationSelect,
  routeSubmitBtn,
  optimalRoute1,
};
