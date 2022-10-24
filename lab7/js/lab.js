/*
 * Author: Jackie and Aidan
 * created mon. 24th
 * License: Public Domain
*/


//define function
function getUserName(){
  //get user input
	var userName = window.prompt("hi");
	//put user name in console
	console.log(userName);
	// split string to array
  var array = userName.split("");
	//sort array
  array.sort();
	//join array back to string
  output = array.join("");
	//return output
  return output;
};

//get user input
var a = getUserName();
//print function output
document.writeln("sorted username: ", a, "<br>");
