const { assert } = require("chai")
const expect = require("chai").expect
const List = require("../src/list.js")
describe("Key-value pair list", function () {
    describe("empty list", function () {
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
});
