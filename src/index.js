import "./pages/index.css";
// import "../optimal_route_5.json";
import {
  places,
  destinationList,
  destinationSelect,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";

// fetch("optimal_route_5.json")
//     .then(response => response.json)
//     .then(json => console.log(json));

// async function getMapData() {
//   const requestURL = require("../optimal_route_5.json");
//   const request = new Request(requestURL);

//   const response = await fetch(request);
//   const routeDataText = await response.text();

//   const routeData = JSON.parse(routeDataText);
// }

// getMapData();

// const destinationAddBtn = document.querySelector(".destination__add-button");

// destinationAddBtn.addEventListener("click", () => {
//   console.log("clicked!");
//   console.log(destinationSelect.value);
//   addDestination(destinationSelect.value);
// });

// const destinationSection = new Section(
//   {
//     items: places,
//     renderer: (item, method = "append") => {
//       const option = item.name;
//       console.log("test");
//       destinationList[method](option);
//     },
//   },
//   "#destination-add-form"
// );
// destinationSection.renderItems();

// function addDestination(item) {
//     console.log(item);
//   destinationSection.addItem({name: item});
//   console.log(destinationList);
// }
