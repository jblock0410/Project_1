/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/



/* Array of Random Quotes */
var quotes = [
  {
    quote: "Modesty is my best quality.",
    source: "Jack Benny", 
  },
  {
    quote: "The expert in anything was once a beginner.",
    source: "Anonymous",
  },  
  {
    quote: "Okay, I'm shouting! I'm shouting! I'm shouting! I'm shouting!",
    source: "Wadsworth",
    citation: "Clue",
    year: 1985,
  },
  {
    quote: "Beauty will save the world.",
    source: "Fyodor Dostoevsky",
    citation: "The Idiot",
    year: 1869,
  },
  {
    quote: "Bad cannot succeed even in being bad as truly as good is good.",
    source: "The Teacher",
    citation: "The Great Divorce",
    year: 1946,
  },
  {
    quote: "All animals are equal, but some animals are more equal than others.",
    source: "George Orwell",
    citation: "Animal Farm",
    year: 1945,
  },
  {
    quote: "One good thing about music: when it hits you, you feel no pain.",
    source: "Bob Marley"
  }
];


/* Generates random number to select random quote from array */
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};



/***
  Create the `printQuote` function to: 

   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.

***/
function printQuote() {
  var generateQuote = getRandomQuote(quotes);
  var stringOfQuoteProperties = '<p class="quote">' + generateQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">' + generateQuote.source;

  if (generateQuote.citation !== undefined || generateQuote.year !== undefined) {
  stringOfQuoteProperties += '<span class="citation">' + generateQuote.citation + '</span>';
  stringOfQuoteProperties += '<span class="year">' + generateQuote.year + '</span>' + '</p>';
  } 
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
};

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.