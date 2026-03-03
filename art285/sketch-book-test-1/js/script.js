document.addEventListener('DOMContentLoaded', function () {

    //JAVASCRIPT FUNCTIONS GO HERE
    console.log(' Javascript IS READY');




});

document.addEventListener("DOMContentLoaded", function () {

    //TOGGLE MENU NAV FOR MOBILE BUTTON
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            menunav.setAttribute('data-navstate', 'open');
        }
    });

});


$(document).ready(function () {
    $("#flipbook").turn({
        width: 800,
        height: 500,
        autoCenter: true
    });

    $("#prev").click(function () {
        $("#flipbook").turn("previous");
    });

    $("#next").click(function () {
        $("#flipbook").turn("next");
    });
});
