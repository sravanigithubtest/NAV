let hamburgerEl = document.getElementById("hamburger");
let closeEl = document.getElementById("close");
let navLinks = document.getElementById("navlinks");

hamburgerEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("hide");
    navLinks.classList.toggle("navlinks");
    closeEl.classList.toggle("unhide");
});
closeEl.addEventListener("click", () => {
    hamburgerEl.classList.toggle("hide");
    closeEl.classList.toggle("unhide");
    navLinks.classList.toggle("navlinks");
});