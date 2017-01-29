/*global $, jQuery, ResponsiveBootstrapToolkit*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, white: true  */

var quotes = 
  [{"quote": "We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.",
   "author": "Carl Sagan"},
   {"quote": "If we long to believe that the stars rise and set for us, that we are the reason there is a Universe, does science do us a disservice in deflating our conceits?",
   "author": "Carl Sagan"},
   {"quote": "If you wish to make an apple pie from scratch, you must first invent the universe.",
   "author": "Carl Sagan"},
   {"quote": "We've arranged a civilization in which most crucial elements profoundly depend on science and technology.",
   "author": "Carl Sagan"},
   {"quote": "Science is a way of thinking much more than it is a body of knowledge.",
   "author": "Carl Sagan"},
   {"quote": "Absence of evidence is not evidence of absence.",
   "author": "Carl Sagan"},
   {"quote": "A celibate clergy is an especially good idea, because it tends to suppress any hereditary propensity toward fanaticism.",
   "author": "Carl Sagan"},
   {"quote": "The universe is not required to be in perfect harmony with human ambition.",
   "author": "Carl Sagan"},
  {"quote": "Extinction is the rule. Survival is the exception",
   "author": "Carl Sagan"},
  {"quote": "Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.",
  "author": "Richard Feynman"},
  {"quote": "We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find progress.",
  "author": "Richard Feynman"},
  {"quote": "If you thought that science was certain - well, that is just an error on your part.",
  "author": "Richard Feynman"},
  {"quote": "You can know the name of a bird in all the languages of the world, but when you're finished, you'll know absolutely nothing whatever about the bird... So let's look at the bird and see what it's doing -- that's what counts.",
  "author": "Richard Feynman"},
  {"quote": "Tea. Earl Grey. Hot.",
  "author": "Captain Picard"}];


var quoteAuthorLinkDictionary = {
  "Carl Sagan": "https://en.wikipedia.org/w/index.php?title=Carl_Sagan",
  "Richard Feynman" :"https://en.wikipedia.org/w/index.php?title=Richard_Feynman",
  "Captain Picard": "https://en.wikipedia.org/wiki/Jean-Luc_Picard"
};

var quoteAuthor = "Carl Sagan";

var getRandomNumber = function(maxVal) {
  "use strict";
  
  return Math.floor(Math.random() * (maxVal + 1));
};

var getUniqueRandomNumber = function(maxVal, prevVal)
{
  "use strict";
  
  if (maxVal > 0)
    {
      var nextRandomNumber = prevVal;
      while (nextRandomNumber === prevVal)
        {
          nextRandomNumber = getRandomNumber(maxVal);
        }
      
      return nextRandomNumber;
    }
  else
    {
      return 0;
    }
};

var constructTweetUrlFromCurrentlySelectedQuote = function(quote, quoteAuthor) {
  "use strict";
  
  var webIntent = "https://twitter.com/intent/tweet";
  
  var tweetText = "\"" + quote + "\" -" + quoteAuthor;
  
  webIntent += "?text=" + encodeURI(tweetText);
  
  return webIntent;
};

var lastUsedIndex = -1; //Setting an initial value of -1 will ensure that the first quote can be selected as the first randomly selected quote.

var setRandomQuote = function() {
  "use strict";
  
  var quoteIndex = getUniqueRandomNumber((quotes.length - 1), lastUsedIndex);
  lastUsedIndex = quoteIndex;
  
  $("#quoteText").html(quotes[quoteIndex].quote);
  
  $("#quoteAuthor").html("-" + quotes[quoteIndex].author);
  
  var quoteAuthorLink = quoteAuthorLinkDictionary[quotes[quoteIndex].author];
  $("#quoteAuthor").attr("href", quoteAuthorLink);
  
  var webIntent = constructTweetUrlFromCurrentlySelectedQuote(quotes[quoteIndex].quote, quotes[quoteIndex].author);
  
  $("#tweetButtonLink").attr("href", webIntent);
};

$(document).ready(function() {
  "use strict";
  
  setRandomQuote();
});

$("#newQuoteButton").click(function (event) {
  "use strict";
  
  setRandomQuote();
});