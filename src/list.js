module.exports = class elements {
    #elements;
    //Creates an empty list
    constructor() {
        this.#elements=[];
    }
    //Adds a key-value pair to the list
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
    // Returns the number of elements on a list
    count() {
        return this.#elements.length;
    }
    //Looks up a value based on a key in the list
    find(key) {
        for (let i = 0; i < this.#elements.length; i++) {
            const element = this.#elements[i];
            if(element.key==key){
                return element.value;
            }
        }
           return null;  
    }
    //Delete a key-value pair based on a key from the list
    delete(key){
        for (let i = 0; i < this.#elements.length; i++) {
            const element = this.#elements[i];
            if(element.key==key){
                this.#elements.splice(element,1);
                return;
            }
        }
    }
    //Return the list ordered alphabetically
    getOrderedList(){
        return this.#elements.sort((a, b) => (a.key > b.key) ? 1 : -1);
    }
}