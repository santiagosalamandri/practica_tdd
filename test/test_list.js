const {assert}=require("chai")
const expect=require("chai").requiere

describe("Key-value pair list",function() {
    it("An empty list returns zero elements",function() {
        var list= new List();
        assert.equal(list.count(),0);
    })
});
