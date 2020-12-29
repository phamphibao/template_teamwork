$(document).ready(function () {
    slide_home('.main-slide-products','#pre-products','#next-products');
    slide_home('.main-slide-latest','.pre-latest','.next-latest');
    slide_home('.main-slide-food','#pre-food','#next-food');
   



    function slide_home(name_slide,previous,next) {
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
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }


});