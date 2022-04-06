module.exports = class elements {
    #elements;
    constructor() {
        this.#elements=[];
    }
    add(key, value) {
        for (let i = 0; i < this.#elements.length; i++) {
            const element = this.#elements[i];
            if(element.key==key){
                element.value=value;
                return;
            }
        }
        this.#elements.push({"key":key,"value":value});

    }
    count() {
        return this.#elements.length;
    }
    find(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            const element = this.#elements[i];
            if(element.key==key){
                return element.value;
            }
        }
           return null;  
    }
}