
$(document).ready(function () {
    //Menu button on click event
    $('.menu-burg').on('click', function() {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $( ".burger" ).toggleClass( "menu-on");
        // Toggles a class that slides the menu into view on the screen
        $('.mob-menu').toggleClass('mob-menu--open');
        return false;
    });
});