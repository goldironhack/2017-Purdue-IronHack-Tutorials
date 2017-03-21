# Purdue Gold IronHacks Spring 2017

### Introduction   


This is a tutorial project for Ironhacks. *__Please note that the topic for this tutorial is not the same as the problem statement for your contest!__*

### Development Process

1. Explore the datasets

   Spend some time exploring what is the structure and how the datasets are organized in order to know the limits of the datasets.

   The first dataset is [Farmer’s market](http://catalog.data.gov/dataset/farmers-markets-2015)

   This dataset is in different formats. Taking a closer view to the dataset, observe that there are several columns with the following information about location, start and end time, website.

   The second dataset is [Open Weather data](http://openweathermap.org/current)

   A closer examination on this dataset tell us that it offers the following variables: temperature, humidity, pressure, wind, clouds, visibility, precipitation and weather.

2. Explore other datasets that could be combined with the enforced datasets and libraries

   Explore datasets from [Data.Gov](http://www.data.gov/) considering the possibilities of using visualization libraries or APIs as Google maps. 

3. Identify the solution to be implemented and their associated keywords

   Based on these specifications, we think of a solution that provides the position of the farmer’s, the current time to know if there is going to be a market or not (in case it is heavy rain, there is going to be no shops there). Moreover, we provide which farmer market is the best for the user based on fictitiously created data.
   Keywords: Farmer market, Rating, Chicago, Real-time, Position

   As a webpage, the solution will have a map on the left side with the location of the farmer’s market marked, and a description of these farmer’s market will be displayed on right when a particular market is clicked in the map.


4. Set up the GitHub

   Using the repository that we provide, connect to Github and upload README.md file with basic information as per instructions given [here](../readme_template/README.md):,

	> Problem addressed: What’s for dinner in Chicago?    
	> Author: Author Name (authorname@gmail.com)   
	> Description of the solution: We provide real-time data about which farm market is the best place to buy today based on your position (IP based) and the main features of each farm market.   
	> Keywords: Farmer market, Rating, Chicago, Real-time, Position  

5. Get familiar with external libraries and API
   
   Explore the documentation and some examples of external libraries to see how they should be implemented in the solution

6. Integrate the datasets in the solution

   Display the data from the different datasets in raw format to check that you have no problem accessing them. In some cases, you are might to need to process them in others not. This will vary entirely depending on the dataset.

   We show how to get [weather data](http://openweathermap.org/current) using Javascript.
   Use a xmlHttpRequest in your javascript to request data from the API.

	>```javascript
	>var xmlhttp = new XMLHttpRequest();
	>var url = "http://api.openweathermap.org/data/2.5/weather?q=chicago&appid=6aa0bdb1f586c5630d60b6237dfce45c";
	>xmlhttp.open("GET", url, true);
	>xmlhttp.send();
	>xmlhttp.onreadystatechange = function() {
	>if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	>var myArr = xmlhttp.responseText;
	>var text = myArr;
	>}
	>};
	>```


   We can find from the API description that this API will response in JSON. So we convert result data to JSON.
	>```javascript
	>var json = JSON.parse(text);
	>```

	   After we get the original json data, we process it for further usage:
	>```javascript
	>document.getElementById("weather").innerHTML = "Today the weather is <em><b>" + json.weather[0].main + "</b></em>";
	>```

   We then get the data for the location of each farm market from [http://catalog.data.gov/dataset/farmers-markets-2015](http://catalog.data.gov/dataset/farmers-markets-2015) and process it.

   After we get the markets data washed, we can develop some functions to analyze it and get scores for rating. In the tutorial case, we use Math.random method to fake rating scores. You should develop your own algorithm in this part:
	>```javascript
	>for (i = 0; i<9; i++) {
	>    array[i] = Math.random();
	>}
	>d = [
	>    [
	>        {axis:"Open hours",value:array[0]},
	>        {axis:"Availability",value:array[1]},
	>        {axis:"Freshness",value:array[2]},
	>        {axis:"Distance",value:array[3]},
	>        {axis:"Prices",value:array[4]},
	>        {axis:"Customer ratings",value:array[5]},
	>        {axis:"Personal preference",value:array[6]},
	>        {axis:"Other",value:array[7]},
	>        {axis:"service",value:array[8]}
	>    ]
	>];
	>```


7. Start implementing each item separately   


   Start implementing each piece of the solution that requires an external library or API separately, so there are no dependencies problems.

   We personalize the Google Maps to show the farmer markets  in the area (Google Map API)

   As for the Google Maps API, we should create map, marker, infoWindow as objects:
	>```javascript
	>map = new google.maps.Map(document.getElementById('map'), {
	>    center: {lat: 41.85081542, lng: -87.69123528},
	>    zoom: 12
	>});
	>//create a marker at the centre
	>marker = new google.maps.Marker({
	>    position: {lat: 41.85081542, lng: -87.69123528},
	>    map: map,
	>    title: 'Chicago'
	>});
	>
	>infowindow = new google.maps.InfoWindow({
	>                        content: ""
	>                    });
	>google.maps.event.addListener(marker, 'click', function() {
	>    infowindow.setContent("Chicago City");
	>                        infowindow.open(map, marker);
	>                    });
	>```

   Then we can add location data of different markets on the map:
	>```javascript
	>$.each(results, function(key, value) {
	>
	>    markers[key] = new google.maps.Marker({
	>        position: {lat: Number(washedData[key][0]), lng: Number(washedData[key][1])},
	>        map: map,
	>    });
	>    google.maps.event.addListener(markers[key], 'click', function() {
	>        //if another window is open, close it
	>        if( prev_infowindow ) {
	>            prev_infowindow.close();
	>        }
	>```

   Using the data for each farm market we display a radar chart (D3.js)
	>```javascript
	>mycfg = {
	>  w: w,
	>  h: h,
	>  maxValue: 0.6,
	>  levels: 6,
	>  ExtraWidthX: 200
	>}
	>
	>//Call function to draw the Radar chart
	>//Will expect that data is in %'s
	>RadarChart.draw("#chart", d, mycfg);
	>```

8. Integrate them together    


   Once all the items from your solution are running, the next step is to integrate them together.

   Add a listener for each mark on the map. When one is clicked, javascript `click` event would be triggered. In this click event, get the id of that mark and reset the information panel using that id:
	>```javascript
	>google.maps.event.addListener(markers[key], 'click', function() {
	>	document.getElementById("market-name").innerHTML = "<b>Market Name</b>: " + washedData[key][2] + "</em>";
	>	document.getElementById("street-name").innerHTML = "<b>Address</b>: <em>" + washedData[key][3] + "</em>";
	>	if(washedData[key][9])
	>	    document.getElementById("website").innerHTML = "<b>Website</b>: <em><a href=\"" + washedData[key][9] + "\">" + washedData[key][9] + "</a></em>";
	>	else
	>	    document.getElementById("website").innerHTML = "<b>Website</b>: <em>Not available</em>";
	>	document.getElementById("open-status").innerHTML = "<b>Market Status</b>: <em>" + contain(washedData[key][4], day()).capitalizeFirstLetter() + "</em>";
	>}
	>```    

    
9. Keep improving   


   Once the solution is completed, try to asses it with the parameters that were given and improve it as much as you can. Test it out with different test cases and on different browsers.

   You can find a working demo of this tutorial [here](http://rawgit.com/goldironhack/2017-Purdue-IronHack-Tutorials/master/sample_project/2017-Purdue-IronHacks-Tutorial-Project.html).
   Good luck!