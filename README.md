## Intro

JS Charting library for [PollVault.com](www.pollvault.com) analytics using [D3](d3js.org) and [NVD3](nvd3js.org)

Wherein attempts are made to keep charts reusable, store chart-specific labels in datafiles, and move all style to css stylesheets.

* pv.charts.js 
is the JS file containing **pv_drawX** methods

dependencies:
* d3.v3.js
* pv.nv.d3.js (slightly customized version of nv.d3.js)
* nv.d3.css

Drawing a chart requires 3 parts: the JS call, css definitions, and a json file containing the data.

for JS usually pass the **pv_drawX** method an object with options as key/value pairs:
`optionName: datatype, description`

for css include the listed classes/ids and sometimes stylesheet

the json file is passed to JS draw method in {options} (usually as `dataPath`).  In examples below `_variable_` denotes what changes in 



## Bar Chart
### JS
**pv_drawBar**(_opt_);  _opt_ is object with variables:
``` 
containerId: string, id for containing div
dataPath: string, path to json file with data
color: array, string of colors to draw bars (optional, preferred uses css .barcolor), ex: ["#336600"]
margins: object defining distance between chart and containing <svg>, ex: {top:30, bottom:75, left:0, right:0}
showControls: boolean, show or hide NVD3 controls, default false
rotateLabels: number, how much to rotate x-axis labels, +/- : cw/ccw
for more options see pv.nv.d3.js file
```

### CSS
```
#containerId { height: ____ ; width:  ____ ; }
#containerId .barcolor { fill: ______; }
```

### JSON
```
[{
	"title": "_Title Appears on the Chart_",
	"values" : [
		
		{
			"label": "_String_",
			"value": _number_
		},
		
		{
			"label": "_still a String_",
			"value": _number_
		}	              	
	]
}]
```



## Pie Chart
###JS
**pv_drawPie**(_opt_);  _opt_ is object with variables:

```
donut: boolean, true=donut, false=pie; default true
donutRatio: number 0-1, thickness of donut; default 0.4
containerId : string, id for containing div, do not include "#"
dataPath: string, path to json file with data
margins: object defining distance between chart and containing <svg>, ex: {top:30, bottom:75, left:0, right:0}
showLegend: boolean, show or hide NVD3 controls; default true
showLabels: boolean, show or hide pie labels; default true
donutLabelsOutside: boolean, labels in pie or outside; default false
labelType: string, options (key|value|percent); default percent
labelColors: array of strings, labels of data, corresponding to css classes 
for more options see pv.nv.d3.js file
```
###CSS
```
#containerId: { height: ___; width:  ___; }
#containerId .pie_labelColor1_ { fill: ______; }
#containerId .pie_labelColor2_ { fill: ______; } etc
```
###JSON
```
[    
  {
    "title": "_string_",
    "data":
      [
        { 
          "label": "_string_",
          "value" : _number_
        } , 
        { 
          "label": "_string_",
          "value" : _number_
        } 
      ]
  }
]
```

## Big Number
###JS
**pv_drawDatum**(_opt_);  _opt_ is object with variables:
```
containerId: string, id for containing div
dataPath: string, path to json file with data
```
###CSS
```
#containerId: { height: ___; width:  ___; }
.datum_fact & .datum_label { font-size: ___ ; font-family: ___ ; fill: ___ ; }
```
###JSON
```
{
  "title": "_appears on chart",
  "label": "_optional_",
  "value": _number_
}
```


## Line Chart
**pv_drawLine**(_opt_);  _opt_ is object with variables:
```
containerId: string, id for containing div
dataPath: string, path to json file with data
```
###CSS
```

```
###JSON



## Map Chart (currently states only)

* **default** chart: states are shaded in single color spectrum based on rank
* **quantum** chart: states are shaded by "group" so that states with similar values have same shade
* **multiColor** chart: states are shaded in single spectrum based on rank, but colored according to "category"

###JS
**pv_drawMap**(_opt_);  _opt_ is object with variables:
```
dataPath = string, path to json file with data
containerId = string, id of div containing map
ttId = string, id of div containing tooltip
quantum = boolean, true means states are shaded by groups, "quanta" based on their value, which are defined in json data
multiColor = boolean, true means states color will be chosen according to a "category", defined in json data
title = string, the title to appear at the top of the map
indVar = string, the 'independent variable' of the map, shows up in tooltip text as "indVar: ##" 
```


###CSS
see map.css file

###JSON
Lines marked with * are not required every time
```
{
	"data":{
			"_CA_": {
				"state": "_California_",
				"value": _2000_,
				"rank": _1_,
			*	"quantum": _1_,
			*	"category": "_category1_"
				},
			
			"_NY_": {
				"state": "_New York_",
				"value": _3000_,
				"rank": _2_
			*	"quantum": _2_,
			*	"category": "_category2_"
				},

			"_TX_": {
				"state": "_Texas_",
				"value": _4000_,
				"rank": _3_
			*	"quantum": _2_,
			*	"category": "_category2_"
				}
	},
	"metadata":{
		"categoryColor": [
			["default"],
		*	["_category1_"],
		*	["_category2_"]
		],
	*	"quanta": _2_
	}
}
```
