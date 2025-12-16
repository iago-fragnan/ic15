define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    function initSlider() {
        $('.pagebuilder-slider')
            .find('.pagebuilder-column-line')
            .not('.slick-initialized')
            .slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: true,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3
                        }
                    }
                ]
            });
        console.log("Slider foi adicionado");

    }

    $(document).ready(function () {
        console.log("Slick Slider inicializado");
        initSlider();
    });

    $(document).on('contentUpdated', function () {
        initSlider();
    });

    return initSlider;
});
