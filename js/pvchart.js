function drawBar(containerId, dataPath, chartOptions) {
      d3.json(dataPath, function(data) {
        //console.log(data[0].title);
        
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
          chart.margin(chartOptions.margins);

          chart.yAxis.tickFormat(d3.format(',f'));    
          chart.options(chartOptions);    

          //d3.select(containerId +' svg')
          var svg = d3.select(containerId).append('svg')
            .datum(data)
            .call(chart);

          svg.append('text')
              .attr('x', 100)
              .attr('y', chartOptions.margins.top -5)
              .attr('text-anchor', 'beginning')
              .attr('class', 'chart-title')
              .text(data[0].title);
              //.text('The Title of The Chart Goes Here');

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
    style: 'discrete',
    margins: {top:30, bottom:75}
},
  opt2 = {
   // xAxis.rotateLabels(-45)
   tooltips: true,
   showControls: false,
   style : 'multi',
   margins: {top:30, bottom:75}
};  

//drawBar('#chart1', 'data/pv.json', opt1);
drawBar('#chart2', 'data/pv.json', opt2);
  