const menuBtn = document.getElementById("menu-btn");
const crossBtn = document.getElementById("cross-btn")
const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
      menuBtn.classList.add("hidden");     // hamburger hide
  crossBtn.classList.remove("hidden"); 
  });


crossBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");

  crossBtn.classList.add("hidden");    // cross hide
  menuBtn.classList.remove("hidden");  // hamburger show
});
