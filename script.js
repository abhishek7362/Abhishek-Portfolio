const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuButton.classList.toggle("active");
  });
}

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("show");
    }

    if (menuButton) {
      menuButton.classList.remove("active");
    }
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    const linkTarget = link.getAttribute("href");

    if (linkTarget === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      event.preventDefault();

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
