$(".countdown-time").countdowntimer({
    hours : 9,
    labelsFormat: false,
    displayFormat: "HMS",
});

$('.js-example-basic-single').select2();

$('.popular-slider').slick({
    slidesToShow: 9,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 8,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.top-car-slider').slick({
    slidesToShow: 7,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.sae-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1060,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.motor-brands-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1060,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 1100) {
        $('.search-category-list:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 7,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    } else {
        $(".search-category-list.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 992) {
        $('.customers-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 3,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 840,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    } else {
        $(".customers-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-close__line').on('click', function (e) {
    e.preventDefault();
    $('.top-line').fadeOut();
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.mobile-menu-modal').fadeToggle();
});

// hidden list > 10
$('.sidebar .form-filter > .list-checkbox').each(function () {
    if ($(this).find('li').length > 10) {
        $(this).find('li').slice(10).hide();
        $(this).parent('.form-filter').append('<a href="#" class="load-more-wrap color-accent">More</a>');
    }

});
// hidden list > 10

// show list all
$('.load-more-wrap').on('click', function (e) {
    e.preventDefault();
    $('.list-checkbox li:hidden').slice(0, 10).slideDown();

    var onBlock = $('.list-checkbox li:hidden').length;
    if(onBlock <= 0) {
        $('.load-more-wrap').hide();
    }
});


// hidden list > 6
$('.list-characteristics').each(function () {
    if ($(this).find('li').length > 6) {
        $(this).find('li').slice(6).hide();
        $(this).parent('.product-description__body').append('<a href="#" class="load-more color-accent">More info</a>');
    }

});
// hidden list > 10

// show list all
$('.load-more').on('click', function (e) {
    e.preventDefault();
    $('.list-characteristics li:hidden').slice(0, 10).slideDown();

    var onBlock = $('.list-characteristics li:hidden').length;
    if(onBlock <= 0) {
        $('.load-more').hide();
    }
});

// show list all

// sidebar mobile
$('.btn-sidebar').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this);


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Hide filter');
        $('.sidebar').slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Show filter');
        $('.sidebar').slideUp();
    }
});

// amount product
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.drop-item__btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open');
    $(this).siblings('.list-compatibility__sub').slideToggle();
});
