const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");

// navToggle.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });

// or use add and remove with an if statement

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
