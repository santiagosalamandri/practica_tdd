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
});
