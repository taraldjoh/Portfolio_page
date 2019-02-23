// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu", ".menu-nav");
const menuNav = document.querySelector(".menu-nav");
const navItem = document.querySelectorAll(".nav-item");

//Changes current class when nav item is clicked
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
