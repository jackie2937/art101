/*
 * Author: Jackie and Aidan
 * created mon. 24th
 * License: Public Domain
*/


//define function
function getUserName(userName){
  //get user input, removed for bonus challenge
	//var userName = window.prompt("hi");
	//removes spaces from inputed username
  userName = userName.replace(/\s+/g, '');
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

//link to <div id="output">output</div>
var outputEl = document.getElementById('output');
var newEl = document.getElementById("my-button");
var inputEl = document.getElementById("user-name");
var paragraphEl = document.createElement("p");
function pressButton(){
	paragraphEl.innerHTML = inputEl.value;
	alert("Thx");
	outputEl.appendChild(paragraphEl);
}
newEl.addEventListener("click", pressButton);
