
:root {
  --black: #050609;
  --white: #f5f7fb;
  --muted: #a4aab9;
  --blue: #477cff;
  --electric: #78a8ff;
  --line: rgba(255, 255, 255, 0.15);
  --font: "Inter", sans-serif;
  --display: "Space Grotesk", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font);
  overflow-x: hidden;
}

body.loading {
  overflow: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
  font: inherit;
}

img {
  display: block;
  width: 100%;
}

::selection {
  color: white;
  background: #315bd4;
}

.section {
  width: min(1240px, 88%);
  margin-inline: auto;
}

/* LOADER */

.page-loader {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  background: #050609;
  transition: opacity 0.7s ease, visibility 0.7s ease;
}

.page-loader.loaded {
  opacity: 0;
  visibility: hidden;
}

.loader-mark {
  font-family: var(--display);
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -3px;
}

.loader-line {
  position: relative;
  width: 140px;
  height: 1px;
  overflow: hidden;
  background: #202432;
}

.loader-line::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--electric);
  animation: loading 1.2s ease-in-out infinite;
}

.loader-text {
  color: var(--muted);
  font-size: 9px;
  letter-spacing: 2.5px;
}

/* HEADER */

.header {
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 86px;
  padding-inline: 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  transition: background 0.3s ease;
}

.header.scrolled {
  position: fixed;
  background: rgba(5, 6, 9, 0.91);
  backdrop-filter: blur(16px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: var(--display);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: nowrap;
}

.brand-icon {
  color: var(--electric);
  font-size: 23px;
}

.brand-light {
  margin-left: 4px;
  color: #8daeff;
  font-weight: 400;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 33px;
}

.nav-link {
  position: relative;
  padding-block: 10px;
  color: #c1c5d0;
  font-size: 11px;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 1px;
  left: 0;
  height: 1px;
  background: var(--electric);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: white;
}

.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}

.nav-explore {
  display: inline-flex;
  align-items: center;
  gap: 22px;
  padding: 13px 16px;
  border: 1px solid rgba(120, 168, 255, 0.5);
  color: white;
  font-size: 11px;
  transition: background 0.3s ease;
}

.nav-explore:hover {
  background: #254ca7;
}

.nav-explore span {
  color: var(--electric);
  font-size: 15px;
}

.menu-toggle {
  display: none;
}

/* HERO */

.hero {
  position: relative;
  isolation: isolate;
  min-height: max(700px, 100svh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px 8% 115px;
  overflow: hidden;
  background: #050609;
}

.hero-image,
.hero-vignette,
.hero-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-image {
  z-index: -3;
  background-image: url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2400&q=90");
  background-size: cover;
  background-position: center 45%;
  transform: scale(1.04);
  animation: heroReveal 1.6s ease-out both, heroDrift 24s ease-in-out infinite alternate;
}

.hero-vignette {
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(5, 6, 9, 0.96) 0%, rgba(5, 6, 9, 0.79) 37%, rgba(5, 6, 9, 0.15) 100%),
    linear-gradient(0deg, #050609 0%, transparent 28%, rgba(5, 6, 9, 0.18) 70%, rgba(5, 6, 9, 0.58) 100%);
}

.hero-grain {
  z-index: -1;
  opacity: 0.12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E");
}

.hero-index {
  position: absolute;
  top: 123px;
  left: 8%;
  right: 8%;
  display: flex;
  align-items: center;
  gap: 13px;
  color: #d1d8e7;
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 2px;
}

.index-line {
  width: 30px;
  height: 1px;
  background: var(--electric);
}

.index-number {
  margin-left: auto;
  color: #b7c0d2;
  font-size: 9px;
}

.hero-content {
  width: min(760px, 100%);
  margin-top: 25px;
  animation: contentReveal 1s 0.25s both;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  color: #c8d6f5;
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 2px;
}

.live-dot,
.caption-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #80aaff;
  box-shadow: 0 0 13px #477cff;
}

.hero h1 {
  font-family: var(--display);
  font-size: clamp(54px, 8vw, 110px);
  font-weight: 500;
  letter-spacing: -0.075em;
  line-height: 0.99;
}

