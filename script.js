
"use strict";

/* =========================================
   1. SELECT HTML ELEMENTS
========================================= */

const pageLoader = document.getElementById("pageLoader");
const siteHeader = document.getElementById("siteHeader");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const filterButtons = document.querySelectorAll(".filter-chip");
const planetCards = document.querySelectorAll(".planet-card");
const noResults = document.getElementById("noResults");

const infoDialog = document.getElementById("infoDialog");
const dialogClose = document.getElementById("dialogClose");
const dialogDone = document.getElementById("dialogDone");

const dialogKicker = document.getElementById("dialogKicker");
const dialogTitle = document.getElementById("dialogTitle");
const dialogDescription = document.getElementById("dialogDescription");
const dialogFacts = document.getElementById("dialogFacts");

const currentYear = document.getElementById("currentYear");
const backToTop = document.getElementById("backToTop");




/* =========================================
   3. HEADER SCROLL EFFECT
========================================= */

function handleHeaderScroll() {
  const scrollPosition = window.scrollY;

  if (siteHeader) {
    if (scrollPosition > 40) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  if (backToTop) {
    if (scrollPosition > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", handleHeaderScroll, {
  passive: true
});

handleHeaderScroll();


/* =========================================
   4. MOBILE NAVIGATION
========================================= */

function closeMobileMenu() {
  if (menuToggle) {
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (mainNav) {
    mainNav.classList.remove("open");
  }
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", function (event) {
    const clickedInsideMenu = mainNav.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}


/* =========================================
   5. ACTIVE NAVIGATION LINK
========================================= */

const pageSections = document.querySelectorAll(
  "main section[id], section[id]"
);

const navigationLinks = document.querySelectorAll(
  ".main-nav a[href^='#']"
);

function updateActiveNavigation() {
  let currentSection = "";

  pageSections.forEach(function (section) {
    const sectionTop = section.offsetTop - 180;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionBottom
    ) {
      currentSection = section.id;
    }
  });

  navigationLinks.forEach(function (link) {
    const linkTarget = link.getAttribute("href");

    if (linkTarget === "#" + currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation, {
  passive: true
});

updateActiveNavigation();


/* =========================================
   6. PLANET FILTERS
========================================= */

function filterPlanets(selectedType) {
  let visibleCount = 0;

  planetCards.forEach(function (card) {
    const planetType = card.dataset.type;

    const shouldShow =
      selectedType === "all" ||
      planetType === selectedType;

    if (shouldShow) {
      card.classList.remove("filter-hidden");
      card.classList.add("filter-visible");
      visibleCount++;
    } else {
      card.classList.remove("filter-visible");
      card.classList.add("filter-hidden");
    }
  });

  if (noResults) {
    noResults.hidden = visibleCount !== 0;
  }
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedType = button.dataset.filter || "all";

    filterButtons.forEach(function (item) {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    filterPlanets(selectedType);
  });
});


/* =========================================
   7. PLANET INFORMATION DATABASE
========================================= */

const planetInformation = {
  Mercury: {
    kicker: "TERRESTRIAL PLANET",
    title: "Mercury",
    description:
      "Mercury is the smallest planet in our Solar System and the closest planet to the Sun. It has an extremely thin exosphere and experiences dramatic temperature changes.",
    facts: [
      { label: "POSITION", value: "1st planet from the Sun" },
      { label: "DAY LENGTH", value: "About 59 Earth days" },
      { label: "YEAR LENGTH", value: "88 Earth days" },
      { label: "MOONS", value: "0" }
    ]
  },

  Venus: {
    kicker: "TERRESTRIAL PLANET",
    title: "Venus",
    description:
      "Venus is covered by a dense atmosphere rich in carbon dioxide. Its powerful greenhouse effect makes it the hottest planet in the Solar System.",
    facts: [
      { label: "POSITION", value: "2nd planet from the Sun" },
      { label: "DAY LENGTH", value: "About 243 Earth days" },
      { label: "YEAR LENGTH", value: "225 Earth days" },
      { label: "MOONS", value: "0" }
    ]
  },

  Earth: {
    kicker: "OUR HOME PLANET",
    title: "Earth",
    description:
      "Earth is our home and the only planet currently known to support life. Liquid water, a protective atmosphere, and suitable temperatures make it uniquely habitable.",
    facts: [
      { label: "POSITION", value: "3rd planet from the Sun" },
      { label: "DAY LENGTH", value: "About 24 hours" },
      { label: "YEAR LENGTH", value: "About 365.25 days" },
      { label: "MOONS", value: "1" }
    ]
  },

  Mars: {
    kicker: "TERRESTRIAL PLANET",
    title: "Mars",
    description:
      "Mars is known as the Red Planet because iron minerals in its soil have oxidized. Scientists study its ancient landscapes for clues about whether life could once have existed there.",
    facts: [
      { label: "POSITION", value: "4th planet from the Sun" },
      { label: "DAY LENGTH", value: "About 24 hours 37 minutes" },
      { label: "YEAR LENGTH", value: "687 Earth days" },
      { label: "MOONS", value: "2" }
    ]
  },

  Jupiter: {
    kicker: "GAS GIANT",
    title: "Jupiter",
    description:
      "Jupiter is the largest planet in the Solar System. Its atmosphere contains enormous cloud bands and the Great Red Spot, a giant storm that has lasted for centuries.",
    facts: [
      { label: "POSITION", value: "5th planet from the Sun" },
      { label: "DAY LENGTH", value: "About 9 hours 56 minutes" },
      { label: "YEAR LENGTH", value: "About 11.86 Earth years" },
      { label: "MOONS", value: "Many confirmed moons" }
    ]
  },

  Saturn: {
    kicker: "GAS GIANT",
    title: "Saturn",
    description:
      "Saturn is famous for its spectacular ring system, made mostly of countless pieces of ice and rocky material. It is a giant planet with a very low average density.",
    facts: [
      { label: "POSITION", value: "6th planet from the Sun" },
      { label: "DAY LENGTH", value: "About 10.7 hours" },
      { label: "YEAR LENGTH", value: "About 29.4 Earth years" },
      { label: "RINGS", value: "Extensive ring system" }
    ]
  },

  Uranus: {
    kicker: "ICE GIANT",
    title: "Uranus",
    description:
      "Uranus is an ice giant with a blue-green appearance caused by methane in its atmosphere. It rotates on its side, giving it unusually extreme seasonal patterns.",
    facts: [
      { label: "POSITION", value: "7th planet from the Sun" },
      { label: "DAY LENGTH", value: "About 17 hours" },
      { label: "YEAR LENGTH", value: "About 84 Earth years" },
      { label: "MOONS", value: "Many confirmed moons" }
    ]
  },

  Neptune: {
    kicker: "ICE GIANT",
    title: "Neptune",
    description:
      "Neptune is the farthest recognized planet from the Sun. It is a cold, distant ice giant with powerful winds and a deep blue appearance.",
    facts: [
      { label: "POSITION", value: "8th planet from the Sun" },
      { label: "DAY LENGTH", value: "About 16 hours" },
      { label: "YEAR LENGTH", value: "About 165 Earth years" },
      { label: "MOONS", value: "Many confirmed moons" }
    ]
  }
};


/* =========================================
   8. DEEP SPACE AND PHENOMENA DATABASE
========================================= */

const topicInformation = {
  Galaxies: {
    kicker: "DEEP SPACE",
    title: "Galaxies",
    description:
      "A galaxy is a huge system of stars, gas, dust, and dark matter held together by gravity. Galaxies come in different shapes, including spiral, elliptical, and irregular forms.",
    facts: [
      { label: "OUR GALAXY", value: "The Milky Way" },
      { label: "MAIN FORCE", value: "Gravity" },
      { label: "OUR LOCATION", value: "Orion Arm region" },
      { label: "EXAMPLE", value: "Andromeda Galaxy" }
    ]
  },

  Nebulae: {
    kicker: "DEEP SPACE",
    title: "Nebulae",
    description:
      "Nebulae are enormous clouds of gas and dust in space. Some are regions where new stars form, while others are created when stars reach the end of their lives.",
    facts: [
      { label: "MATERIAL", value: "Gas and dust" },
      { label: "ROLE", value: "Star formation and stellar evolution" },
      { label: "EXAMPLE", value: "Orion Nebula" },
      { label: "DISTANCE", value: "Varies greatly" }
    ]
  },

  Stars: {
    kicker: "DEEP SPACE",
    title: "Stars",
    description:
      "Stars are enormous, luminous spheres of hot plasma. They produce energy through nuclear fusion in their cores, and their properties depend on factors such as mass, age, and composition.",
    facts: [
      { label: "ENERGY SOURCE", value: "Nuclear fusion" },
      { label: "CLOSEST STAR", value: "The Sun" },
      { label: "LIFECYCLE", value: "Depends strongly on mass" },
      { label: "COMPOSITION", value: "Mostly hydrogen and helium" }
    ]
  },

  "Black Holes": {
    kicker: "COSMIC PHENOMENON",
    title: "Black Holes",
    description:
      "A black hole is a region of spacetime where gravity is so strong that nothing can escape from within its event horizon, not even light. Scientists study them through their effects on nearby matter and light.",
    facts: [
      { label: "KEY BOUNDARY", value: "Event horizon" },
      { label: "FORMATION", value: "Several possible pathways" },
      { label: "DETECTION", value: "Effects on nearby matter and light" },
      { label: "LIGHT", value: "Cannot escape from inside the horizon" }
    ]
  },

  Auroras: {
    kicker: "COSMIC PHENOMENON",
    title: "Auroras",
    description:
      "Auroras are colorful displays in the upper atmosphere. They occur when charged particles interact with Earth's magnetic environment and atmospheric gases, producing glowing patterns in the sky.",
    facts: [
      { label: "NORTHERN NAME", value: "Aurora Borealis" },
      { label: "SOUTHERN NAME", value: "Aurora Australis" },
      { label: "LOCATION", value: "Upper atmosphere" },
      { label: "CAUSE", value: "Charged particles and atmospheric gases" }
    ]
  },

  Eclipses: {
    kicker: "COSMIC PHENOMENON",
    title: "Eclipses",
    description:
      "An eclipse happens when the Sun, Earth, and Moon align so that one celestial body blocks sunlight from reaching another or casts a shadow on it. Solar and lunar eclipses occur under different alignments.",
    facts: [
      { label: "SOLAR ECLIPSE", value: "The Moon blocks the Sun from our view" },
      { label: "LUNAR ECLIPSE", value: "The Moon enters Earth's shadow" },
      { label: "REQUIREMENT", value: "A suitable celestial alignment" },
      { label: "FREQUENCY", value: "Depends on eclipse type and location" }
    ]
  }
};


/* =========================================
   9. OPEN INFORMATION DIALOG
========================================= */

function openInformation(data) {
  if (!data || !infoDialog) {
    return;
  }

  if (dialogKicker) {
    dialogKicker.textContent = data.kicker;
  }

  if (dialogTitle) {
    dialogTitle.textContent = data.title;
  }

  if (dialogDescription) {
    dialogDescription.textContent = data.description;
  }

  if (dialogFacts) {
    dialogFacts.replaceChildren();

    data.facts.forEach(function (fact) {
      const factCard = document.createElement("div");
      factCard.className = "dialog-fact";

      const label = document.createElement("strong");
      label.textContent = fact.label;

      const value = document.createElement("span");
      value.textContent = fact.value;

      factCard.appendChild(label);
      factCard.appendChild(value);

      dialogFacts.appendChild(factCard);
    });
  }

  if (typeof infoDialog.showModal === "function") {
    if (!infoDialog.open) {
      infoDialog.showModal();
    }
  } else {
    infoDialog.setAttribute("open", "");
  }
}


/* =========================================
   10. PLANET DETAILS BUTTONS
========================================= */

document.querySelectorAll(".details-trigger").forEach(function (button) {
  button.addEventListener("click", function () {
    const planetName = button.dataset.planet;
    const planetData = planetInformation[planetName];

    if (planetData) {
      openInformation(planetData);
    } else {
      console.warn("Planet information not found:", planetName);
    }
  });
});


/* =========================================
   11. DEEP SPACE TOPIC BUTTONS
========================================= */

document.querySelectorAll(".explore-topic").forEach(function (button) {
  button.addEventListener("click", function () {
    const topicName = button.dataset.topic;
    const topicData = topicInformation[topicName];

    if (topicData) {
      openInformation(topicData);
    } else {
      console.warn("Topic information not found:", topicName);
    }
  });
});


/* =========================================
   12. CLOSE INFORMATION DIALOG
========================================= */

function closeInformation() {
  if (!infoDialog) {
    return;
  }

  if (typeof infoDialog.close === "function" && infoDialog.open) {
    infoDialog.close();
  } else {
    infoDialog.removeAttribute("open");
  }
}

if (dialogClose) {
  dialogClose.addEventListener("click", closeInformation);
}

if (dialogDone) {
  dialogDone.addEventListener("click", closeInformation);
}

if (infoDialog) {
  infoDialog.addEventListener("click", function (event) {
    if (event.target === infoDialog) {
      closeInformation();
    }
  });

  infoDialog.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeInformation();
    }
  });
}


/* =========================================
   13. BACK TO TOP
========================================= */

if (backToTop) {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =========================================
   14. CURRENT YEAR
========================================= */

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   15. REVEAL ELEMENTS ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(
  ".planet-card, .space-feature, .phenomenon-card, .stat"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("revealed");
  });
}


/* =========================================
   16. FOOTER YEAR AND INITIAL STATE
========================================= */

filterPlanets("all");

filterButtons.forEach(function (button) {
  const isAllFilter = button.dataset.filter === "all";

  button.setAttribute(
    "aria-pressed",
    String(isAllFilter)
  );
});

console.log("Beyond Earth website initialized successfully.");
