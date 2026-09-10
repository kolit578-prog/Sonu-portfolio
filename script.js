const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);


/* Dark / Light Mode */
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});


/* Remember selected theme */
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '🌙';
}


/* Scroll Reveal Animation */
const io = new IntersectionObserver(
  es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  }),
  { threshold: .12 }
);

document.querySelectorAll('.reveal').forEach(e => io.observe(e));
