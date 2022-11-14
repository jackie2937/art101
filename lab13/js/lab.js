/*
 * Author: Jackie and Aidan
 * created wed. Nov 14th
 * License: Public Domain
*/
var max = 200;
function FizzBuzz(){
  var output = $("#output");
  var lines = [];
  var outputString = "";
	var div = max;
	for(var i = 1; i <= 6;i++){
		if(max%i == 0){
			div = i;
		}
	}
	var mod = max/div;
	for (var trees = 0; trees <= mod + 1; trees++) {
		lines[trees] = "";
	}
  for (var trees = 1; trees <= max; trees++) {
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
var textBox = $("#input");
function setMax(){
	max = textBox.val();
	FizzBuzz();
}
var button = $("#button");
button.click(setMax);
