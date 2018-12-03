/* 
  Project 1 - Random Quote Generator
  Jeffrey J. Block
*/


// Array of Random Quotes 
var quotes = [
  {
    quote: "Modesty is my best quality.",
    source: "Jack Benny", 
    tag: "(Humor)",
  },
  {
    quote: "The expert in anything was once a beginner.",
    source: "Anonymous",
    tag: "(Motivational)",
  },  
  {
    quote: "Okay, I'm shouting! I'm shouting! I'm shouting! I'm shouting!",
    source: "Wadsworth",
    citation: "Clue",
    year: 1985,
    tag: "(Film)",
  },
  {
    quote: "Beauty will save the world.",
    source: "Fyodor Dostoevsky",
    citation: "The Idiot",
    year: 1869,
    tag: "(Literature)",
  },
  {
    quote: "Bad cannot succeed even in being bad as truly as good is good.",
    source: "The Teacher",
    citation: "The Great Divorce",
    year: 1946,
    tag: "(Literature)",
  },
  {
    quote: "All animals are equal, but some animals are more equal than others.",
    source: "George Orwell",
    citation: "Animal Farm",
    year: 1945,
    tag: "(Literature)",
  },
  {
    quote: "One good thing about music: when it hits you, you feel no pain.",
    source: "Bob Marley",
    tag: "(Arts/Music)"
  }
];


// Generates random number to select random quote from array 
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


// Writes string to the DOM
function printQuote() {
  var generateQuote = getRandomQuote(quotes);
  var stringOfQuoteProperties = '<p class="quote">' + generateQuote.quote + '</p>';
  stringOfQuoteProperties += '<p class="source">' + generateQuote.source;

    // Conditional ensuring the citation and year are printed if existant in object
    if (generateQuote.citation !== undefined || generateQuote.year !== undefined) {
    stringOfQuoteProperties += '<span class="citation">' + generateQuote.citation + '</span>';
    stringOfQuoteProperties += '<span class="year">' + generateQuote.year + '</span>';
    } 

  // Concats the tag property for all quotes
  // Adds closing </p> tag
  stringOfQuoteProperties += '<span class="tag">' + generateQuote.tag + '</span> </p>';
    
  // Prints string of quote properties 
  document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
};


// Runs printQuote() function on initial page load
printQuote();


// Sets event listener to enable button to load new quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
