export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    downloadItem(path) {
        const link = document.createElement('a');

        link.setAttribute('href', path);
        link.setAttribute('download', 'good_pic');
        
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    init() {
       this.btns.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.downloadItem(this.path);
            });
       });
    }
}