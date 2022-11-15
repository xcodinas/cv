/* globals Chart:false, feather:false */

(() => {
    'use strict'

    feather.replace({ 'aria-hidden': 'true' })

    const sections = document.querySelectorAll("section")

    // Create options for Observer:
    const options = {
        rootMargin: '100px 0px',
        threshold: [0.25, 0, 0.25, 0]
    }

    // Create instance of IO:
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                document.getElementById('nav-' + entry.target.id).classList.add('active')
            } else {
                document.getElementById('nav-' + entry.target.id).classList.remove('active')
            }
        })
    }, options)

    // Iterate over each queried el, and add observer:
    sections.forEach(section => {
        observer.observe(section)
    })
})()

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

})


function generatePDF() {
        var element = jQuery('.container-fluid')[0];
        var opt = {
            margin:       0.5,
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };

        // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
        AOS.init({disable: true});
        html2pdf().set(opt).from(element).save().then(function() {
            AOS.init();
        });
}
