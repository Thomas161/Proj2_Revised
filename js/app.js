window.addEventListener("DOMContentLoaded", function (evt) {
  const navbarList = document.querySelector("#navbar__list");
  const sections = document.querySelectorAll("section");
  const intro = document.querySelector("#intro");
  const skills = document.querySelector("#skills");

  let t1 = gsap.timeline();
  console.log(t1);

  let playAnimation = () => {
    t1.fromTo(
      intro,
      1,
      { x: -100, opacity: 0 },
      { x: 0, delay: 1, opacity: 1, ease: "bounce.out" }
    );

    t1.play();
  };
  playAnimation();

  let skillsAnimation = () => {
    t1.fromTo(skills, 0.5, { y: -30, opacity: 0 }, { y: 0, opacity: 1 });
  };
  skillsAnimation();

  const createNavLinks = () => {
    [...sections].forEach((sec) => {
      let liElements = document.createElement("li");
      let cl, ids;
      cl = liElements.className.add = "menu__link";
      ids = liElements.id = "nav-" + sec.id;
      navbarList.appendChild(liElements);
      liElements.addEventListener("click", () => {
        sec.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  };

  const addActiveClassWhenInViewport = () => {
    window.addEventListener("scroll", (event) => {
      for (let i = 0; i < sections.length; i++) {
        let top = sections[i].getBoundingClientRect().top;
        let bottom = sections[i].getBoundingClientRect().bottom;
        if (top <= 150 && bottom >= 150) {
          sections[i].classList.add("your-active-class");
        } else {
          sections[i].classList.remove("your-active-class");
        }
      }
    });
  };

  document.addEventListener("scroll", () => {
    addActiveClassWhenInViewport();
  });

  createNavLinks();

  addActiveClassWhenInViewport();
});
