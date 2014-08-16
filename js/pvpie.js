
  var testdata = [
    { 
      key: "One",
      y: 5
    },
    { 
      key: "Two",
      y: 2
    },
    { 
      key: "Three",
      y: 9
    },
    { 
      key: "Four",
      y: 7
    },
    { 
      key: "Five",
      y: 4
    },
    {
        key: "Six",
        y: 3
    }
  ];

/*
nv.addGraph(function() {
    var width = nv.utils.windowSize().width - 40,
        height = nv.utils.windowSize().height / 2 - 40;

    var chart = nv.models.pie()
        .values(function(d) { return d })
        .width(width)
        .height(height);

    d3.select("#test1")
        .datum([testdata])
      .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

    return chart;
});
*/

nv.addGraph(function() {
    var width = 200,
        height = 200;

    var chart = nv.models.pie()
        .values(function(d) { return d })
        .width(width)
        .height(height)
        .donut(true)
        //.tooltip(true)
        ;

    d3.select("#test2")
        .datum([testdata])
      .transition().duration(1200)
        .attr('width', width)
        .attr('height', height)
        .call(chart);

    return chart;
});
