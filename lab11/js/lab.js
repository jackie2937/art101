/*
 * Author: Jackie and Aidan
 * created wed. Nov 7th
 * License: Public Domain
*/
var resultsButton = $("<button>");
resultsButton.html("results");
$("#results").append("<br>");
$("#results").append(resultsButton);
resultsButton.click(function(){
  resultsButton.parent().toggleClass("special");
});

var challengesButton = $("<button>");
challengesButton.html("challenges");
$("#challenges").append("<br>");
$("#challenges").append(challengesButton);
challengesButton.click(function(){
  challengesButton.parent().toggleClass("special");
});

var problemsButton = $("<button>");
problemsButton.html("problems");
$("#problems").append("<br>");
$("#problems").append(problemsButton);
problemsButton.click(function(){
  problemsButton.parent().toggleClass("special");
});
