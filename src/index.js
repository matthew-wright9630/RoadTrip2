import "./pages/index.css";
import {
  routeSubmitBtn,
  optimalRoute1,
  optimalRoute2,
  optimalRoute3,
  mapSelector,
  nextButton,
  travelToCityTime,
  totalTravelTime,
  distanceToAttraction,
  closetAttraction,
  travelDescription,
  randomRoute1,
  randomRoute2,
  randomRoute3,
  timeComparison,
} from "./utils/constants.js";
import { Api } from "./components/Api.js";

let seletedRandomRoute;
let selectedOptimalRoute;
let nextBtnIterationNum = 0;
let routeMaximum = 0;

routeSubmitBtn.addEventListener("click", (evt) => {
  nextBtnIterationNum = 0;
  evt.preventDefault();

  if (document.querySelector("input[name=route-option]:checked") === null) {
    return;
  }
  nextButton.disabled = false;
  const checkedRadio = document.querySelector(
    "input[name=route-option]:checked"
  ).value;
  if (checkedRadio === "option-1") {
    routeMaximum = 5;
    selectedOptimalRoute = optimalRoute1;
    seletedRandomRoute = randomRoute1;
  } else if (checkedRadio === "option-2") {
    routeMaximum = 10;
    selectedOptimalRoute = optimalRoute2;
    seletedRandomRoute = randomRoute2;
  } else if (checkedRadio === "option-3") {
    routeMaximum = 15;
    selectedOptimalRoute = optimalRoute3;
    seletedRandomRoute = randomRoute3;
  }
  displayClosestAttraction(selectedOptimalRoute);
  displayTravelInformation(selectedOptimalRoute, nextBtnIterationNum);
  displayRoute(selectedOptimalRoute, nextBtnIterationNum);
  nextButton.addEventListener("click", nextButtonClicked);
});

const api = new Api({
  baseUrl: "https://www.mapquestapi.com/staticmap/v5/map",
  headers: {
    authorization: "vo7WufpJVhEmVGfBjBtiqVu5c0HSjPKa",
    "Content-Type": "application/json",
  },
});

api.getBaseMap().then((res) => {
  setMap(res, "map of California");
});

function displayRoute(route, num) {
  api.addLocation(route, num).then((res) => {
    setMap(res);
  });
}

function setMap(data, routeType) {
  mapSelector.src = data;
  mapSelector.alt = routeType;
}

function showNextRoute(route, num) {
  displayRoute(route, num);
}

function displayTravelInformation(route, num) {
  travelDescription.textContent = `Starting city is ${
    route[num].city
  }, and the destination is ${route[num + 1].city}`;
  travelToCityTime.textContent = `Time to get to next destination: ${
    route[num + 1].segment_travel_time
  } hours`;
  totalTravelTime.textContent = `Total time traveled: ${route[num].rolling_travel_time} hours`;
}

function displayClosestAttraction(route) {
  route.forEach((entry) => {
    if (entry.closest_attraction !== undefined) {
      closetAttraction.textContent = `The closest attraction on this trip will be ${entry.closest_attraction}`;
      distanceToAttraction.textContent = `It will be ${entry.distance_to_attraction} miles away from ${entry.city}`;
    }
  });
}

function nextButtonClicked() {
  nextBtnIterationNum++;
  if (nextBtnIterationNum === routeMaximum) {
    const timeRouteDifference = Math.round(
      seletedRandomRoute[routeMaximum].rolling_travel_time -
        selectedOptimalRoute[routeMaximum].rolling_travel_time
    );
    nextButton.disabled = true;

    totalTravelTime.textContent = `Total time traveled: ${selectedOptimalRoute[routeMaximum].rolling_travel_time}`;
    travelToCityTime.textContent = `You have arrived at the last destination!`;

    timeComparison.textContent = `The optimal route would take ${totalTravelTime.textContent}, while the "random" route would take ${seletedRandomRoute[routeMaximum].rolling_travel_time}. The optimal route would save ${timeRouteDifference} approximately hours!`;
    displayRoute(selectedOptimalRoute, routeMaximum - 1);
  } else {
    displayTravelInformation(selectedOptimalRoute, nextBtnIterationNum);
    showNextRoute(selectedOptimalRoute, nextBtnIterationNum);
  }
}
