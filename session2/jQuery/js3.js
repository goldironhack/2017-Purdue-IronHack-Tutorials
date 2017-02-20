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
	console.log(result.results);
	var chi = $("<table></table>");
	chi.append('<tr><th>ID</th><th>MarketName</th></tr>');
	for(var i = 0; i < result.results.length; ++i){
		chi.append('<tr><td>' + result.results[i].id + '</td><td>' + result.results[i].marketname + '</td></tr>');
	}
//	for(var x in result.results){
//		chi.append('<tr><td>' + result.results[x].id + '</td><td>' + result.results[x].marketname + '</td></tr>');
//	}
	$('body').append(chi);
}