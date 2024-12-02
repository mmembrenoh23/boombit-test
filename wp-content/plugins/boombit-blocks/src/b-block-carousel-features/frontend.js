import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {
    $('.boombit-block-carousel-features-content').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});