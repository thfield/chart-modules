
function drawChart(containerId, dataPath, chartOptions) {
  d3.json(dataPath, function(data) {
    //console.log(data);
    
    nv.addGraph(function() {
      if (chartOptions.style = 'discrete'){
        var chart = nv.models.discreteBarChart();  
      } else {
        var chart = nv.models.multiBarChart();
      }
      
      chart  
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        ;

      chart.xAxis.rotateLabels(-45);
      // http://stackoverflow.com/questions/13136964/how-can-i-position-rotated-x-axis-labels-on-column-chart-using-nvd3
/*
      var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
      xTicks
        .selectAll('text')
        .style("text-anchor", "end")
        .attr('transform', function(d,i,j) { return 'translate (-5, 0) rotate(-45 0,0)' }) ;
*/
      chart.margin({bottom:75});

      chart.yAxis.tickFormat(d3.format(',f'));    
      chart.options(chartOptions);    

      d3.select(containerId + ' svg')
          .datum(data)
          .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    }); 
  });
}

var opt1 = {
    color: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
    staggerLabels: true,
    tooltips: true,
    showValues: true,
    valueFormat: d3.format(',f'),
    style: 'discrete'
},
  opt2 = {
   // xAxis.rotateLabels(-45)
   tooltips: true,
   showControls: false,
   style : 'multi'
};  

drawChart('#chart1', 'data/pv.json', opt1);
drawChart('#chart2', 'data/pv.json', opt2);
  