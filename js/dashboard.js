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