

function drawPie(containerId, dataPath, chartOptions) {
  d3.json(dataPath, function(data) {
  //d3.json('data/dataPie.json', function(data) {
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .options(chartOptions)
          ;

        d3.select(containerId).append("svg")
        //d3.select("#chart3 svg")
            .datum(data)
            .transition().duration(350)
            .call(chart);

      return chart;
    });
  });
}



drawPie('#chart3', 'data/dataPie.json', {
    donut: true,      //Turn on Donut mode. Makes pie chart look tasty!
    donutRatio: 0.6,  //Configure how big you want the donut hole size to be.
    showLegend: true,   //Display legend
    showLabels: true,   //Display pie labels
    //labelThreshold:0.5, //Configure the minimum slice size for labels to show up
    labelType:"percent", //key|value|percent
    valueFormat: d3.format(',f'),
    color:['#99cc00','#C4110A','#99CCFF','#cccccc'], //green, red, blue, gray
});





chart.options(chartOptions);  