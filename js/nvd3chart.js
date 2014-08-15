
//d3.json('data/nvd3data.json', function(data){
data =  [ 
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "A" ,
        "value" : 29.765957771107
      } , 
      { 
        "label" : "B" , 
        "value" : 0
      } , 
      { 
        "label" : "C" , 
        "value" : 32.807804682612
      } , 
      { 
        "label" : "D" , 
        "value" : 196.45946739256
      } , 
      { 
        "label" : "E" ,
        "value" : 0.19434030906893
      } , 
      { 
        "label" : "F" , 
        "value" : 98.079782601442
      } , 
      { 
        "label" : "G" , 
        "value" : 13.925743130903
      } , 
      { 
        "label" : "H" , 
        "value" : 5.1387322875705
      }
    ]
  }
]; /**/
  nv.addGraph(function() {  
    var chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .staggerLabels(true)
        //.staggerLabels(historicalBarChart[0].values.length > 8)
        .tooltips(false)
        .showValues(true)
        .transitionDuration(250)
        ;

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });

//});

/**/
/*
d3.json('data/stackedAreaData.json', function(data) {
  nv.addGraph(function() {
    var chart = nv.models.stackedAreaChart()
                  .margin({right: 100})
                  .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                  .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                  .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                  .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
                  .transitionDuration(500)
                  .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                  .clipEdge(true);

    //Format x-axis labels with custom function.
    chart.xAxis
        .tickFormat(function(d) { 
          return d3.time.format('%x')(new Date(d)) 
    });

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#chart svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });
})
/**/