.hero h1 span {
  display: block;
  color: transparent;
  -webkit-text-stroke: 1px rgba(232, 239, 255, 0.92);
}

.hero-description {
  max-width: 420px;
  margin-top: 27px;
  color: #c0c6d3;
  font-size: 13px;
  line-height: 1.95;
}

.hero-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 27px;
  margin-top: 34px;
}

.button {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 0 20px;
  font-size: 11px;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.button-primary {
  color: #fff;
  background: #315fd0;
  box-shadow: 0 5px 25px rgba(49, 95, 208, 0.2);
}

.button-primary:hover {
  transform: translateY(-3px);
  background: #477cff;
  box-shadow: 0 8px 35px rgba(49, 95, 208, 0.4);
}

.button-arrow {
  font-size: 16px;
}

.text-button {
  display: inline-flex;
  align-items: center;
  gap: 17px;
  color: #e4e8f1;
  font-size: 11px;
}

.text-button span {
  color: var(--electric);
  font-size: 17px;
  transition: transform 0.3s ease;
}

.text-button:hover span {
  transform: translateY(4px);
}

.hero-bottom {
  position: absolute;
  right: 8%;
  bottom: 35px;
  left: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.hero-caption {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c4ccdc;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.caption-dot {
  width: 5px;
  height: 5px;
}

.scroll-cue {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #d3d8e3;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.scroll-track {
  position: relative;
  width: 1px;
  height: 35px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.25);
}

.scroll-track span {
  position: absolute;
  top: -100%;
  left: 0;
  width: 1px;
  height: 100%;
  background: var(--electric);
  animation: scrollLine 2s ease-in-out infinite;
}

.hero-coordinates {
  color: #b4bfd3;
  font-family: var(--display);
  font-size: 8px;
  line-height: 1.9;
  letter-spacing: 1px;
  text-align: right;
}

.hero-side-label {
  position: absolute;
  top: 50%;
  right: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  transform: translateY(-50%);
}

/* INTRO */

.intro {
  padding-top: 125px;
  padding-bottom: 125px;
}

.section-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

.section-label {
  color: var(--electric);
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 2px;
}

.section-note {
  color: #858d9f;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 1.3px;
  text-align: right;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.7fr;
  gap: 12%;
  align-items: end;
  padding: 65px 0 70px;
}

.intro-title,
.destination-heading h2,
.vision-content h2 {
  font-family: var(--display);
  font-weight: 500;
  font-size: clamp(37px, 5.5vw, 70px);
  letter-spacing: -0.065em;
  line-height: 1.04;
}

.intro-title span {
  display: block;
  color: #8295b8;
}

.intro-copy {
  padding-bottom: 6px;
}

.small-accent {
  display: block;
  width: 35px;
  height: 2px;
  margin-bottom: 23px;
  background: var(--electric);
}

.intro-copy p {
  max-width: 350px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
}

.inline-link {
  display: inline-flex;
  align-items: center;
  gap: 17px;
  margin-top: 26px;
  color: white;
  font-size: 11px;
}

.inline-link span {
  color: var(--electric);
  font-size: 17px;
  transition: transform 0.25s ease;
}

.inline-link:hover span {
  transform: translate(3px, -3px);
}

.image-banner {
  position: relative;
  min-height: 410px;
  height: 42vw;
  max-height: 560px;
  overflow: hidden;
  background: #0b1122;
}

.image-banner img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 1s ease;
}

.image-banner:hover img {
  transform: scale(1.04);
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 6, 13, 0.88), rgba(4, 6, 13, 0.15)), linear-gradient(0deg, rgba(4, 6, 13, 0.6), transparent 55%);
}

.banner-content {
  position: absolute;
  bottom: 12%;
  left: 7%;
}

.banner-content > span {
  color: #c6d9ff;
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 2px;
}

.banner-content h3 {
  margin-top: 17px;
  font-family: var(--display);
  font-size: clamp(34px, 5vw, 61px);
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 1.04;
}

