/*for the hamburger menu toggles it on or off u know*/ 
$(function() {
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  });
//end of hamburger menu

/* this is for the index page minivideo game*/
/* the welcome section*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("play-game-btn").addEventListener("click", playGame);
  
    function playGame() {
      var randomNumber = Math.floor(Math.random() * 10) + 1;
      var userGuess = prompt("Guess a number between 1 and 10:");
  
      if (userGuess == randomNumber) {
        document.getElementById("game-result").textContent = "Congratulations! You guessed it right!";
      } else {
        document.getElementById("game-result").textContent = "Sorry, wrong guess. The number was " + randomNumber + ".";
      }
    }
  });
  
  //this makes the btn shake and more interactive 
  document.addEventListener("DOMContentLoaded", function() {
    var playGameBtn = document.getElementById("play-game-btn");
  
    playGameBtn.addEventListener("mouseover", function() {
      playGameBtn.classList.add("shake");
    });
  
    playGameBtn.addEventListener("mouseout", function() {
      playGameBtn.classList.remove("shake");
    });
  });
  //end of btn that is cool 

//end of game on top 


/*for the text box 
const messages = ["Welcome!", "Hello!", "Greetings!","Bonjour", "Hola", "Ciao","Hey there!"];
const textAnimationElement = document.getElementById("textAnimation");

function startTextAnimation() {
  let currentIndex = 0;

  function animateText() {
    textAnimationElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
  }

  animateText();
  setInterval(animateText, 3000); // Change text every 3 seconds
}

startTextAnimation();
*/

