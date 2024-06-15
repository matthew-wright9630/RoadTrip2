import "./pages/index.css";

const destinationAddBtn = document.querySelector(".destination__add-button");

destinationAddBtn.addEventListener("click", () => {
  console.log("clicked!");
});

const destinationSection = new Section(
  {
    items: places,
    renderer: (item, method = "prepend") => {
      const cardElement = createCard(item);
      photoCardList[method](cardElement);
    },
  },
  "#"
);
