function drawChart(containerId, dataPath, chartOptions) {
  d3.json(dataPath, function(data) {
    //console.log(data);
    
    nv.addGraph(function() {  
      //var chart = nv.models.multiBarChart()
      var chart = nv.models.discreteBarChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          ;

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
  valueFormat: d3.format(',f')
};

drawChart('#chart', 'data/pv.json', opt1);






inData =  
[ 
  {
    "key": "Orgs in each State",
    "values" : [
      
      {
        "label": "Alabama",
        "value": "13",
      },
      
      {
        "label": "Alaska",
        "value": "14",
      },
      
      {
        "label": "Arizona",
        "value": "16",
      },               
    ]
  }
];











