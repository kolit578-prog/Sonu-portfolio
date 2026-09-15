/* =========================
   TEJAS KOLI PORTFOLIO
========================= */

:root {
  --bg: #070b14;
  --bg2: #0d1322;
  --text: #f5f7fb;
  --muted: #a9b2c3;
  --panel: rgba(18, 25, 42, 0.72);
  --border: rgba(255, 255, 255, 0.1);
  --a: #67e8f9;
  --a2: #8b5cf6;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: Inter, Arial, sans-serif;
  background:
    radial-gradient(circle at 15% 10%, rgba(103,232,249,.10), transparent 28%),
    radial-gradient(circle at 85% 25%, rgba(139,92,246,.12), transparent 30%),
    var(--bg);
  color: var(--text);
  line-height: 1.7;
}

body.light {
  --bg: #f5f7fb;
  --bg2: #ffffff;
  --text: #111827;
  --muted: #5b6475;
  --panel: rgba(255,255,255,.86);
  --border: rgba(17,24,39,.10);
}

* {
  transition:
    background .3s ease,
    color .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 18px 6%;
  background: rgba(7,11,20,.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
}

body.light header {
  background: rgba(255,255,255,.82);
}

.logo {
  font-family: Poppins, Inter, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  margin-right: auto;
  white-space: nowrap;
}

.logo b {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-right: 8px;
  border-radius: 10px;
  color: #061018;
  background: linear-gradient(135deg, var(--a), #fff);
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

nav a {
  color: var(--muted);
  font-size: .9rem;
  font-weight: 600;
}

nav a:hover {
  color: var(--a);
}

#themeToggle,
#menu {
  border: 1px solid var(--border);
  color: var(--text);
  background: var(--panel);
  cursor: pointer;
  border-radius: 12px;
  padding: 8px 11px;
}

#menu {
  display: none;
}

main {
  position: relative;
  z-index: 2;
}

.orb {
  position: fixed;
  z-index: 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  opacity: .18;
}

.orb.one {
  top: 10%;
  left: -130px;
  background: var(--a);
}

.orb.two {
  right: -140px;
  top: 45%;
  background: var(--a2);
}

.hero {
  min-height: calc(100vh - 72px);
  max-width: 1200px;
  margin: auto;
  padding: 90px 6%;
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
  gap: 70px;
}

.status {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--a);
  font-size: .78rem;
  font-weight: 700;
  letter-spacing: .12em;
}

.hero h1 {
  font-family: Poppins, Inter, sans-serif;
  font-size: clamp(2.8rem, 7vw, 5.8rem);
  line-height: 1.05;
  letter-spacing: -.05em;
}

.hero h1 span,
.heading h2 span,
.contact-card h2 span {
  background: linear-gradient(90deg, var(--a), #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero h2 {
  margin-top: 20px;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  color: var(--muted);
}

.hero p {
  max-width: 650px;
  margin: 20px 0;
  color: var(--muted);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 19px;
  border-radius: 12px;
  font-weight: 700;
  border: 1px solid var(--border);
}

.btn.primary {
  color: #061018;
  background: linear-gradient(135deg, var(--a), #a78bfa);
}

.btn.secondary {
  background: var(--panel);
  color: var(--text);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 25px;
  color: var(--muted);
  font-size: .9rem;
}

.links a:hover,
.project a:hover,
.email:hover {
  color: var(--a);
}

.visual {
  position: relative;
  min-height: 480px;
  display: grid;
  place-items: center;
}

.photo {
  position: relative;
  z-index: 2;
  width: min(390px, 80vw);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(135deg, var(--a), var(--a2), transparent);
  box-shadow: 0 0 80px rgba(103,232,249,.15);
}

.photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  background: #fff;
}

.orbit {
  position: absolute;
  width: 450px;
  height: 450px;
  border: 1px dashed rgba(103,232,249,.25);
  border-radius: 50%;
  animation: spin 18s linear infinite;
}

.float-card {
  position: absolute;
  z-index: 3;
  padding: 11px 15px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--panel);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
  font-size: .85rem;
  font-weight: 700;
}

