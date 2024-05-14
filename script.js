const card = document.getElementById("card");
const env = document.querySelector(".env");

var clicked = false;

card.addEventListener("click", function () {
  if (!clicked) {
    console.log("front");
    card.classList.add("front");
    card.classList.remove("back");
    clicked = true;
  } else if (clicked) {
    console.log("i");
    card.classList.add("back");
    card.classList.remove("front");
    clicked = false;
    console.log(clicked);
  }
});
