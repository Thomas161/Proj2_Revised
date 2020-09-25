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
  //var where we are going to write the html
  const createNavLinks = () => {
    let liElements = "";

    // Automatically building links for all the sections on the page
    [...sections].forEach((sec) => {
      // for (var i = 0; i < sections.length; i++) {
      console.log(sec.dataset);
      //   console.log(sec.dataset.nav);
      liElements += `<li><a class="menu_link" href="#section${sec.id}" >${sec.dataset.nav}</a></li>`;
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
        console.log("In Viewport");
      } else {
        console.log("Not in viewport");
      }
    }
  }
  document.addEventListener("scroll", () => {
    addActiveClassWhenInViewport();
  });
});
// addActiveClass();

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