.f1 {
  top: 18%;
  left: 4%;
}

.f2 {
  right: 2%;
  bottom: 18%;
}

.section {
  max-width: 1200px;
  margin: auto;
  padding: 100px 6%;
}

.heading {
  margin-bottom: 40px;
}

.heading small,
.contact-card small {
  color: var(--a);
  font-weight: 800;
  letter-spacing: .12em;
}

.heading h2,
.contact-card h2 {
  margin-top: 8px;
  font-family: Poppins, Inter, sans-serif;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.15;
}

.grid2 {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 22px;
}

.panel {
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--panel);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.panel p {
  color: var(--muted);
}

.panel p + p {
  margin-top: 18px;
}

.facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.facts .panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.facts small {
  color: var(--muted);
}

.skills {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 18px;
}

.skill strong {
  font-size: 1.1rem;
}

.skill p {
  margin: 8px 0 15px;
  font-size: .9rem;
}

.skill i {
  display: block;
  height: 5px;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--a), var(--a2));
}

.chips,
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.chips {
  margin-top: 22px;
}

.chips span,
.tags span {
  padding: 6px 10px;
  border-radius: 99px;
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: .78rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 18px;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.project small {
  color: var(--a);
  font-weight: 800;
}

.project h3 {
  font-family: Poppins, Inter, sans-serif;
  font-size: 1.25rem;
}

.project .tags {
  margin-top: auto;
}

.project a {
  color: var(--a);
  font-weight: 700;
}

.note {
  margin-top: 22px;
  color: var(--muted);
  font-size: .85rem;
}

.timeline {
  display: grid;
  gap: 24px;
}

.item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 22px;
  align-items: start;
}

.item > b {
  color: var(--a);
  font-size: .8rem;
  letter-spacing: .08em;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 18px;
}

.achievements b {
  display: block;
  margin-bottom: 8px;
}

.contact {
  padding-bottom: 120px;
}

.contact-card {
  text-align: center;
  max-width: 850px;
  margin: auto;
}

.contact-card p {
  margin: 16px auto;
  color: var(--muted);
}

.email {
  display: inline-block;
  margin: 8px 0;
  color: var(--a);
  font-size: 1.15rem;
  font-weight: 700;
}

.center {
  justify-content: center;
}

footer {
  padding: 30px 6%;
  text-align: center;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: .85rem;
}

.reveal {
  opacity: 0;
  transform: translateY(25px);
  animation: reveal .8s ease forwards;
}

.delay {
  animation-delay: .2s;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {

  nav {
    position: absolute;
    top: 72px;
    right: 6%;
    left: 6%;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 18px;
    background: rgba(10,15,27,.96);
    backdrop-filter: blur(18px);
    box-shadow: var(--shadow);
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 12px;
    border-radius: 10px;
  }

  #menu {
    display: block;
  }

  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 65px;
  }

  .hero p {
    margin-left: auto;
    margin-right: auto;
  }

  .buttons,
  .links {
    justify-content: center;
  }

  .visual {
    min-height: 420px;
  }

  .grid2,
  .skills,
  .projects,
  .achievements {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {

  header {
    padding: 14px 5%;
  }

  .hero,
  .section {
    padding-left: 5%;
    padding-right: 5%;
  }

  .hero {
    padding-top: 50px;
  }

  .hero h1 {
    font-size: clamp(2.5rem,13vw,4rem);
  }

  .visual {
    min-height: 340px;
  }

  .photo {
    width: 270px;
  }

  .orbit {
    width: 310px;
    height: 310px;
  }

  .float-card {
    font-size: .72rem;
    padding: 8px 10px;
  }

  .f1 {
    left: 0;
  }

  .f2 {
    right: 0;
  }

  .facts {
    grid-template-columns: 1fr;
  }

  .item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .panel {
    padding: 20px;
  }
}

/* LIGHT MODE MOBILE MENU */

body.light nav {
  background: #ffffffee;
}

body.light nav a {
  color: #111827;
}

body.light nav a:hover {
  color: var(--a);
}

body.light #themeToggle {
  color: #111827;
  background: #ffffffaa;
}
