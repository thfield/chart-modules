/* --- pie/donut chart --- */
var pageTarget = '#pie_target' ;
  // set chart position on page

var width = 400,
    height = 400,
    radius = Math.min(width, height) / 2,
    thickness = 50;
  // set sizes

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
  // set slice colors

var dataPath = "data/pieData.json"
  // set path to data file

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - thickness);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.value; });

var svg = d3.select(pageTarget).append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//var data = JSONdata.slice();

d3.json(dataPath, function(error, json) {
  if (error) return console.warn(error);
  data = json;

  data.forEach(function(d) {
    d.value = +d.value;
  });

  var g = svg.selectAll(".pie_slice")
      .data(pie(data))
    .enter().append("g")
      .attr("class", "pie_slice");

  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.label); });

  g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
      .attr("dy", ".35em")
      .attr("class", "pie_slice_label")
      .style("text-anchor", "middle")
      .text(function(d) { return d.data.label; });
});    
/* -- end pie/donut chart -- */