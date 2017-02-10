$(document).ready(function(){

	$("#id_btn1").click(function(){
		alert("hello world: select by id");
	});

	$("button").click(function(){
		alert("HELLO WORLD: select by type");
	});

	$("#id_btn3").click(function(){
		alert($("#id_a").text());
	});

	$("#id_btn4").click(function(){
		$("#id_a").text("LINK");
	});

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