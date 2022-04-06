module.exports = class List {
    #quantity  
    constructor() {
    this.#quantity=0
    }
    add(key,value){
        this.#quantity+=1;
    }

    count() {
        return this.#quantity;
    }
    find(key) {
        return null;
    }
}