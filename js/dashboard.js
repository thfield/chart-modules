/* --- demographics bar chart --- 
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 400 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

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
      .ticks(10, "users");

  var svg = d3.select("#users-demographics").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.csv("data/demographics.csv", type, function(error, data) {
    x.domain(data.map(function(d) { return d.age; }));
    y.domain([0, d3.max(data, function(d) { return d.total; })]);

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
        .text("total");

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", function(d) { return "bar ages" + d.age; })
        .attr("x", function(d) { return x(d.age); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.total); })
        .attr("height", function(d) { return height - y(d.total); });

  });

  function type(d) {
    d.total = +d.total;
    return d;
  }
/* --- end demographics bar chart --- */

/* --- donut chart --- */
    
  var width = 960,
      height = 500,
      radius = Math.min(width, height) / 2;

  var color = d3.scale.ordinal()
      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var arc = d3.svg.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 70);

  var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) { return d.population; });

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  d3.csv("data.csv", function(error, data) {
    var genders = d3.keys(data[0]).filter(function(key) { return key !== "ages" || key !== "total"; });

    data.forEach(function(d) {
      d.genderGroup = genders.map(function(name) { return {name: name, value: +d[name]}; });
    });

    var g = svg.selectAll(".arc")
        .data(pie((function(d) { return d.ages; })))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.name); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function(d) { return d.name; });

  });
    
/* -- end donut chart -- */