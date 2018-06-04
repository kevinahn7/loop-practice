$(document).ready(function() {

  var items = [];
  $(".listForm").submit(function(event) {
    event.preventDefault();
    $(".listForm").hide();
    items.sort();
    if (items.length === 0) {
      alert("Enter some groceries");
    } else {
      for(i = 0; i < items.length; i++) {
        if (items[i] === "" || items[i] === " ") {
          continue;
        }
        $(".list").append("<li>" + items[i].toUpperCase() + "</li>")
      }
    };

  });

  $(".add").click(function(event) {
    event.preventDefault();
    items.push($("#field").val());
    $("#field").val("");

  });

  // Build a deck
  $("#showCards").click(function() {
    makeDeck();
    $("#output").toggle();
  });

  function makeDeck() {
    var types = ["clubs", "spades", "diamonds", "hearts"]
    var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    types.forEach(function(type) {
      ranks.forEach(function(rank) {
        $("#output").append("<li>" + rank + " of " + type + "</li>");
      });
    });
  };

  $("#findMatches").click(function(event) {
    event.preventDefault();
    var wordArray = $("#word").val().split(" ");
    var answer = wordArray.reduce(function(acc, curr) {
      if (typeof acc[curr] == "undefined") {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});;


    //console.log(answer);
    var theKey = (Object.keys(answer));
    var theValue = (Object.values(answer));
    for (x=0; x<theKey.length;x++) {
      if (theKey[x] == "") {
        continue;
      };
      $(".matchedWords").append(theKey[x] + ": " + theValue[x] + "<br />");
    };

  });




});
