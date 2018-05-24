/// ex07w1.js
function delay(ms){

	var ms1 = new Date().getTime();
	while(true){
		var ms2 = new Date().getTime();
		if((ms2-ms1)>=ms){
			break;
		}
	} 
}

console.log("Starting the work [ex07w2.js]");
for(var i=1; i<=20; i++){
	postMessage("Message from worker2");
	delay(500);
}

console.log("End of the work [ex07w2.js]");