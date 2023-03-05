$(document).ready(function() {
    $(document.body).css('overflow', 'scroll');
    setTimeout(() => document.body.scrollIntoView(), 200);
    $(document.body).css('overflow', 'hidden');

    const slider = $('#slider_slide-2');
    const second_slider = $('#second_slider');
    const third_slider = $('#third-slider');
    const forth_slider = $('#forth-slider');

    slider.slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    second_slider.slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    third_slider.slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    forth_slider.slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

