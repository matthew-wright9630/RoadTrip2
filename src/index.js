import "./pages/index.css";
import {
  routeSubmitBtn,
  places,
  destinationList,
  destinationSelect,
  optimalRoute1,
  optimalRoute2,
  optimalRoute3,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";
import { Api } from "./components/Api.js";

const mapSelector = document.querySelector(".map__image");

const nextButton = document.querySelector(".map__next-btn");

routeSubmitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let selectedRoute;
  let nextBtnIterationNum = 0;
  let routeMaximum = 0;
  if (document.querySelector("input[name=route-option]:checked") === null) {
    return;
  }
  document.querySelector(".map__next-btn").removeAttribute("disabled");
  const checkedRadio = document.querySelector(
    "input[name=route-option]:checked"
  ).value;
  if (checkedRadio === "option-1") {
    routeMaximum = 5;
    selectedRoute = optimalRoute1;
  } else if (checkedRadio === "option-2") {
    routeMaximum = 10;
    selectedRoute = optimalRoute2;
  } else if (checkedRadio === "option-3") {
    routeMaximum = 15;
    selectedRoute = optimalRoute3;
  }
  displayRoute(selectedRoute, nextBtnIterationNum);
  nextButton.addEventListener("click", () => {
    nextBtnIterationNum++;
    if (nextBtnIterationNum === routeMaximum) {
      nextBtnIterationNum = 0;
    }
    showNextRoute(selectedRoute, nextBtnIterationNum);
  });
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

function displayRoute(route, num) {
  console.log(route);
  api.addLocation(route, num).then((res) => {
    console.log(res, "res");
    setMap(res);
  });
}

function setMap(data, routeType) {
  console.log(data, "data");
  mapSelector.src = data;
  mapSelector.alt = routeType;
}

function showNextRoute(route, num) {
  displayRoute(route, num);
}

// function addALocation(location) {
//     let locationList = ""
//     for (let i=0; i<location.length-1; i++) {
//      locationList += `start=${location[i].coordinates}|marker-${i}end=${location[i+1].coordinates}|marker-${i+1}`;
//     }
// }

// setMap(addALocation(optimalRoute1),"optimal 1")

// addALocation(optimalRoute1);
