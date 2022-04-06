const { assert } = require("chai")
const expect = require("chai").expect
const List = require("../src/list.js")
describe("Key-value pair list", function () {
    describe("when empty list", function () {
        it("returns zero elements", function () {
            var list = new List();
            assert.equal(list.count(), 0);
        })
        it("none key is found", function () {
            var list = new List();
            var key = "key"
            assert.isNull(list.find(key));
        })
    })
    describe("when add one element", function () {
        it("count returns 1", function () {
            var list = new List();
            list.add("key","value");
            assert.equal(list.count(), 1);
        })
        it("returns the value added", function () {
            var list = new List();
            list.add("key","value");
            key="key";
            assert.equal(list.find(key),"value");
        })
    })        
    describe("adding a key is in the list", function () {
            it("updates the value", function () {
                var list = new List();
                list.add("key","value");
                key="key";
                list.add("key","newValue");

                assert.equal(list.find(key),"newValue");
            })    
    })
    describe("adding a second different key", function () {
        it("updates the count to 2", function () {
            var list = new List();
            list.add("key","value");
            list.add("key2","value2");

            assert.equal(list.count("key"),2);
        })
    }) 
        describe("deleting a key", function () {
            it("in an empty list, count is zero", function () {
                var list = new List();
                list.delete(key);    
                assert.equal(list.count("key"),0);
            }) 
            it("that exists in the list, count decreasess by one", function () {
                var list = new List();
                list.add("key","value");
                list.add("key2","value2");

                list.delete("key");    
                assert.equal(list.count("key"),1);
            })         
})
describe("getting an ordered list", function () {
    it("from an empty list, return empty list", function () {
        var list = new List();
        var orderedList=[];
            
        assert.deepEqual(list.getOrderedList(),orderedList);
    }) 
    it("from non empty ordered list, return ordered list", function () {
        var list = new List();
        var orderedList=[{key:"a",value:"value2"},{key:"b",value:"value"}];
        list.add("a","value2");
        list.add("b","value");

        assert.deepEqual(list.getOrderedList(),orderedList);
    })  
    it("from non empty unordered list, return ordered list", function () {
        var list = new List();
        var orderedList=[{key:"a",value:"value2"},{key:"b",value:"value"},{key:"c",value:"value2"}];
        list.add("b","value");
        list.add("c","value2");
        list.add("a","value2");

        assert.deepEqual(list.getOrderedList(),orderedList);
    }) 
})
});
