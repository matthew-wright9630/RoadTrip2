import "./pages/index.css";
import {
  places,
  destinationList,
  destinationSelect,
} from "./utils/constants.js";
import { Section } from "./components/Section.js";

const destinationAddBtn = document.querySelector(".destination__add-button");

destinationAddBtn.addEventListener("click", () => {
  console.log("clicked!");
  console.log(destinationSelect.value);
  addDestination(destinationSelect.value);
});

const destinationSection = new Section(
  {
    items: places,
    renderer: (item, method = "append") => {
      const option = item.name;
      console.log("test");
      destinationList[method](option);
    },
  },
  "#destination-add-form"
);
destinationSection.renderItems();

function addDestination(item) {
    console.log(item);
  destinationSection.addItem({name: item});
  console.log(destinationList);
}
