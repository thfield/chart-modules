function tooltipHtml(n, d){ 
  return "<h4>"+n+"</h4><table>"+
    "<tr><td>Voters</td><td>"+(d.value)+"</td></tr>"
    "</table>";
}


/* */
//d3.json('data/pvstates.json', function(data) {
d3.json('data/states.json', function(data) {
  
  var foo = d3.map(data);

  foo.keys().forEach(function(d){ 
      data[d].rank = foo.keys().indexOf(d)+1 ; // the 'data' json must be generated in sorted order for this line to work
      data[d].color = d3.interpolate("#f0f0f0", "#336600")(data[d].rank/foo.keys().length); 
  });
  

  //data[0].values.forEach(function(d){ 
  //      d.color=d3.interpolate("#ffffcc", "#800026")(d.rank/100); 
  //}); 
  
  /*for (var i = 0; i < data.length; i++) {
    data[i].rank = i;  
  };*/
  
  console.log(data);
  //console.log(sorted);
  //console.log(ranks);
  //console.log(data[0].values[0]);
  //console.log( foo.keys() );
  


  uStates.draw("#statesvg", data, tooltipHtml);
  
}); /**/

  






  /* original 

  function tooltipHtml(n, d){ // function to create html content string in tooltip div. 
    return "<h4>"+n+"</h4><table>"+
      "<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
      "<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
      "<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
      "</table>";
  }
  
  var sampleData ={}; // Sample random data.
  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
    .forEach(function(d){ 
      var low=Math.round(100*Math.random()), 
        mid=Math.round(100*Math.random()), 
        high=Math.round(100*Math.random());
      sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)}; 
    });
  console.log(sampleData);
  // draw states on id #statesvg
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  /**/