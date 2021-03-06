// Type Writer Effect
const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  };
  
  // Type Method
  TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;
    // Get Full Text of Current Word
    const fulltxt = this.words[current];
  
    // Check If deleting
    if (this.isDeleting) {
      // Remove character
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      // Add character
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
  
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
    // Initial Type Speed
    let typeSpeed = 200;
  
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
  
    // Check if word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set isDeleting to True
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before next word
      typeSpeed = 800;
    }
  
    setTimeout(() => this.type(), typeSpeed);
  };