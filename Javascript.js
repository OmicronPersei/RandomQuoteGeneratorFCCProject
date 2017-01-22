/*global $, jQuery, ResponsiveBootstrapToolkit*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, white: true  */

var getRandomNumber = function(maxVal) {
  "use strict";
  
  return Math.floor(Math.random() * (maxVal + 1));
};

var quotes = 
  ["We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
  "If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?",
  "If you wish to make an apple pie from scratch, you must first invent the universe.",
  "We've arranged a civilization in which most crucial elements profoundly depend on science and technology.",
  "Science is a way of thinking much more than it is a body of knowledge.",
  "Absence of evidence is not evidence of absence.",
  "A celibate clergy is an especially good idea, because it tends to suppress any hereditary propensity toward fanaticism.",
  "The universe is not required to be in perfect harmony with human ambition."];

var getRandomQuote = function(quoteArr) {
  "use strict";
  
  return quoteArr[getRandomNumber(quoteArr.length - 1)];
};

var setTextToRandomQuote = function() {
  "use strict";
  
  $("#quoteText").html(getRandomQuote(quotes));
};

$(document).ready(function() {
  "use strict";
  
  setTextToRandomQuote();
});