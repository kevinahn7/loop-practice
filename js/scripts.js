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
    $('#showCards').attr('disabled','disabled');
    $("#output").show();
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

/*
Word Order
Create a website that lets users input a block of text and returns a list of all the unique words and how many times they appeared.

For example, if the user inputs "hello world world", the page should show:

hello 1
world 2
If you finish, and feel comfortable with forEach() loops, try to complete the above exercise but instead order the list by the number of appearances - greatest to least. For words that appear the same amount of times, order by which word appeared first.

Hint (and sneak peek at next week): Try creating and playing with an object hash and its contents in the JavaScript console:
*/

// declare an object for each entry the user makes. Each word will get saved into a separate object and initialized with a value of 0. Use branching to find if word exists in an object.

  // function wordMatch() {
  //   var words = [];
  //   var matches = 0;
  //
  //   for(i = 0; i < 10; i++) {
  //     words[i] = {$("#word").val(), matches}
  //   }
  //
  //   words.forEach(function() {
  //
  //   });
  //
  // }

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
