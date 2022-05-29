const homeSection = document.querySelector(".home-section");
const nav = document.querySelector(".nav-section");
const homeText = document.querySelector(".home-text");
const sections = document.querySelectorAll("section");
const underline = document.querySelector(".underline");
const projects = document.querySelector(".projects-section");
const verticalHome = document.querySelector(".vertical-home");

const options = {
  root: null,
  threshold: 0.7,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? underline.classList.remove("underline-short") &
        underline.classList.add("underline-long")
      : underline.classList.contains("underline-long") &&
        underline.classList.add("underline-short");
  });
}, options);

const observerForNav = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? verticalHome.classList.add("visible")
      : verticalHome.classList.remove("visible");
  });
});

//  entry.target.style.opacity = entry.intersectionRatio;

observer.observe(projects);
observerForNav.observe(homeSection);
