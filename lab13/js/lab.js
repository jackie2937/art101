/*
 * Author: Jackie and Aidan
 * created wed. Nov 14th
 * License: Public Domain
*/
function FizzBuzz(){
  var output = $("#output");
  var lines = [];
  var outputString = "";
	var mod = 50;
	for (var trees = 0; trees <= mod + 1; trees++) {
		lines[trees] = "";
	}
  for (var trees = 1; trees <= 200; trees++) {
    var out = trees;
    if(out%3 == 0 || out%5 == 0 || out%7 == 0){
      out = "";
    }

		if(trees%3 == 0) {
    	out = "Fizz!";
    }

		if(trees%5 == 0) {
			out += "Buzz!";
		}

		if(trees%7 == 0) {
			out += "Boom!";
		}
		// if(out.length === 10){
		// 	out += "&nbsp&nbsp&nbsp&nbsp&nbsp";
		// }
		//if(out === trees){
			var add = "";
			var temp = "" + out + "";
			//console.log(temp);
			for(var i = 0; i < (18 - temp.length);i++){
				add += "&nbsp";
			}
			out = out + add;
		if(trees%mod === 0){
			lines[mod] += ("Trees in forest: " + out);
		} else{
			lines[trees%mod] += ("Trees in forest: " + out);
		}
	}
  for(var i = 0; i < lines.length; i++){
    lines[i] += "<br>";
  }
  for(var i = 0; i < lines.length; i++){
    outputString += lines[i];
  }
  output.html(outputString);
}
FizzBuzz();
