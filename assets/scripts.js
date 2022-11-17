/* globals Chart:false, feather:false */

(() => {
    'use strict'

    feather.replace({ 'aria-hidden': 'true' })
})()

var selector = '.nav-item a';
$(window).scroll(function() {
    onScrollt(selector);
});
function onScrollt(selector) {
    var scrollPos = $(document).scrollTop();
    $(selector).each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (parseInt(refElement.position().top) - 300 <= scrollPos && (parseInt(refElement.position().top) + parseInt(refElement.height()) - 300) > scrollPos) {
            $(selector).removeClass("active");
            currLink.addClass("active");
        } else if (scrollPos == 0) {
            jQuery(selector).first().addClass('active');
        } else {
            currLink.removeClass("active");
        }
    });
}

jQuery(document).ready(function() {

    jQuery('#experience #work-cards').children(':odd').attr(
        'data-aos', 'fade-up-left');
    jQuery('#experience #work-cards').children(':even').attr(
        'data-aos', 'fade-up-right');
    jQuery('#education #work-cards').children(':odd').attr(
        'data-aos', 'fade-up-left');
    jQuery('#education #work-cards').children(':even').attr(
        'data-aos', 'fade-up-right');
    AOS.init();
    onScrollt(selector);

    jQuery('.progress').attr('data-html2canvas-ignore', true);
})


function generatePDF() {
        var element = jQuery('.container-fluid')[0];
        var opt = {
            margin:       0,
            filename:     'cv-xcodinas.pdf',
            image:        { type: 'jpeg', quality: 1 },
              pagebreak: { avoid: 'a', before: '.break-before' },
            html2canvas:  { scale: 1, backgroundColor: "#111821"},
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

        // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
        AOS.init({disable: true});
        jQuery('#pdf-styles').removeAttr('disabled');
        jQuery('.show-pdf').show();
        jQuery('a').attr('aria-disabled', true);
        $('a').each(function() {
            var $t = $(this);
            $t.attr({
                oldHref: $t.attr('href')
            })
            .removeAttr('href');
        });
        html2pdf().set(opt).from(element).save().then(function() {
            AOS.init();
            jQuery('#pdf-styles').attr('disabled', true);
            jQuery('.show-pdf').hide();
            jQuery('a').removeAttr('aria-disabled');
            $('a').each(function() {
                var $t = $(this);
                $t.attr({
                    href: $t.attr('oldHref')
                })
                .removeAttr('oldHref');
            });
        });
}
