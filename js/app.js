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
  for (var i = 0; i < sections.length; i++) {
    // console.log("Sections => ", sections[i].id); //id of each individual section tag
    // console.log(
    //   "Sections getBoundingRect() => ",
    //   sections[i].getBoundingClientRect()
    // );
  }

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
    [...sections].forEach((sec) => {
      let liElements = document.createElement("li");
      // for (var i = 0; i < sections.length; i++) {
      //   console.log(sec.dataset);
      liElements.className.add = "menu__link";
      liElements.dataset.nav = sec.id;
      liElements.id = "nav-" + sec.id;
      liElements.innerText = sec.dataset.nav;
      console.log(sec.dataset.nav);

      liElements.addEventListener("click", function () {
        console.log("clicked");
        sec.scrollIntoView({
          behavior: "smooth",
        });
        navbarList.appendChild(liElements);
      });
    });
  };

  // Add class 'active' to section when near top of viewport

  function addActiveClassWhenInViewport() {
    window.addEventListener("scroll", (event) => {
      console.log("Type of event fired when scrolled", event.type);

      for (let i = 1; i < sections.length; i++) {
        console.log(sections[i]);
        let sectionById = document.getElementById(`section${i}`);
        // let itemId = document.getElementById(`nav-section${i}`);
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
          positionSection.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          positionSection.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ) {
          console.log("In viewport");
          // itemId.classList.add("your-active-class");
          sectionById.classList.add("your-active-class");
        } else {
          // itemId.classList.remove("your-active-class");
          sectionById.classList.add("your-active-class");
          console.log("Not in viewport");
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

// Build menu

// Set sections as active
