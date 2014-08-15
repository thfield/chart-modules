/* --- vertical bar chart --- */
function barV(){

/* --- begin user set variables --- */
var pageTarget = "#barV_target";

//for more on margin conventions see http://bl.ocks.org/mbostock/3019563 
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var dataPath = "data/data.tsv";
  // set file path to datafile

/* --- end user set variables --- */

var JSONdata = [
  {
    "letter":"A",
    "frequency":0.08167
  },
  {
    "letter":"B",
    "frequency":0.01492
  },
  {
    "letter":"C",
    "frequency":0.02782
  },
  {
    "letter":"D",
    "frequency":0.04253
  },
  {
    "letter":"E",
    "frequency":0.12702
  },
  {
    "letter":"F",
    "frequency":0.02288
  },
  {
    "letter":"G",
    "frequency":0.02015
  },
  {
    "letter":"H",
    "frequency":0.06094
  },
  {
    "letter":"I",
    "frequency":0.06966
  },
  {
    "letter":"J",
    "frequency":0.00153
  },
  {
    "letter":"K",
    "frequency":0.00772
  },
  {
    "letter":"L",
    "frequency":0.04025
  },
  {
    "letter":"M",
    "frequency":0.02406
  },
  {
    "letter":"N",
    "frequency":0.06749
  },
  {
    "letter":"O",
    "frequency":0.07507
  },
  {
    "letter":"P",
    "frequency":0.01929
  },
  {
    "letter":"Q",
    "frequency":0.00095
  },
  {
    "letter":"R",
    "frequency":0.05987
  },
  {
    "letter":"S",
    "frequency":0.06327
  },
  {
    "letter":"T",
    "frequency":0.09056
  },
  {
    "letter":"U",
    "frequency":0.02758
  },
  {
    "letter":"V",
    "frequency":0.00978
  },
  {
    "letter":"W",
    "frequency":0.02360
  },
  {
    "letter":"X",
    "frequency":0.00150
  },
  {
    "letter":"Y",
    "frequency":0.01974
  },
  {
    "letter":"Z",
    "frequency":0.00074
  }
];


var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var svg = d3.select(pageTarget).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.tsv(dataPath, type, function(error, data) {
//d3.json(dataPath, function(error, json) {

  data = JSONdata.slice();

  x.domain(d.letter);
  y.domain([0, d3.max(d.frequency)]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); });

//});

function type(d) {
  d.frequency = +d.frequency;
  return d;
};

};
/* --- end vertical bar chart --- */
barV();

// adapted from http://bl.ocks.org/mbostock/3885304