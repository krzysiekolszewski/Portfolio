require('../scss/main.scss');
    $(document).ready(function(){
      // Adding effect to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      var game = document.querySelector(".game")
          game.onclick = function() {
              document.querySelector('.overlay').style.display = ('block');
              document.querySelector('#over_text').innerText = (" Gra Pac-game opiera się na prostym silniku stworzonym w JavaScript. Gra polega na sterowaniu obiektem za pomocą strzałek i zbieraniu truskawek oraz bonusowych ciastek. Gra kończy się w momencie, gdy Pac uderzy w ścianę. \n \n Punkt bonusowy pojawia się losowo, po pewnym okresie czasu");
              document.querySelector('#code').href=('https://github.com/krzysiekolszewski/Pac-game');
              document.querySelector('#live').href=('https://krzysiekolszewski.github.io/Pac-game');

              var close = document.getElementById('close')
              close.onclick = function() {
                 document.querySelector(".overlay").style.display = ('none')
              }
          }










    });
