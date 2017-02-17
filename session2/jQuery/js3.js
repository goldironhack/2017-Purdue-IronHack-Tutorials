$(document).ready(function(){

	$("#id_btn5").click(function(){
		$.ajax({
			type:"GET",
			url: "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=47906",
			dataType: 'jsonp',
			jsonpCallback: 'resultsHandler'
		});
	});
});

function resultsHandler(result){
	console.log(result);
}