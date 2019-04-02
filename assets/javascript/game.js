// Wrap entire javascript codebase in this. ready()
$(document).ready(function() {

  // Create variables for games
  var wordBank = [
    "Florida State Seminoles",
    "Rutgers Scarlet Knights",
    "Texas Longhorns",
    "Ohio State Buckeyes",
    "Michigan Wolverines",
    "Oregon Ducks",
    "Florida Gators",
    "Miami Hurricanes",
    "Southern California Trojans",
    "Penn State Nittany Lions",
    "Georgia Bulldogs",
    "Clemson Tigers",
    "Notre Dame Fighting Irish",
    "North Carolina Tar Heels",
    "Duke Blue Devils",
    "Michigan State Spartans",
    "Washington Huskies",
    "Washington State Cougars",
    "UCLA Bruins",
    "Texas Tech Red Raiders",
    "Houston Cougars",
    "Utah Utes",
    "Virginia Tech Hokies",
    "Virginia Cavaliers",
    "West Virginia Mountaineers",
    "California Golden Bears",
    "Georgia Tech Yellow Jackets",
    "Alabama Crimson Tide",
    "Auburn Tigers",
    "Pittsburgh Panthers",
    "Kansas Jayhawks",
    "Colorado Buffaloes"
    "North Carolina State Wolfpack",
    "South Carolina Gamecocks"
  ];
  var wins = 0;
  var losses = 0;
  var pickedWord;
  var pickedWordPlaceholders = [];
  var guessesLeft = 10;
  var lettersGuessed = [];

  // Create variables to hold HTML references
  var $wins = $("#wins");
  var $losses = $("#losses");
  var $placeholders = $("#placeholders");
  var $guessesLeft = $("#guessesLeft");
  var $lettersGuessed = $("#lettersGuessed");
  var $newGameBtn = $("#newGame")

  function newGame() {
    // Reset all game variables
    guessesLeft = 10;
    lettersGuessed.length = 0;
    pickedWordPlaceholders.length = 0;

    // Pick a new word at random from wordBank
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Generate placeholders from picked word
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === " ") {
        pickedWordPlaceholders.push(" ");
      }
      else {
        pickedWordPlaceholders.push("_");
      };
    };

    // Write new values to the page to let user know a new game has started
    $lettersGuessed.text(lettersGuessed);
    $guessesLeft.text(guessesLeft);
    $placeholders.text(pickedWordPlaceholders.join); // NOT PRINTING TO PAGE
  };

  

// DON'T DELETE!!!
});