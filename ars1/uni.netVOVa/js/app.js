let burger = document.getElementById("burger");
let nav = document.getElementById("nav");

function transform() {
    if (burger.classList.contains('burger-active')) {
        burger.classList.add("burger");
        burger.classList.remove("burger-active");
        nav.classList.add("hide");
        nav.classList.remove("show");
    } else {
        burger.classList.add("burger-active");
        burger.classList.remove("burger");
        nav.classList.add("show");
        nav.classList.remove("hide");
    }
};
burger.addEventListener("click", transform);