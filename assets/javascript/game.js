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
    "Colorado Buffaloes",
    "North Carolina State Wolfpack",
    "South Carolina Gamecocks"
  ];
  var wins = 0;
  var losses = 0;
  var pickedWord;
  var pickedWordPlaceholders = [];
  var guessesLeft = 10;
  var lettersGuessed = [];
  var gameRunning = false;

  // Create variables to hold HTML references
  var $wins = $("#wins");
  var $losses = $("#losses");
  var $placeholders = $("#placeholders");
  var $guessesLeft = $("#guesses-left");
  var $lettersGuessed = $("#letters-guessed");
  var $newGameBtn = $("#new-game");

  function newGame() {
    // Reset all game variables
    guessesLeft = 10;
    lettersGuessed.length = 0;
    pickedWordPlaceholders.length = 0;
    gameRunning = true;

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
    $placeholders.text(pickedWordPlaceholders.join(""));
  };
  
  // Run a function to see if the letter has been picked already
  function letterGuessed(letter) {
    // Check to see if letter has already been guessed
    if (lettersGuessed.includes(letter)) {
      alert(`You already guessed this letter!`);
      return false;
    };

    // Add guessed letter to lettersGuessed bank
    lettersGuessed.push(letter);
    $lettersGuessed.text(lettersGuessed.join(", "));

    // Check to see if letter pressed is in the picked word. If yes, replace placeholder with correct letter
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        pickedWordPlaceholders[i] = pickedWord[i];
      };
    };

    // Update placeholders on page
    $placeholders.text(pickedWordPlaceholders.join(""));

    // Check if letter guessed made it into our placeholders array. If not, decrement
    if (!pickedWordPlaceholders.join("").toLowerCase().includes(letter)) {
      guessesLeft--;
      $guessesLeft.text(guessesLeft);
    }

    // Check for a loss
    if (guessesLeft === 0) {
      losses++;
      $losses.text(losses);
      gameRunning = false;
    }

    // Check for a win
    if (pickedWordPlaceholders.join("").toLowerCase() === pickedWord.toLowerCase()) {
      wins++;
      $wins.text(wins);
      gameRunning = false;
    }

  };

  document.onkeyup = function(event) {
    // Only run if key pressed is a letter
    if (event.which >= 65 && event.which <= 90 && gameRunning) {
      letterGuessed(event.key);
    }
    else {
      alert(`You didn't press a letter.`);
    }
  };

  $newGameBtn.on("click", newGame);

// DON'T DELETE!!!
});