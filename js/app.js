require('../scss/main.scss');
$(document).ready(function() {

    //scroll down animation
    $('.arrow a, .menu nav ul a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
    //scroll up animation
    $('#scrollToTop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.game').on('click', function() {
        $('.overlay').css('display', 'inline-block');
        $('#over_title').text("Pac-game")
        $('#over_text').text("Gra Pac-game opiera się na prostym silniku stworzonym w JavaScript. Gra polega na sterowaniu obiektem za pomocą strzałek i zbieraniu truskawek oraz bonusowych ciastek. Gra kończy się w momencie, gdy Pac uderzy w ścianę.");
        $('#code').attr('href', 'https://github.com/krzysiekolszewski/pac-game');
        $('#live').attr('href', 'https://krzysiekolszewski.github.io/pac-game');
        $('#close').on('click', function() {
            $('.overlay').css('display', 'none');
        });
    });

    //esc key closes overlay
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            document.querySelector(".overlay").style.display = ('none')
        }
    });

    // after scroll show scroll top icon
    $(window).scroll(function() {
        $('.scroll').css('display', 'inline-block')
    })

    //mobile navigation
    $(".fa-bars").on('click', function() {
        $('.mobile_menu').css('display', 'flex');
    })

    $(".fa-times").on('click', function() {
        $('.mobile_menu').css('display', 'none');
    })

    $(".container a").on('click', function() {
        $('.mobile_menu').css('display', 'none');
    })
});