.banner-number {
  position: absolute;
  top: 25px;
  right: 27px;
  color: #e4e8f3;
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 1.5px;
}
/* DESTINATIONS */

.destinations {
  padding-top: 40px;
  padding-bottom: 135px;
}

.destination-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 35px;
  padding: 60px 0 45px;
}

.destination-heading h2 {
  font-size: clamp(38px, 6vw, 76px);
}

.destination-heading h2 span {
  color: #7f8ca5;
}

.destination-heading p {
  max-width: 290px;
  padding-bottom: 5px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.destination-card {
  position: relative;
  min-width: 0;
  min-height: 420px;
  height: 39vw;
  max-height: 510px;
  overflow: hidden;
  background: #0b1122;
}

.destination-card.destination-large {
  grid-row: span 2;
  height: auto;
  max-height: none;
  min-height: 650px;
}

.destination-card > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.destination-card:hover > img {
  transform: scale(1.055);
}

.card-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(3, 5, 11, 0.38),
    transparent 32%,
    rgba(3, 5, 11, 0.2) 48%,
    rgba(3, 5, 11, 0.93) 100%
  );
  transition: background 0.4s ease;
}

.destination-card:hover .card-shade {
  background: linear-gradient(
    180deg,
    rgba(3, 5, 11, 0.24),
    transparent 32%,
    rgba(3, 5, 11, 0.25) 48%,
    rgba(3, 5, 11, 0.96) 100%
  );
}

.card-top {
  position: absolute;
  top: 23px;
  right: 23px;
  left: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 1.5px;
}

.card-symbol {
  width: 33px;
  height: 33px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  font-size: 15px;
  transition: background 0.3s ease, color 0.3s ease;
}

.destination-card:hover .card-symbol {
  color: #071023;
  background: white;
}

.card-content {
  position: absolute;
  right: 27px;
  bottom: 28px;
  left: 27px;
}

.card-category {
  color: #a8c6ff;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 2px;
}

