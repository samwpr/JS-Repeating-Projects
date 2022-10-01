const navbarEl = document.getElementById('navbar');
const textcontainerEl = document.getElementById('text-container');

console.log(navbarEl.offsetHeight);
console.log(textcontainerEl.offsetTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > textcontainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
});