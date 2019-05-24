
// Page Loader
// window.addEventListener("load", () => {
//     setTimeout(() => {
//       const loader = document.querySelector(".loader");
//       loader.className += " hidden";
//     }, 3000);
// })

// Fade in body on load 
window.addEventListener("load", () => {
  document.body.className += "fade-in";
})

// Item Fade In On Scroll
const items = document.querySelectorAll(".item");

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });

// Events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init Typewriter
  new TypeWriter(txtElement, words, wait);
}

// Initialize Materialize
M.AutoInit();