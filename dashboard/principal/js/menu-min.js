function myFunction(a) {
    $('.content').removeClass('active');
    var c = a.parentNode.getElementsByClassName("content")[0].classList.toggle("active");
}

/*function myFunction2(a) {
    $('.content').removeClass('active');
    var z = a.parentNode.parentNode.getElementsByClassName("content")[0].classList.toggle("active");
    console.log(z);
}*/

window.onclick = function(event) {
    if (!event.target.matches('.li_dropdown svg') && !event.target.matches('.li_dropdown a') && !event.target.matches('.li_dropdown path') && !event.target.matches('.li_dropdown h5')) {
        $('.content').removeClass('active');
        var dropdowns = document.getElementsByClassName("content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}

/** PANTALLA COMPLETA **/
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

/*****/
$(document).on('click', '.dropdownB>a', function() {
    $('.divDropdownB').slideToggle();
});

/*****/
$(document).on('click', '#expand', function() {
    toggleFullScreen();
});