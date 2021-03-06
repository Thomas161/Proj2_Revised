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

  const navbarList = document.querySelector("#navbar__list");
  console.log(navbarList.innerHTML); //hello
  const sections = document.querySelectorAll("section"); //Check length/existence of section tags
  console.log(sections.length);
  const topButton = document.getElementById("button");
  // for (var i = 0; i < sections.length; i++) {
  // console.log("Sections => ", sections[i].id); //id of each individual section tag
  // console.log(
  //   "Sections getBoundingRect() => ",
  //   sections[i].getBoundingClientRect()
  // );
  // }

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
    [...sections].forEach((sec) => {
      let liElements = document.createElement("li");
      let cl, ids;
      cl = liElements.className.add = "menu__link";
      console.log(cl); //menu__link
      ids = liElements.id = "nav-" + sec.id;
      console.log(ids); //nav-section1-4
      console.log((liElements.innerText = sec.dataset.nav)); //section 1-4
      navbarList.appendChild(liElements);
      liElements.addEventListener("click", function () {
        console.log("clicked");
        sec.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };

  // Add class 'active' to section when near top of viewport

  function addActiveClassWhenInViewport() {
    window.addEventListener("scroll", (event) => {
      console.log("Type of event fired when scrolled", event.type);

      for (let i = 0; i < sections.length; i++) {
        console.log(sections[i].getBoundingClientRect());
        let top = sections[i].getBoundingClientRect().top;
        let bottom = sections[i].getBoundingClientRect().bottom;

        if (top <= 150 && bottom >= 150) {
          console.log("In viewport");

          sections[i].classList.add("your-active-class");
        } else {
          console.log("Not in viewport");
          sections[i].classList.remove("your-active-class");
        }
      }
    });
  }

  document.addEventListener("scroll", () => {
    addActiveClassWhenInViewport();
  });

  //click button, scrolls to top of html doc
  topButton.onclick = function (e) {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  createNavLinks();

  addActiveClassWhenInViewport();
});

/**
 * End Main Functions
 * Begin Events
 *
 */
