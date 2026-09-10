/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {

    themeToggle.textContent = "🌙";

    localStorage.setItem("theme", "light");

  } else {

    themeToggle.textContent = "☀️";

    localStorage.setItem("theme", "dark");

  }

});


/* Remember selected theme */

if (localStorage.getItem("theme") === "light") {

  document.body.classList.add("light");

  themeToggle.textContent = "🌙";

}


/* =========================
   SCROLL REVEAL
========================= */

const io = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        io.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  io.observe(element);
});


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
  "IT Student",
  "Programmer",
  "Software Developer",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1400);

      return;
    }

  } else {

    typingElement.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }

    }

  }

  setTimeout(
    typeEffect,
    deleting ? 55 : 90
  );
}

typeEffect();


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", event => {

  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";

});


/* =========================
   PROJECT CARD TILT
========================= */

const cards = document.querySelectorAll(".project");

cards.forEach(card => {

  card.addEventListener("mousemove", event => {

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -5;

    const rotateY =
      ((x - centerX) / centerX) * 5;

    card.style.transform =
      `perspective(700px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-8px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

  });

});
