
document.addEventListener("DOMContentLoaded", function () {
  // 1. Generate stars in the background

  const starsContainer = document.getElementById("stars");

  if (starsContainer) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("span");

      star.className = "star";

      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      const size = Math.random() * 2 + 1;

      star.style.width = size + "px";
      star.style.height = size + "px";

      star.style.setProperty(
        "--duration",
        2 + Math.random() * 4 + "s"
      );

      star.style.setProperty(
        "--delay",
        Math.random() * -5 + "s"
      );

      fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
  }

  // 2. Mobile navigation menu

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // 3. Reveal sections when scrolling

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, observerInstance) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  // 4. Highlight the current navigation section

  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navItems.forEach(function (link) {
              const isCurrent =
                link.getAttribute("href") === "#" + entry.target.id;

              link.classList.toggle("active", isCurrent);
            });
          }
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px"
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // 5. Subtle cursor glow on devices with a mouse

  const cursorGlow = document.getElementById("cursorGlow");

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", function (event) {
      cursorGlow.style.left = event.clientX + "px";
      cursorGlow.style.top = event.clientY + "px";
    });
  }

  // 6. Automatically update the copyright year

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 7. Respect reduced-motion preferences

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reduce-motion");
  }

  console.log("Beyond Earth is ready for launch!");
});
