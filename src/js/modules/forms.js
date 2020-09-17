export default class Forms {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        
        return await res.text();
    }

    init() {

    }
}