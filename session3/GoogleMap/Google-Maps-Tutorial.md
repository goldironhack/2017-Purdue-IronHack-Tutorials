# Google Maps Tutorial    

    
This tutorial shows you how to add a simple Google map to a web page. We'll create a map marking the location of Purdue University. For an advanced guide to creating maps, read the [Google Maps Javascript API developer's guide](https://developers.google.com/maps/documentation/javascript/tutorial).
  
  
### 1. Create an HTML page

   Create a html containing simple with a `div` element for holding the map. We give the element's id attribute a value of `map`. We also specify width, height and background color for `#map` element.

```html
<!DOCTYPE html>
<html>
  <head>
  	<title>Google Maps Demo</title>
    <style>
      #map {
        width: 100%;
        height: 400px;
        background-color: grey;
      }
    </style>
  </head>
  <body>
    <h3>Google Maps Demo</h3>
    <div id="map"></div>
  </body>
</html>
```

### 2. Get an API key

   Follow these steps to get an API key
   1. Go to the [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&keyType=CLIENT_SIDE&reusekey=true).
   2. Create or select a project.
   3. Click continue to enable the API and any related services.
   4. On the Credentials page, get a Browser key.
   5. Save the API key you get in a browser window. We would call it **_YOUR_API_KEY_** for rest of the tutorial

### 3. Load Google Maps Scripts

To load google maps in your webpage, include the following script tag in your webpage.

```html
<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
```
Replace **YOUR_API_KEY** with the key obtained in step 2.


### 4. Link javascript with HTML to show the map

So far we loaded the javascript required for google maps and prepared HTML containing a `div` element to show the map.
To actually show the map, we need to define the `initMap` javascript function which is called after the script is loaded.
This function name is part of the script URL in step 3. Here is how we show the map in the `initMap` function

```html
<script type="text/javascript">
	function initMap(){
		var mapDiv = document.getElementById('map'); //Line 1: Save reference to div element where map would be shown
		var map = new google.maps.Map(mapDiv, {//Line 2: Create Map object passing element reference, center and zoom as parameters
			center: {lat: 40.4237, lng: -86.9212}, //This is Purdue University's Location
			zoom: 12});
	}
</script>
```

In the javascript function `initmap`, in line 1, we store reference to the HTML `div` element where the map will be displayed.  
In line 2, we create the Map object provided by Google Maps API. The constructor of this object takes two parameters:  
+	The reference to HTML element where the map is to be displayed  
+	A Javascript object reference specifying various properties like center of the map, background color, initial zoom level and [so on](https://developers.google.com/maps/documentation/javascript/reference#MapOptions)  

### 5. Add a marker to point at Purdue University's Location

Now that we have created a map and displayed it, let's highlight Purdue University's location on the map. Highlighting is achieved through `Marker` object in Google Maps API. Let's add some code to the `initMap` function to show the marker, making it look like:

```html
<script type="text/javascript">
	function initMap(){
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 40.4237, lng: -86.9212},
			zoom: 12});
		var marker = new google.maps.Marker({ //Line 1
			position: {lat: 40.4237, lng: -86.9212}, //Line2: Location to be highlighted
			map: map,//Line 3: Reference to map object
			title: 'Purdue University' //Line 4: Title to be given
		})
	}
</script>
```
We explain the newly introduced code:  
+ Line 1: Create the Marker object, passing the following three arguments to the constructor  
+ Line 2: The first argument is the position of the location to be highlighted, this is same as the location we used in constructing the Map object.  
+ Line 3: The second argument is the map object reference on which the marker is to be shown  
+ Line 4: The third argument is the title to be shown on hovering over the marked location  

### 6. Putting it all together

The final code file looks like below:
```html
<!DOCTYPE html>
<html>
  <head>
  	<title>Google Maps Demo</title>
    <style>
      #map {
        width: 100%;
        height: 400px;
        background-color: grey;
      }
    </style>
    <script type="text/javascript">
	function initMap(){
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 40.4237, lng: -86.9212},
			zoom: 12});
		var marker = new google.maps.Marker({ //Line 1
			position: {lat: 40.4237, lng: -86.9212}, //Line2: Location to be highlighted
			map: map,//Line 3: Reference to map object
			title: 'Purdue University' //Line 4: Title to be given
		})
	}
	</script>
  </head>
  <body>
    <h3>Google Maps Demo</h3>
    <div id="map"></div>
  </body>
  <script async defer
	src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
</html>
```

Here is the code in action: [Google Maps Demo](https://rawgit.com/goldironhack/2017-Purdue-IronHack-Tutorials/master/session3/GoogleMap/Google-Maps-Demo.html) 
