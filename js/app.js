/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
window.addEventListener("DOMContentLoaded", function (evt) {
  console.log("Event fired", evt);

  const navbarList = document.getElementById("navbar__list");
  console.log(navbarList.innerHTML); //hello
  const sections = document.querySelectorAll("section"); //Check length/existence of section tags
  for (var i = 0; i < sections.length; i++) {
    console.log("Sections => ", sections[i]);
    console.log(
      "Sections getBoundingRect() => ",
      sections[i].getBoundingClientRect()
    );
  }
  const navItems = document.getElementsByClassName("menu__link");
  const topButton = document.getElementById("button");

  /**
   * End Global Variables
   * Start Helper Functions
   *
   */

  /**
   * End Helper Functions
   * Begin Main Functions
   *
   */

  // build the nav

  const createNavLinks = () => {
    let liElements = "";

    // Automatically building links for all the sections on the page
    [...sections].forEach((sec) => {
      // for (var i = 0; i < sections.length; i++) {
      console.log(sec.dataset);
      //   console.log(sec.dataset.nav);
      liElements += `<li><a class="menu_link ${sec.id}" href="#section${sec.id}" >${sec.dataset.nav}</a></li>`;
    });
    navbarList.innerHTML = liElements;
  };
  createNavLinks();

  // Add class 'active' to section when near top of viewport

  function addActiveClassWhenInViewport() {
    for (let i = 0; i < sections.length; i++) {
      console.log(sections[i]);
      let positionSection = sections[i].getBoundingClientRect();
      console.log(
        "Top Position ",
        positionSection.top,
        "Bottom Position",
        positionSection.bottom,
        "Left Position",
        positionSection.left,
        "Right Position",
        positionSection.right
      );
      if (
        positionSection.top >= 0 &&
        positionSection.left >= 0 &&
        positionSection.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        positionSection.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        let id = document
          .querySelector(this.getAttribute("id"))
          .classList.add("active");
        sections[i].classList.add("your-active-class");
        console.log("In Viewport");
      } else {
        document
          .querySelector(this.getAttribute("id"))
          .classList.remove("active");
        sections[i].classList.remove("your-active-class");
        console.log("Not in viewport");
      }
    }
  }
  document.addEventListener("scroll", () => {
    addActiveClassWhenInViewport();
  });

  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (event) => {
      event.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "inline-block";
  } else {
    topButton.style.display = "none";
  }
}

topButton.addEventListener("click", function (e) {
  e.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
