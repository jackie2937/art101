/*
 * Author: Jackie and Aidan
 * created wed. Nov 21th
 * License: Public Domain
*/

var info = null;
var dificulty = 2;
function getData() {
     $.ajax({
          url: "https://jservice.io/api/random",
          data: {
               count: dificulty
          },
          type: "GET",
          dataType: "json",
          success: function(data) {
               info = data;
               //console.log(data);
               var out = $("#output");
               var qnum = Math.floor(Math.random()*dificulty);
               console.log(qnum);
               console.log(data[qnum]);
               var temptxt = "question: " + data[qnum].question + "";
               for(var i = 0; i < data.length;i++){
                    temptxt += "<br><button id=qustion_" + i + ">" + data[i].answer + "</button>"
               }
               out.html(temptxt);


               for(var i = 0; i < data.length;i++){
                    if(i === qnum){
                         $("#qustion_" + i).click(function(){
                              $("#output").html("question: " + data[qnum].question + "<br>" + "Correct! good job<br>dificulty: " + dificulty);
                              dificulty += 1;
                         });
                    } else{
                         $("#qustion_" + i).click(function(){
                              dificulty = 2;
                              $("#output").html("question: " + data[qnum].question + "<br>" + "Sorry, the answer was " + data[qnum].answer + ", please try again.<br>dificulty: " + dificulty);
                         });
                    }
               }
               //var temp = "question: " + data[0].question + "<br><br>answer: " + data[0].answer;
               //out.html(temp);
          },
          error: function (jqXHR, textStatus, errorThrown) {
              info = null;
              console.log("error");
              $("#output").html("ERROR");
          }
     });
}

var button=$("#activate");
button.click(getData);
getData();
