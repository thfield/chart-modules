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

var JSONdata = [
    {
      "name":"<5",
      "value":2704659
    },
    {
      "name":"5-13",
      "value":4499890
    },
    {
      "name":"14-17",
      "value":2159981
    },
    {
      "name":"18-24",
      "value":3853788
    },
    {
      "name":"25-44",
      "value":14106543
    },
    {
      "name":"45-64",
      "value":8819342
    },
    {
      "name":"≥65",
      "value":612463
    }
  ]; 
  // set data

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

var data = JSONdata.slice();

data.forEach(function(d) {
  d.value = +d.value;
});

var g = svg.selectAll(".pie_slice")
    .data(pie(data))
  .enter().append("g")
    .attr("class", "pie_slice");

g.append("path")
    .attr("d", arc)
    .style("fill", function(d) { return color(d.data.name); });

g.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .attr("class", "pie_slice_label")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.name; });
    
/* -- end pie/donut chart -- */