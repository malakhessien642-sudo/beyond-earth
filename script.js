
document.addEventListener("DOMContentLoaded", function () {
  // 1. Hide the initial loading screen

  const loader = document.getElementById("pageLoader");

  function finishLoading() {
    if (loader) {
      loader.classList.add("loaded");
    }
  }

  window.addEventListener("load", finishLoading, { once: true });

  // Fallback in case loading events have already completed.

  if (document.readyState === "complete") {
    finishLoading();
  } else {
    setTimeout(finishLoading, 1800);
  }

  // 2. Mobile navigation

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  function closeMenu() {
    if (!menuToggle || !navigation) return;

    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
      if (
        navigation.classList.contains("open") &&
        !navigation.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  // 3. Header appearance while scrolling

  const header = document.getElementById("header");

  function updateHeader() {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // 4. Reveal sections on scroll

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  // 5. Active navigation link

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          navLinks.forEach(function (link) {
            const active =
              link.getAttribute("href") === "#" + entry.target.id;

            link.classList.toggle("active", active);
          });
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

  // 6. Update footer year

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // 7. Planet information dialog

  const dialog = document.getElementById("planetDialog");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogDescription = document.getElementById("dialogDescription");
  const dialogNumber = document.getElementById("dialogNumber");
  const dialogClose = document.getElementById("dialogClose");
  const dialogLink = document.getElementById("dialogLink");

  const planets = {
    Saturn: {
      number: "DESTINATION 01",
      description:
        "Saturn is a gas giant famous for its spectacular ring system. Its rings are made mainly of countless pieces of ice and rock."
    },
    Mars: {
      number: "DESTINATION 02",
      description:
        "Mars is a rocky planet with a thin atmosphere, giant volcanoes, ancient river features, and a surface that scientists continue to study."
    },
    Earth: {
      number: "DESTINATION 03",
      description:
        "Earth is our home planet. Its liquid-water oceans and life-supporting environment make it a remarkable world in our solar system."
    }
  };

  document.querySelectorAll("[data-planet]").forEach(function (button) {
    button.addEventListener("click", function () {
      const name = button.dataset.planet;
      const planet = planets[name];

      if (!planet || !dialog) return;

      dialogTitle.textContent = name;
      dialogDescription.textContent = planet.description;
      dialogNumber.textContent = planet.number;

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        alert(name + "\n\n" + planet.description);
      }
    });
  });

  if (dialogClose && dialog) {
    dialogClose.addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    dialogLink.addEventListener("click", function () {
      dialog.close();
    });
  }

  console.log("Beyond Earth — Mission ready.");
});
