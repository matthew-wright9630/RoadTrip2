import "./pages/index.css";
import {
  routeSubmitBtn,
  places,
  destinationList,
  destinationSelect,
  optimalRoute1,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { Api } from "./components/Api.js";

const mapSelector = document.querySelector(".map__image");

routeSubmitBtn.addEventListener("click", () => {
  const checkedRadio = document.querySelector(
    "input[name=route-option]:checked"
  ).value;
});

/*const src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDA0_t1eOPoRv08k-t0SYCxqHKZxduskVU&callback=initMap";

function initMap() {
  const options = {
    zoom: 6,
    center: { lat: 37.7749, lng: -122.4194 },
  };
  const map = new google.maps.Map(document.getElementById("map"), options);
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const selectedOption = document.querySelector(
  //     'input[name="route-option"]:checked'
  //   ).value;

  //   switch (selectedOption) {
  //     case 'option1':
  //       runOption1();
  //       break;
  //     case 'option2':
  //       runOption2();
  //       break;
  //     case 'option3':
  //       runOption3();
  //       break;
  //     default:
  //       console.log('No option selected');
  //   }
  // }

  // function runOption2 = {

  //   //delete this
  //   console.log('Option 2 selected');
  // };

  // function runOption3 = {
  //   //delete this
  //   console.log('Option 3 selected');
  // }

  // function runOption1() {
  //   //delete this
  //   console.log('Option 1 selected');
  // }

  const cities = {
    data: [
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
    ],
  };
  for (let i = 0; i < cities.data.length; i++) {
    addMarker({
      coords: {
        lat: cities.data[i].coordinates[0],
        lng: cities.data[i].coordinates[1],
      },
    });
  }

  function addMarker(props) {
    marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });
  }
}

console.log("test");
initMap();
console.log("map is init");
*/

const api = new Api({
  baseUrl: "https://www.mapquestapi.com/staticmap/v5/map",
  headers: {
    authorization: "vo7WufpJVhEmVGfBjBtiqVu5c0HSjPKa",
    "Content-Type": "application/json",
  },
});

api.getBaseMap().then((res) => {
  setMap(res, "map of California");
  console.log(mapSelector);
});

api.addLocation(optimalRoute1).then((res) => {
  setMap(res, "5 locations added");
});

function setMap(data, routeType) {
  mapSelector.src = data;
  mapSelector.alt = routeType;
}
// insertMap(baseMap);
