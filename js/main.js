$(document).ready(function () {
    slide_home('.sale-products__main-slide', '.sale-products__prev', '.sale-products__next');
    slide_home('.latest-offers__main-slide', '.latest-offers__prev', '.latest-offers__next');
    slide_home('.inspiration__main-slide', '.inspiration__pre', '.inspiration__next');

    function slide_home(name_slide, previous, next) {
        $(name_slide).slick({
            // infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10%',
            prevArrow: previous,
            nextArrow: next,
            responsive: [{
                    breakpoint: 991.8,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: true,
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '11%',
                    }
                }
            ]
        });
    }

    // checkbox heart
    $('.sale-products__add-product').click(function (e) {
        e.preventDefault();
        var btn = $(this).select();
        var icon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16 sale-products__heart-solid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>'
        $(btn).html(icon);
    });




    $('.our-brands__main-slide').slick({
        // infinite: true,
        speed: 1000,
        slidesToShow: 5,
        arrows: false,
        responsive: [{
                breakpoint: 991.8,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '11%',
                }
            }
        ]
    });

});