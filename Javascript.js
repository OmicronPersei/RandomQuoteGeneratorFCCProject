/*global $, jQuery, ResponsiveBootstrapToolkit*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, white: true  */

var getRandomNumber = function(maxVal) {
  "use strict";
  
  return Math.floor(Math.random() * (maxVal + 1));
};

var quotes = 
  ["We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
  "If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?"];

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