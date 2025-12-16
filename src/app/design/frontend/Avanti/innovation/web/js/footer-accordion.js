define([
    'jquery',
    'matchMedia'
], function ($, mediaCheck) {
    'use strict';

    mediaCheck({
        media: '(max-width: 767px)',
        entry: function () {
            $(initAccordion);
        },
        exit: function () {
            $('.footer-accordion')
                .removeClass('is-open')
                .find('ul')
                .attr('style', '');
        }
    });

    function initAccordion() {
        var $accordions = $('.footer-accordion');

        if (!$accordions.length)
            return;

        $accordions.each(function () {
            var $block = $(this);
            var $title = $block.find('h5').first();
            var $list = $title.next('ul');

            if (!$list.length) {
                console.log("footer-accordion: bloco sem <ul> logo após o <h5>");
                return;
            }

            $block.removeClass('is-open');
            $list.hide();

            $title
                .off('click.footerAccordion')
                .on('click.footerAccordion', function () {
                    $block.toggleClass('is-open');
                    $list.slideToggle(200);
                });
        });
    }
});
