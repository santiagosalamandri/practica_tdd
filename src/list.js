module.exports = class List {
    #quantity
    constructor() {
        this.#quantity = 0;
    }
    add(key, value) {
        this.#quantity += 1;
    }
    count() {
        return this.#quantity;
    }
    find(key) {
        if (this.#quantity == 0) {
             return null; }
        else {
            return "value";
        }
    }
}