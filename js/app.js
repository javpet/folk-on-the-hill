const menuContainer = document.querySelector(".menu__container");
const menuContainerLogo = document.querySelector(".menu__container__logo");
const menuIcon = document.querySelector(".menu");
const flyIn = document.querySelector(".menu__navigation");
const links = document.querySelectorAll("nav a");
const logo = document.querySelector(".about__container__logo");

menuIcon.addEventListener("click", function() {
  if (this.classList.contains("exit")) {
    this.src = "/imgs/folk_on_the_hill_menu.svg";
    this.classList.remove("exit");
    flyIn.style.transform = "translateX(-100%)";
  } else {
    this.src = "/imgs/folk_on_the_hill_exit.svg";
    this.classList.add("exit");
    flyIn.style.transform = "translateX(0%)";
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log(window.location);
    menuIcon.src = `${window.location}/imgs/folk_on_the_hill_menu.svg`;
    menuIcon.classList.remove("exit");
    flyIn.style.transform = "translateX(-100%)";
  });
});

function scrolledPast(element) {
  let rectangle = element.getBoundingClientRect();
  let rectangleBottom = rectangle.bottom;

  let userScrolls = window.pageYOffset;

  if (userScrolls > rectangleBottom) {
    menuContainer.style.backgroundColor = "rgba(255,255,255)";
    menuContainerLogo.style.transform = "translateY(0%)";
  } else {
    menuContainer.style.backgroundColor = "rgba(255,255,255,.0)";
    menuContainerLogo.style.transform = "translateY(-100%)";
  }
}

document.addEventListener("scroll", () => {
  scrolledPast(logo);
});
