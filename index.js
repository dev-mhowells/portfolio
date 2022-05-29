const homeSection = document.querySelector(".home-section");
const aboutSection = document.querySelector(".about-section");
const nav = document.querySelector(".nav-section");
const homeText = document.querySelector(".home-text");
const sections = document.querySelectorAll("section");
const underline = document.querySelector(".underline");
const projects = document.querySelector(".projects-section");
const verticalHome = document.querySelector(".vertical-home");
const verticalProjects = document.querySelector(".vertical-projects");
const verticalAbout = document.querySelector(".vertical-about");

const options = {
  root: null,
  threshold: 0.8,
};

const options2 = {
  root: null,
  threshold: 0.3,
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

const observerForHome = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      verticalHome.classList.remove("hidden");
      verticalHome.classList.add("visible");
      return;
    } else {
      verticalHome.classList.add("hidden");
    }
  });
}, options);

const observerForPrj = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log("prj", entry);
    verticalProjects.style.borderLeft = "solid 2px #00b2ff";
    if (entry.isIntersecting) {
      verticalProjects.classList.remove("hidden");
      verticalProjects.classList.add("visible");
      return;
    } else {
      verticalProjects.classList.add("hidden");
    }
  });
}, options);

const observerForAbout = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log("hello", entry);
    verticalAbout.style.borderLeft = "solid 2px #00ddff";
    if (entry.isIntersecting) {
      verticalAbout.classList.remove("hidden");
      verticalAbout.classList.add("visible");

      underline.classList.remove("underline-short");
      underline.classList.add("underline-long");

      return;
    } else {
      verticalAbout.classList.add("hidden");
    }
  });
}, options2);

//  entry.target.style.opacity = entry.intersectionRatio;

observer.observe(projects);
observerForPrj.observe(projects);
observerForHome.observe(homeSection);
observerForAbout.observe(aboutSection);
