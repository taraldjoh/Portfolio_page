// Scrollspy
document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {
      activeClass: 'active',
    });
  
    window.scrollTo(1000, 1000);
  });

// Character counter
document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('textarea#textarea, input#name')
    var instances = M.CharacterCounter.init(elems);
  })