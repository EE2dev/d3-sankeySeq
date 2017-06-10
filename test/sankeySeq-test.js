var tape = require("tape"),
    d3 = require("../");
    
tape("Basic test of sankey getter-setter function size()", function(test) {
  var width = 200;
  var height = 100;
  var sankey = d3.sankeySeq().size([width, height]);
  test.deepEqual( sankey.size(), [200,100]);
  test.end();
});

tape("Basic test of sankey getter-setter function debugOn()", function(test) {
  var sankey = d3.sankeySeq();
  test.equal( sankey.debugOn(), false);
  test.end();
});