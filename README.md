chart-modules
=============
JS Charting library for [PollVault.com](www.pollvault.com) analytics using [D3](d3js.org) and [NVD3](nvd3js.org)

Wherein attempts are made to keep charts reusable, store chart-specific labels in datafiles, and move all style to css stylesheets.

## Working methods

**pv_drawBar(opt)**

available options
```
opt.containerId : string, id for containing div
opt.dataPath: string, path to json file with data
opt.color: array, string of colors to draw bars (optional, preferred is css .barcolor), ex: ["#336600"]
opt.margins: object defining distance between chart and containing <svg>, ex: {top:30, bottom:75, left:0, right:0}
opt.showControls: boolean, show or hide NVD3 controls, default false
opt.rotateLabels: number, how much to rotate x-axis labels, +/- : cw/ccw
for more options see pv.nv.d3.js file
```
required css
```
#containerId { height: ____ ; width:  ____ ; }
#containerId .barcolor { fill: ______; }
```
  
**pv_drawPie(containerId, dataPath, opt)**

**pv_drawDatum(opt)**

available options
```
opt.containerId : id for containing div
opt.dataPath: path to json file with data
```
required css
```
#containerId: { height: ___; width:  ___; }
.datum_fact & .datum_label { font-size: ___ ; font-family: ___ ; fill: ___ ; }
```
**pv_drawline(opt)**

available options
```
opt.containerId : id for containing div
opt.dataPath: path to json file with data
```

**pv_drawMap(opt)**


available options
```
opt.dataPath = string, path to json file with data
opt.containerId = string, id of div containing map
opt.ttId = string, id of div containing tooltip
opt.quantum = boolean, true means states are shaded by groups, "quanta" based on their value, which are defined in json data
opt.multiColor = boolean, true means states color will be chosen according to a "category", defined in json data
opt.title = string, the title to appear at the top of the map
opt.indVar = string, the 'independent variable' of the map, shows up in tooltip text as "indVar: ##" 
```
required css
```
see map.css
```
