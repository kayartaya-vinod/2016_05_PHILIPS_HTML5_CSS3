// ex07.js

function delay(ms){

	var ms1 = new Date().getTime();
	while(true){
		var ms2 = new Date().getTime();
		if((ms2-ms1)>=ms){
			break;
		}
	} 
}

$(function(){

	$("#btnStartWork").click(function(){
		// load and execute a javascript file
		var workerFilename = $("#txtWorkerFilename").val();

		var w1 = new Worker("ex07w1.js");
		w1.onmessage = function(evt){
			// var msg = evt.data;
			var msg = arguments[0].data;
			$("#output").append(msg).append("<br>");
		};

		var w2 = new Worker("ex07w2.js");
		w2.onmessage = function(evt){
			// var msg = evt.data;
			var msg = arguments[0].data;
			$("#output").append(msg).append("<br>");
		};

		w1.onerror = function(){
			console.log("ERROR", arguments);
		};
		delay(3000);
		console.log("After a delay of 3s");
	});

});