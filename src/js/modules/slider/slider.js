export default class Slider {
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay,
        paused } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.paused = paused;
        this.slideIndex = 1;
    }
}