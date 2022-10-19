/*
 * Author: Jackie and Aidan
 * created wed. 19
 * License: Public Domain
*/

// Define variables

var myTransport = ["car", "bus", "bike", "feet", "scooter"];

var myMainRide = {
	make: "prius",
	model: "insight",
	color: "pink",
	year: 2022,
	age: 0,
	ownIt: "true"
};

document.writeln("Transportation around Santa Cruz: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
