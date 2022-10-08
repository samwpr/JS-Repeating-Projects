const navEl = document.getElementById('navbar');
const textEl = document.getElementById('blog-container');

console.log(navEl.offsetHeight);
console.log(textEl.offsetTop);

window.addEventListener("scroll", () => {
    if(window.scrollY > textEl.offsetTop - navEl.offsetTop - 50){
        navEl.classList.add("active");
    } else {
        navEl.classList.remove("active");
    }
});