define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    function initSlider() {
        $('.slider-row .pagebuilder-column-line').each(function () {
            var $slider = $(this);
            if ($slider.hasClass('slick-initialized')) return;
            if ($slider.children('.slider-col').length < 2) return;

            $slider.slick({
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

            console.log('Slick foi integraod');
        });
    }

    $(document).ready(function () {
        console.log('Slick inicializado');
        initSlider();
    });

    $(document).on('contentUpdated', function () {
        initSlider();
    });

    return initSlider;
});
