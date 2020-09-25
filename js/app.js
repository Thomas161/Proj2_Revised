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
  const sections = document.getElementsByTagName("section"); //Check length/existence of section tags
  for (var i = 0; i < sections.length; i++) {
    console.log("Sections => ", sections[i]);
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
});
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
