// Select DOM Items
const navItem = document.querySelectorAll(".nav-link");

//Changes current class when nav item is clicked
for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", function() {
    Array.from(navItem, navItem => navItem.classList.remove("current"));
    navItem[i].classList.add("current");
  });
}

// Smooth Scrolling
$(".btn", "a").on("click", function(event) {
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

//Character countdown, max 500 chars
const MAX_LENGTH = 500;
document.querySelector("textarea").addEventListener("keyup", e => {
  document.querySelector("#charNum").innerHTML =
    MAX_LENGTH - e.target.value.length;
});

// Type Writer Effect
const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait =  parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  const current = this.wordIndex % this.words.length;
  // Get Full Text of Current Word
  const fulltxt = this.words[current];

  // Check If deleting
  if(this.isDeleting) {
    // Remove character
    this.txt = fulltxt.substring(0, this.txt.length -1);
  } else {
    // Add character
    this.txt = fulltxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial Type Speed 
  let typeSpeed = 200;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  // Check if word is complete
  if(!this.isDeleting && this.txt === fulltxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set isDeleting to True
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before next word
    typeSpeed = 800;
  }

  setTimeout(() => this.type(), typeSpeed)
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init Typewriter
  new TypeWriter(txtElement, words, wait);
}