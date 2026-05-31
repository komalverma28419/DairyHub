const menu = document.querySelector("#menu");
const openBtn = document.querySelector("#openMenu");
const closeBtn = document.querySelector("#closeMenu");

const buttons = document.querySelectorAll(".tab-btn")
const parts= document.querySelectorAll(".tab-content")


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


// section-5
buttons[0].classList.add("active");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // hide all
    parts.forEach((part,index) => part.classList.add("hidden"));
    document.getElementById(target)?.classList.remove("hidden");

    // remove active from all buttons
    buttons.forEach(b => b.classList.remove("active"));

    // add active to clicked button
    btn.classList.add("active");

  });
});

const platformBtn = document.getElementById("platformBtn");
const platformDropdown = document.getElementById("platformDropdown");

// toggle dropdown
platformBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  platformDropdown.classList.toggle("hidden");
});

// click outside close
document.addEventListener("click", function () {
  platformDropdown.classList.add("hidden");
});



