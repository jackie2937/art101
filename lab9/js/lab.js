/*
 * Author: Jackie and Aidan
 * created mon. 31th
 * License: Public Domain
*/

//uce getElementById() to get <div id="output">output</div>
var outputEl = document.getElementById("output");
//created new element and assigned to new1El
var new1El = document.createElement("p");
//Renamed new1El
new1El.innerHTML = "the first element's text";

//created new element #2 and assigned to new2El
var new2El = document.createElement("p");
//renamed new2El
new2El.innerHTML = "New Thing 2";

//appended new1El and new2El to Child
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//changing the colors of each box
var elements = document.getElementsByClassName("box1");
for(var i = 0; i < elements.length;i++){
elements[i].style.backgroundColor = "rgb(255, 192, 203)";
}
