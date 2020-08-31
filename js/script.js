function myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
};

window.onclick = function(event) {
    if (!event.target.matches('#user__cllck', '.user__photo')) {
        var dropdowns = document.getElementsByClassName('dropdown');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.querySelector('#burger').onclick = function() {
    document.querySelector('.burger__but').classList.toggle('burger__active');
};

$(document).ready(function() {
    $('#burger').click(function(event) {
        $('.header__navi').toggleClass('active__navi');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $('.mile_run').hide();
});

$('.topic_img').mouseover(function() {
    $(this).children('.mile_run').show();
});

$('.topic_img').mouseout(function() {
    $(this).children('.mile_run').hide();
});


$(document).ready(function() {
    $('.mile_run').hide();
    $('.details-1').hide();
    $('.details-2').hide();
    $('.details-3').hide();
    $('.first').click(function() {
        $('.details-1').slideToggle();
    });
    $('.second').click(function() {
        $('.details-2').slideToggle();
    });
    $('.third').click(function() {
        $('.details-3').slideToggle();
    });

    $('.hidden-topics').hide();
    $('.show-hidden').click(function() {
        $('.hidden-topics').slideToggle();
    });
});
$('.dropdown-toggle').dropdown('.dropdown-menu')