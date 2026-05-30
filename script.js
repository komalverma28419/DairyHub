const menu = document.getElementById("menu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

function openMenu() {
    menu.classList.remove("opacity-0", "-translate-y-5", "pointer-events-none");
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
}

function closeMenu() {
    menu.classList.add("opacity-0", "-translate-y-5", "pointer-events-none");
    openBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);