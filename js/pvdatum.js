var opts= {
	width: 400,
    height: 40
};

datum("#fact", 'data/pvdatum.json', opts);



function datum(containerID, dataPath, chartOptions){
	d3.json(dataPath, function(data) {
	    //console.log(data);
	    //var fact = data.title;
	    //console.log(data.value);

	    data.value= numberWithCommas(data.value);

	    var svg=d3.select(containerID).append("svg")
	    		.attr("width", chartOptions.width)
	    		.attr("height", chartOptions.height)
	    		.append("g");

	    svg.append("text")      	
	      	.attr("class", "datum_label")
	       	.attr("x", chartOptions.width/2 + 10)
	      	.attr("y", chartOptions.height)
	      	//.attr("dy", height)
	      	.style("text-anchor", "beginning")
	      	.text(data.title);

	    svg.append("text")
	    	.attr("class", "datum_fact")
	    	.attr("x", chartOptions.width/2)
	      	.attr("y", chartOptions.height)
	      	.style("text-anchor", "end")
	    	.text(data.value);
	});
	
};

function numberWithCommas(x) {
	// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}