'use strict';

class Slider {
    constructor(path, links, slides) {
        this._current = 0;
        this._currentScroll = 0;
        this._path = path;
        this._nav = links;
        this._slides = slides;
    }

    get current() {
        return this._current;
    }

    slideDown() {
        if (this._current == this._nav.length - 1) return;
        $('body').off('mousewheel', onScroll);

        this._step = document.documentElement.clientHeight;
        this._current++;
        this._currentScroll = this._current * -this._step;
        this._path.style.transform = `translateY(${this._currentScroll}px)`;
        return true;
    }

    slideUp() {
        if (this._current == 0) return;
        $('body').off('mousewheel', onScroll);

        this._step = document.documentElement.clientHeight;
        this._current--;
        this._currentScroll = this._current * -this._step; 
        this._path.style.transform = `translateY(${this._currentScroll}px)`;
        return true;
    }

    slideTo(link) {
        $('body').off('mousewheel', onScroll); 
        this._current = Array.from(this._nav).indexOf(link);
        this._step = document.documentElement.clientHeight;
        this._currentScroll = this._current * -this._step;
        this._path.style.transform = `translateY(${this._currentScroll}px)`;
    }

    manageLinks() {
        this._nav[this._current].classList.toggle('active');
    }

    addAnimations() {
        this._everything = this._slides[this._current].querySelectorAll('*[data-animated]');
        for (let elem of this._everything) {
            elem.classList.add('animate-fade-in');
        }
    }

    removeAnimations() {
        for (let elem of this._everything) {
            elem.classList.remove('animate-fade-in');
        }
        this._everything = null;
    }
}

window.onload = offPreloader;

const scrollLink = document.querySelector('#scrollDown');
const path = document.querySelector('#slider-path');
const nav = document.querySelectorAll('.header__nav-link');
const slides = document.querySelectorAll('.slide');
const slider = new Slider(path, nav, slides);

$('body').on('mousewheel', onScroll);

document.addEventListener('click', function(event) {
    if (event.target.id != 'scrollDown') return;
    slider.removeAnimations();
    slider.manageLinks();
    slider.slideDown();
    slider.addAnimations();
    slider.manageLinks();
});

for (let link of nav) {
    link.addEventListener('click', function() {
        slider.removeAnimations();
        slider.manageLinks();
        slider.slideTo(this);
        slider.addAnimations();
        slider.manageLinks();
    });
}

document.addEventListener('transitionend', function(event) {
    if (event.target != path) return;
    $('body').on('mousewheel', onScroll);
});

function onScroll(event) {
    if (event.originalEvent.wheelDelta > 0) {
        slider.manageLinks();
        slider.removeAnimations();
        slider.slideUp();
        slider.addAnimations();
        slider.manageLinks();

    }
    else {
        slider.manageLinks();
        slider.removeAnimations();
        slider.slideDown();
        slider.addAnimations();
        slider.manageLinks();
    }
}

function offPreloader() {
    let preloader = document.querySelector('#preloader');
    preloader.style.opacity = 0;

    function remove() {
        preloader.style.display = "none";
        preloader.removeEventListener('transitionend', this);
    }

    preloader.addEventListener('transitionend', remove);

    slider.addAnimations();
}