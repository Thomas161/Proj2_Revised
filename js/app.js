window.addEventListener("DOMContentLoaded", function (evt) {
  const navbarList = document.querySelector("#navbar__list");
  const sections = document.querySelectorAll("section");
  const intro = document.querySelector("#intro");
  const skills = document.querySelector("#skills");

  const t1 = gsap.timeline({ repeat: -1 });
  const t2 = gsap.timeline();

  const playAnimation = () => {
    t1.fromTo(intro, 3, { x: -40 }, { x: 0, ease: "bounce.out" });
    t1.fromTo(intro, 3, { x: 0 }, { x: -40, ease: "bounce.out" }, "+=1");
  };

  playAnimation();

  const skillsAnimation = () => {
    t2.fromTo(skills, 1.5, { scaleY: 0 }, { scaleY: 1 });
  };

  skillsAnimation();

  const createNavLinks = () => {
    [...sections].forEach((sec) => {
      console.log(sec);
      let liElements = document.createElement("li");
      let cl, ids;
      cl = liElements.className.add = "menu__link";
      ids = liElements.id = "nav-" + sec.id;
      liElements.textContent = sec.dataset.nav;
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
