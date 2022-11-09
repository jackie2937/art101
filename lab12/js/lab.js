/*
 * Author: Jackie and Aidan
 * created wed. Nov 9th
 * License: Public Domain
*/
function sortingHat(str) {
	var length = str.length;
	var mod = length%4;
	if (mod==0) {
		return "Gryffindor";
	}
	else if (mod==1) {
		return "Ravenclaw";
	}
	else if (mod==2) {
		return "Slytherin";
	}
	else if (mod==3) {
		return "Hufflepuff";
	}
}

var button=$("#button");
button.click(function() {
  var input=$("#input");
	var name=input.val();x
	var house=sortingHat(name);
	var paragraphOutput=$("<p>The Sorting Hat has sorted you into " + house + "</p>");
	$("#output").append(paragraphOutput);
});

// Uncaught ReferenceError: x is not defined
   // at HTMLButtonElement.<anonymous> (lab.js:26:23)
   //  at HTMLButtonElement.dispatch (jquery-3.4.1.min.js:2:42571)
   // at v.handle (jquery-3.4.1.min.js:2:40572)
