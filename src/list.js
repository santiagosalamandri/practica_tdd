module.exports = class elements {
    #elements;
    //Creates an empty list
    constructor() {
        this.#elements = [];
    }
    //Fecth element from key
    fetchElement(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            const element = this.#elements[i];
            if (element.key == key) {
                return i;
            }
        }
        return -1;
    }
    //Adds a key-value pair to the list
    add(key, value) {
        var index=this.fetchElement(key);
        if (index != -1){
             this.#elements[index].value=value;
             return;
        }
        this.#elements.push({ "key": key, "value": value });
    }
    // Returns the number of elements on a list
    count() {
        return this.#elements.length;
    }
    //Looks up a value based on a key in the list
    find(key) {
        var index=this.fetchElement(key);
        if (index != -1){
            return this.#elements[index].value;
        }
        else{
            return null;
        } 
    }
    //Delete a key-value pair based on a key from the list
    delete(key) {
        var index=this.fetchElement(key);
        if (index != -1){
            this.#elements.splice(this.#elements[index], 1);
            return;
        }
    }
    //Return the list ordered alphabetically
    getOrderedList() {
        return this.#elements.sort((a, b) => (a.key > b.key) ? 1 : -1);
    }
}