.card-content h3 {
  margin: 10px 0 7px;
  font-family: var(--display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 500;
  letter-spacing: -0.06em;
}

.card-content p {
  max-width: 340px;
  color: #d0d5e0;
  font-size: 11px;
  line-height: 1.8;
}

.card-button {
  display: inline-flex;
  align-items: center;
  gap: 17px;
  margin-top: 20px;
  padding: 0;
  border: 0;
  background: none;
  color: white;
  font-size: 10px;
  cursor: pointer;
}

.card-button span {
  color: var(--electric);
  font-size: 16px;
  transition: transform 0.3s ease;
}

.card-button:hover span {
  transform: translate(3px, -3px);
}

/* VISION */

.vision {
  position: relative;
  isolation: isolate;
  min-height: 620px;
  display: flex;
  align-items: center;
  padding: 100px 0;
  overflow: hidden;
  background: #070b16;
}

.vision-image,
.vision-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.vision-image {
  z-index: -2;
  background: url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2200&q=85")
    center 50% / cover;
  opacity: 0.6;
}

.vision-overlay {
  z-index: -1;
  background:
    linear-gradient(
      90deg,
      rgba(5, 6, 9, 0.96),
      rgba(5, 6, 9, 0.65) 60%,
      rgba(5, 6, 9, 0.35)
    ),
    linear-gradient(
      0deg,
      #050609,
      transparent 35%,
      rgba(5, 6, 9, 0.25)
    );
}

.vision-content h2 {
  margin: 28px 0 23px;
  font-size: clamp(48px, 7vw, 88px);
}

.vision-content h2 span {
  color: #8db1ff;
}

.vision-content p {
  max-width: 450px;
  margin-bottom: 28px;
  color: #c0c6d3;
  font-size: 13px;
  line-height: 2;
}

.vision-side-text {
  position: absolute;
  right: 25px;
  top: 50%;
  color: rgba(255, 255, 255, 0.55);
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  transform: translateY(-50%);
}

/* FOOTER */

.footer {
  min-height: 105px;
  width: 88%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  border-top: 1px solid var(--line);
}

.footer p,
.copyright {
  color: #8e96a8;
  font-family: var(--display);
  font-size: 8px;
  letter-spacing: 1.2px;
}

/* DIALOG */

.planet-dialog {
  position: fixed;
  inset: 0;
  width: min(470px, calc(100% - 32px));
  max-width: none;
  max-height: 85vh;
  margin: auto;
  padding: 42px;
  border: 1px solid rgba(120, 168, 255, 0.35);
  background: #0b0e18;
  color: white;
}

.planet-dialog::backdrop {
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(7px);
}

.dialog-close {
  position: absolute;
  top: 14px;
  right: 17px;
  border: 0;
  background: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

.dialog-number {
  display: block;
  margin-top: 32px;
  color: var(--electric);
  font-family: var(--display);
  font-size: 9px;
  letter-spacing: 2px;
}

.planet-dialog h2 {
  margin-top: 10px;
  font-family: var(--display);
  font-size: 42px;
  font-weight: 500;
}

.planet-dialog p {
  margin-top: 15px;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.9;
}

/* REVEAL */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ANIMATIONS */

@keyframes loading {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes heroReveal {
  from {
    opacity: 0.45;
  }

  to {
    opacity: 1;
  }
}

@keyframes heroDrift {
  from {
    transform: scale(1.04) translateY(0);
  }

  to {
    transform: scale(1.1) translateY(-8px);
  }
}

@keyframes contentReveal {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollLine {
  0% {
    top: -100%;
  }

  100% {
    top: 100%;
  }
}/* TABLET */

@media (max-width: 900px) {
  .header {
    min-height: 76px;
  }

  .navigation {
    gap: 17px;
  }

  .nav-link,
  .nav-explore {
    font-size: 10px;
  }

  .nav-explore {
    gap: 12px;
    padding: 12px;
  }

  .hero {
    padding-inline: 7%;
  }

  .hero-index {
    left: 7%;
    right: 7%;
  }

  .hero-bottom {
    left: 7%;
    right: 7%;
  }

  .destination-card {
    min-height: 350px;
  }

  .destination-card.destination-large {
    min-height: 600px;
  }
}

/* MOBILE */

@media (max-width: 650px) {
  .section {
    width: 88%;
  }

  .header {
    position: absolute;
    min-height: 70px;
    padding-inline: 6%;
  }

  .brand {
    font-size: 13px;
  }

  .brand-icon {
    font-size: 20px;
  }

  .menu-toggle {
    width: 42px;
    height: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(5, 6, 9, 0.4);
    cursor: pointer;
  }

  .menu-toggle span {
    width: 17px;
    height: 1px;
    background: white;
    transition: transform 0.25s ease;
  }

  .menu-toggle[aria-expanded="true"] span:first-child {
    transform: translateY(3.5px) rotate(45deg);
  }

  .menu-toggle[aria-expanded="true"] span:last-child {
    transform: translateY(-3.5px) rotate(-45deg);
  }

  .navigation {
    position: absolute;
    top: 69px;
    right: 6%;
    left: 6%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px;
    border: 1px solid var(--line);
    background: rgba(5, 6, 9, 0.97);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition:
      opacity 0.25s ease,
      visibility 0.25s ease,
transform 0.25s ease;
  }

  .navigation.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-link {
    padding: 16px 12px;
    font-size: 12px;
  }

  .nav-link::after {
    display: none;
  }

  .nav-explore {
    justify-content: space-between;
    margin-top: 8px;
    padding: 15px 12px;
    font-size: 12px;
  }

  .hero {
    min-height: 100svh;
    padding: 145px 6% 115px;
    justify-content: center;
  }

  .hero-image {
    background-position: 59% center;
  }

  .hero-vignette {
    background:
      linear-gradient(
        90deg,
        rgba(5, 6, 9, 0.84),
        rgba(5, 6, 9, 0.35)
      ),
      linear-gradient(
        0deg,
        #050609 0%,
        rgba(5, 6, 9, 0.2) 30%,
        rgba(5, 6, 9, 0.36) 68%,
        rgba(5, 6, 9, 0.65) 100%
      );
  }

  .hero-index {
    top: 105px;
    left: 6%;
    right: 6%;
    gap: 8px;
    font-size: 7px;
    letter-spacing: 1.2px;
  }

  .index-line {
    width: 19px;
  }

  .index-number {
    font-size: 7px;
  }

  .hero-content {
    margin-top: 20px;
  }

  .hero-eyebrow {
    gap: 8px;
    margin-bottom: 23px;
    font-size: 8px;
    letter-spacing: 1.5px;
  }

  .hero h1 {
    font-size: clamp(46px, 12vw, 72px);
    letter-spacing: -0.075em;
    line-height: 1.03;
  }

  .hero h1 span {
    margin-top: 7px;
    -webkit-text-stroke-width: 0.8px;
  }

  .hero-description {
    max-width: 350px;
    margin-top: 23px;
    font-size: 12px;
    line-height: 1.95;
  }

  .hero-buttons {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    margin-top: 27px;
  }

  .button {
    min-height: 49px;
    gap: 22px;
    padding-inline: 16px;
    font-size: 10px;
  }

  .text-button {
    font-size: 10px;
  }

  .hero-bottom {
    right: 6%;
    bottom: 23px;
    left: 6%;
    gap: 10px;
  }

  .hero-caption {
    max-width: 43%;
    font-size: 7px;
    letter-spacing: 0.7px;
  }

  .scroll-cue {
    font-size: 7px;
    letter-spacing: 0.7px;
  }

  .hero-coordinates {
    display: none;
  }

  .hero-side-label {
    right: 10px;
    font-size: 7px;
  }

  .intro {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .section-label {
    font-size: 8px;
    letter-spacing: 1.4px;
  }

  .section-note {
    font-size: 7px;
    letter-spacing: 0.5px;
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 43px 0 35px;
  }

  .intro-title {
    font-size: clamp(38px, 10vw, 58px);
  }

  .intro-copy p {
    font-size: 12px;
  }

  .intro-copy .inline-link {
    margin-top: 18px;
  }

  .image-banner {
    min-height: 340px;
    height: 105vw;
    max-height: 450px;
  }

  .image-banner img {
    object-position: 55% center;
  }

  .banner-content {
    bottom: 9%;
    left: 7%;
  }

  .banner-content h3 {
    font-size: 40px;
  }

  .destinations {
    padding-top: 15px;
    padding-bottom: 85px;
  }

  .destination-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    padding: 42px 0 30px;
  }

  .destination-heading h2 {
    font-size: clamp(39px, 10vw, 58px);
  }

  .destination-heading p {
    font-size: 12px;
  }

  .destination-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .destination-card,
  .destination-card.destination-large {
    grid-row: auto;
    min-height: 430px;
    height: 120vw;
    max-height: 530px;
  }

  .card-top {
    top: 20px;
    right: 19px;
    left: 19px;
  }

  .card-content {
    right: 21px;
    bottom: 23px;
    left: 21px;
  }

  .card-content h3 {
    font-size: 42px;
  }

  .vision {
    min-height: 590px;
    padding: 85px 0;
  }

  .vision-content h2 {
    margin: 25px 0 20px;
    font-size: clamp(45px, 11vw, 65px);
  }

  .vision-content p {
    font-size: 12px;
  }

  .vision-side-text {
    right: 9px;
    font-size: 7px;
  }

  .footer {
    width: 88%;
    min-height: 145px;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    text-align: center;
  }

  .footer p,
  .copyright {
    font-size: 7px;
    line-height: 1.7;
  }

  .planet-dialog {
    padding: 32px 25px;
  }
}

/* SMALL MOBILE */

@media (max-width: 360px) {
  .hero h1 {
    font-size: 43px;
  }

  .hero-eyebrow {
    font-size: 7px;
  }

  .hero-caption {
    font-size: 6px;
  }

  .scroll-cue {
    font-size: 6px;
  }

  .section-note {
    max-width: 48%;
  }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}