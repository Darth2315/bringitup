export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                try {
                    const contentBlock = item.closest('.module__info-show').nextElementSibling;
                    // contentBlock.style.display = 'block';
                    // contentBlock.classList.add('animated', 'fadeInUp');
                    contentBlock.classList.add('animated', 'fadeInUp');
                    contentBlock.classList.toggle('msg');
                    contentBlock.style.marginTop = '20px';
                } catch(e){}
                 
            });
        });
    }
}