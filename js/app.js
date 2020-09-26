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
    // console.log("Sections => ", sections[i].id); //id of each individual section tag
    // console.log(
    //   "Sections getBoundingRect() => ",
    //   sections[i].getBoundingClientRect()
    // );
  }

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
      //   console.log(sec.dataset);
      console.log(sec.dataset.nav);
      liElements += `<li><a class="menu_link ${sec.id}" href="#${sec.id}" >${sec.dataset.nav}</a></li>`;
    });
    navbarList.innerHTML = liElements;
  };
  createNavLinks();

  // Add class 'active' to section when near top of viewport

  function addActiveClassWhenInViewport() {
    for (let i = 0; i < sections.length; i++) {
      console.log(sections[i]);
      let positionSection = sections[i].getBoundingClientRect();
      //   console.log(
      //     "Top Position ",
      //     positionSection.top,
      //     "Bottom Position",
      //     positionSection.bottom,

      if (positionSection.top <= 150 && positionSection.bottom >= 150) {
        let identity = sections[i].getAttribute("id");
        console.log("What is this ", identity); //8 id's in html doc

        document.querySelector(`.${identity}`).classList.add("active");
        sections[identity].classList.add("your-active-class");
        console.log("In Viewport");
      } else {
        let identity = sections[i].getAttribute("id");
        console.log(identity); //8 id's in html doc
        document.querySelector(`.${identity}`).classList.remove("active");
        sections[identity].classList.remove("your-active-class");

        console.log("Not in viewport");
      }
    }
  }

  document.addEventListener("scroll", () => {
    addActiveClassWhenInViewport();
  });

  const abc = document.querySelector("a").href;
  console.log(abc); //3
  // Scroll to section on link click
  for (let i = 0; i < abc.length; i++) {
    console.log(abc[i]);
    // let aRefs = document.querySelectorAll("a");
    console.log(abc[i].href); //3
    abc[i].href.addEventListener("click", (event) => {
      event.preventDefault();

      abc.scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  const topButton = document.getElementById("button");

  //call function below when window is scrolled
  window.onscroll = function () {
    scrollButtonIntoView();
  };

  //hide button until you have scrolled beyond 20px of top doc
  function scrollButtonIntoView() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  //click button, scrolls to top of html doc
  topButton.onclick = function (e) {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Set sections as active
