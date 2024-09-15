
  /*start of the PROJECT SLIDESHOW */
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }
  
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }
  
  // Event listeners for prev/next buttons
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Show initial slide
  showSlide(currentSlide);
  
    //end of the slide show

    //the slide show required its own js at the bottom of the index page to work properly 
    



  


















    