var assert = require("chai").assert;
var maxProfit = require("../maxProfit");

describe('maxProfit', function(){
  it("should return -1 for less than 2 elements", function(){
    assert( maxProfit([1]) === -1 );
  });
  it("should return -1 for nonnumeric entries", function(){
    assert( maxProfit([1,2,3,'string',5]) === -1 );
  });
  it("should return -1 for decreasing values", function(){
    assert( maxProfit([5,4,3,2,1]) === -1 );
  });
  it("should return max difference possible for valid array of numbers", function(){
    assert( maxProfit([45, 24, 35, 31, 40, 38, 11]) === 16 );
  });
});