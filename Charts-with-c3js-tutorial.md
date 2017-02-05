# Charts With C3.js Tutorial     
    
    
We would go through the steps for displaying data in chart form using C3.js. C3.js is a D3-based reusable chart library. D3.js is a library for manipulating and displaying data in javascript as charts. D3.js has a bit of a learning curve and requires many lines of code for displaying a chart. c3.js is a library build on top of D3.js so that we can draw charts in easily. Let's get started for some visualization!

### 1. Setup c3.js and d3.js  
  

  Create a basic html web page and include c3.js and d3.js. Download c3.js source code [here](https://github.com/c3js/c3/archive/0.4.11.zip). Extract c3.css and c3.js files located in the zip folder to your project folder. Add references to these css and js files in your html page.Importantly, include d3.js in your html script since c3.js depends on d3.js internally. 

```html
<!DOCTYPE html>
<html>
  <head>
  	<title>Purdue Ironhacks Charts with C3.js Tutorial</title>
  	<link src="path/to/c3.css" rel="stylesheet" type="text/css">
  	<script src="https://d3js.org/d3.v3.js" charset="utf-8"></script>
	<script src="path/to/c3.js"></script>
  </head>
  <body>
    <h3>Purdue Ironhacks Charts with C3.js Tutorial</h3>    
  </body>
</html>
```

### 2. Generate Chart  
  

  C3 generates a chart by calling `generate()` with the argument object, and an element including the chart will insert into the element specified in that argument as `bindto`.

  Prepare the element to bind the chart:

  >```<div id="chart"></div>```

  And, call `generate()` with arguments:

  >```javascript
  >var chart = c3.generate({
  >		bindto: '#chart',
  > 	data: {
  >			columns: [
  >				['data1', 30, 200, 100, 400, 150, 250],
  >				['data2', 50, 20, 10, 40, 15, 25],
  >			],
  >			types:{
  >				data1: 'bar',
  >				data2: 'bar'	
  >			}
  >		}
  >});
  >```

  This will show us a bar chart as shown [here](https://rawgit.com/priyankjain/2016-Purdue-Ironhack-Tutorials/master/Charts-with-c3js-demo-1.html)

  
### 3. Show Axis Label  
  

  Show labels for each axis. Add `axis.x.label` and `axis.y.label` as follows:
  >```javascript
  >var chart = c3.generate({
  >		bindto: '#chart',
  > 	data: {
  >			columns: [
  >				['data1', 30, 200, 100, 400, 150, 250],
  >				['data2', 50, 20, 10, 40, 15, 25],
  >			],
  >			types:{
  >				data1: 'bar',
  >				data2: 'bar'	
  >			}
  >		},
  >		axis: {
  >			x: {
  >				label: {
  >					text: 'X Label', //Label of X axis
  >					position: 'outer-right' //Position of X axis label 
  >				}
  >			},
  >			y: {
  >				label: {
  >					text: 'Y Label', //Label of Y axis
  >					position: 'outer-middle' //Position of Y axis label
  >				}
  >			}
  >		}
  >});
  >```

  The chart now has labeled axis as shown [here](https://rawgit.com/priyankjain/2016-Purdue-Ironhack-Tutorials/master/Charts-with-c3js-demo-2.html)

### 4. Format Values  
  

  Let's say that our Y values correspond to amount in dollars, so we would like to format the values of each data. Add `axis.y.tick.format` as follows:
  >```javascript
  >var chart = c3.generate({
  >		bindto: '#chart',
  > 	data: {
  >			columns: [
  >				['data1', 30, 200, 100, 400, 150, 250],
  >				['data2', 50, 20, 10, 40, 15, 25],
  >			],
  >			types:{
  >				data1: 'bar',
  >				data2: 'bar'	
  >			}
  >		},
  >		axis: {
  >			x: {
  >				label: {
  >					text: 'X Label',
  >					position: 'outer-right'
  >				}
  >			},
  >			y: {
  >				label: {
  >					text: 'Y Label',
  >					position: 'outer-middle'
  >				},
  >				tick: {
  >					format: d3.format("$,") // Add formatting along Y-axes
  >				}
  >			}
  >		}
  >});
  >```

  Our final chart looks like [this](https://rawgit.com/priyankjain/2016-Purdue-Ironhack-Tutorials/master/Charts-with-c3js-demo-3.html).

### 5. Putting it all together  
  

  Our code finally looks like this:
```html
<!DOCTYPE html>
<html>
  <head>
  	<title>Purdue Ironhacks Charts with C3.js Tutorial</title>  	
	<link src="path/to/c3.css" rel="stylesheet" type="text/css">
  	<script src="https://d3js.org/d3.v3.js" charset="utf-8"></script>
	<script src="path/to/c3.js"></script>
  </head>
  <body>
    <h3>Purdue Ironhacks Charts with C3.js Tutorial</h3>    
    <div id="chart"></div>
	<script type="text/javascript">
		var chart = c3.generate({
			bindto: '#chart',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				],
				types:{
					data1: 'bar',
					data2: 'bar'
				}
			},
			axis: {
	   			x: {
	   				label: {
	   					text: 'X Label',
	   					position: 'outer-right'
	   				}	   				
	   			},
	   			y: {
	   				label: {
	   					text: 'Y Label',
	   					position: 'outer-middle'
	   				},
	   				tick: {
	   					format: d3.format("$,")
	   				}
	   			}
   			}
		});
	</script>    
  </body>
</html>
```

  And [here is the code in action](https://rawgit.com/priyankjain/2016-Purdue-Ironhack-Tutorials/master/Charts-with-c3js-demo-3.html)