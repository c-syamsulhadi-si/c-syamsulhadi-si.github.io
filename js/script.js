$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });


    $('.portfolio .button-container .btn').click(function () {
       let filter = $(this).attr('data-filter'); 
       if(filter == 'all') {
           $('.portfolio .image-container .box').show('400')
        }else {
           $('.portfolio .image-container .box').not('.'+filter).hide('200');
           $('.portfolio .image-container .box').filter('.'+filter).show('400');
       }
    });

    $('#theme-toggler').click(function () {
        $(this).toggleClass('fa-sun')
        $('body').toggleClass('dark-theme');
    });

    // script scrolling smooth
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500, 'linear'
        );
    });

    // script lightbox
    $.fn.justlightbox = function () {
        this.addClass("justlightbox").css({ "width": "200px" });
        return this.each(function (i, val) {
            $(this).click(function (e) {
                e.preventDefault();
                var popup = '<div class="mygallery"><div class="popup-wrapper">';
                var imgsrc = $(this).attr("href");
                popup += '<div class="popup active">';
                popup += '<a href="#" class="popup-close">X</a>';
                popup += '<img src="' + imgsrc + '"/>';
                popup += '</div>';
                popup += '</div></div>';
                $(this).parent().prepend(popup);
                $(".popup-wrapper").animate({ opacity: "1" });
                // Close popup
                $(".mygallery .popup-close").click(function (e) {
                    e.preventDefault();
                    $(".popup-wrapper").animate({ opacity: "0" }).remove();
                });
            });
        });
    }
    $(".lightbox").justlightbox();
});