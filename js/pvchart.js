data =  [ 
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
    
    {
      
      "label": "Arkansas",
      "value": "12",
    },
    
    {
      
      "label": "California",
      "value": "54",
    },
    
    {
      
      "label": "Colorado",
      "value": "14",
    },
    
    {
      
      "label": "Connecticut",
      "value": "15",
    },
    
    {
      
      "label": "D.C.",
      "value": "26",
    },
    
    {
      
      "label": "Delaware",
      "value": "13",
    },
    
    {
      
      "label": "Florida",
      "value": "28",
    },
    
    {
      
      "label": "Georgia",
      "value": "12",
    },
    
    {
      
      "label": "Hawaii",
      "value": "11",
    },
    
    {
      
      "label": "Idaho",
      "value": "15",
    },
    
    {
      
      "label": "Illinois",
      "value": "40",
    },
    
    {
      
      "label": "Indiana",
      "value": "22",
    },
    
    {
      
      "label": "Iowa",
      "value": "13",
    },
    
    {
      
      "label": "Kansas",
      "value": "12",
    },
    
    {
      
      "label": "Kentucky",
      "value": "12",
    },
    
    {
      
      "label": "Louisiana",
      "value": "11",
    },
    
    {
      
      "label": "Maine",
      "value": "12",
    },
    
    {
      
      "label": "Maryland",
      "value": "15",
    },
    
    {
      
      "label": "Massachusetts",
      "value": "18",
    },
    
    {
      
      "label": "Michigan",
      "value": "18",
    },
    
    {
      
      "label": "Minnesota",
      "value": "20",
    },
    
    {
      
      "label": "Mississippi",
      "value": "11",
    },
    
    {
      
      "label": "Missouri",
      "value": "15",
    },
    
    {
      
      "label": "Montana",
      "value": "16",
    },
    
    {
      
      "label": "Nebraska",
      "value": "16",
    },
    
    {
      
      "label": "Nevada",
      "value": "15",
    },
    
    {
      
      "label": "New Hampshire",
      "value": "15",
    },
    
    {
      
      "label": "New Jersey",
      "value": "15",
    },
    
    {
      
      "label": "New Mexico",
      "value": "12",
    },
    
    {
      
      "label": "New York",
      "value": "166",
    },
    
    {
      
      "label": "North Carolina",
      "value": "43",
    },
    
    {
      
      "label": "North Dakota",
      "value": "13",
    },
    
    {
      
      "label": "Ohio",
      "value": "43",
    },
    
    {
      
      "label": "Oklahoma",
      "value": "13",
    },
    
    {
      
      "label": "Oregon",
      "value": "20",
    },
    
    {
      
      "label": "Pennsylvania",
      "value": "23",
    },
    
    {
      
      "label": "Puerto Rico",
      "value": "1",
    },
    
    {
      
      "label": "Rhode Island",
      "value": "11",
    },
    
    {
      
      "label": "South Carolina",
      "value": "14",
    },
    
    {
      
      "label": "South Dakota",
      "value": "11",
    },
    
    {
      
      "label": "Tennessee",
      "value": "17",
    },
    
    {
      
      "label": "Texas",
      "value": "64",
    },
    
    {
      
      "label": "The Virgin Islands",
      "value": "2",
    },
    
    {
      
      "label": "Utah",
      "value": "10",
    },
    
    {
      
      "label": "Vermont",
      "value": "11",
    },
    
    {
      
      "label": "Virginia",
      "value": "17",
    },
    
    {
      
      "label": "Washington",
      "value": "17",
    },
    
    {
      
      "label": "West Virginia",
      "value": "17",
    },
    
    {
      
      "label": "Wisconsin",
      "value": "15",
    },
    
    {
      
      "label": "Wyoming",
      "value": "13",
    }               
  ]
}
]; /**/

defaultChartConfig('#chart', {
  color: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
  staggerLabels: true,
  tooltips: true,
  showValues: true,
  valueFormat: d3.format(',f')
});


function defaultChartConfig(containerId, chartOptions) {
  nv.addGraph(function() {  
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
}