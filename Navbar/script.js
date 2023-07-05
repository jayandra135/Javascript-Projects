// var hamburger;
// function navbarMenu() {
//   const navMenu = document.querySelector(".nav-menu");
//   hamburger = document.querySelector(".hamburger");

//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");

//   const menuicon = document.querySelector(".menu-icon");
//   const closeicon = document.querySelector(".close-icon");

//   if (hamburger.style.display === "block") {
//     menuicon.style.display = "none";
//   }
//   closeicon.style.display = "block";
// }

const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

const menuicon = document.querySelector(".menu-icon");
const closeicon = document.querySelector(".close-icon");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
