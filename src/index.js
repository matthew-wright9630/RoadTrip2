import "./pages/index.css";
import {
  routeSubmitBtn,
  places,
  destinationList,
  destinationSelect,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";

routeSubmitBtn.addEventListener("click", () => {
  const checkedRadio = document.querySelector(
    "input[name=route-option]:checked"
  ).value;
});

