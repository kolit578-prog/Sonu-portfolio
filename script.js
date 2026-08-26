const menu=document.getElementById('menu'),nav=document.getElementById('nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}

window.addEventListener("load", () => {
    setTimeout(() => {
        if (window.lucide) {
            lucide.createIcons();
        }
    }, 200);
});
