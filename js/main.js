// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItem = document.querySelectorAll(".nav-item");

// Set Initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // Opens the navigation bar
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItem.forEach(item => item.classList.add("show"));

    // Set Menu state to true
    showMenu = true;
  }
  // Closes the navigation bar
  else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItem.forEach(item => item.classList.remove("show"));

    // Set Menu state to false
    showMenu = false;
  }
}

// Changes current class when nav item is clicked
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
    Array.from(navItem, navItem => navItem.classList.remove("current"));
    navItem[i].classList.add("current");
  });
}

// Smooth Scrolling
$(".btn").on("click", function(event) {
  if (this.hask !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

//Character countdown, max 255 chars. Stop if hit
const MAX_LENGTH = 500;
document.querySelector("textarea").addEventListener("keyup", e => {
  document.querySelector("#charNum").innerHTML =
    MAX_LENGTH - e.target.value.length;
});
