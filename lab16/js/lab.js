/*
 * Author: Jackie and Aidan
 * created wed. Nov 28th
 * License: Public Domain
*/
var comic = -1;
var Data;
var Start = true;
var max = 100;
function GetData(start){
     if(start){
          $.ajax({
              // The URL for the request (from the api docs)
              url: "https://xkcd.com/info.0.json",
              // Whether this is a POST or GET request
              type: "GET",
              // The type of data we expect back
              dataType : "json",
              // What do we do when the api call is successful
              //   all the action goes in here
              success: function(data) {
                  Data = data;
                  console.log(data);
                  Start = false;
                  comic = data.num;
                  max = data.num;
                  $("#pic").attr("src", Data.img);
              },
              // What we do if the api call fails
              error: function (jqXHR, textStatus, errorThrown) {
                  // do stuff
                  console.log("Error:", textStatus, errorThrown);
              }
         });

    } else {
         $.ajax({
            // The URL for the request (from the api docs)
            url: "https://xkcd.com/" + comic + "/info.0.json",
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType : "json",
            // What do we do when the api call is successful
            //   all the action goes in here
            success: function(data) {
                 Data = data;
                 console.log(data);
                 comic = data.num;
                 $("#pic").attr("src", data.img);
            },
            // What we do if the api call fails
            error: function (jqXHR, textStatus, errorThrown) {
                 // do stuff
                 console.log("Error:", textStatus, errorThrown);
            }
        });
    }
}

GetData(Start);
$("#last").click(function(){
     comic -= 1;
     if(comic < 0){
          comic = 0;
     }
     GetData(Start);
});
$("#next").click(function(){
     comic += 1;
     if(comic > max){
          comic = max;
     }
     GetData(Start);
});
