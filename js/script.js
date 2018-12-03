/* 
  Project 1 - Random Quote Generator
  Jeffrey J. Block
*/

/* BEGIN LISTING OF ARRAYS ---------------------------------------------------- */

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


// Array of seven background colors
var backgroundColor = [
  '#4858AB', // Darker blue
  '#A13225', // Red
  '#E38C35', // Orange
  '#EB8E5C', // Peach
  '#8C9990', // Gray
  '#006126', // Dark Green
  '#61235F'  // Dark Purple 
];

/* END OF ARRAY LISTINGS ----------------------------------------------------- */





/* BEGIN QUOTE SELECTION AND DISPLAY FUNCTIONS ------------------------------- */

// Generates random number to select random quote from 'quotes' array 
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

// Sets interval so quote automatically changes every 20 seconds
var changeQuote = setInterval(printQuote, 20000);

// String concatenation
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
// Runs function on initial page load
printQuote();

/* END OF QUOTE SELECTION AND DISPLAY FUNCTIONS -------------------------------*/





/* BEGIN BACKGROUND COLOR SELECTION FUNCTIONS ---------------------------------*/

// Generates random number to select random color from 'backgroundColor' array 
function getRandomColor(array) {
  var randomColor = Math.floor(Math.random() * backgroundColor.length);
  return backgroundColor[randomColor];
};
// Sets interval so background changes every 20 seconds
var changeColor = setInterval(setBackgroundColor, 20000);
// Runs background color change
function setBackgroundColor() {
  var generateColor = getRandomColor(backgroundColor);
  document.querySelector("body").style.background = generateColor;
}
// Runs function on initial page load
setBackgroundColor();

/* END OF BACKGROUND COLOR SELECTION FUNCTIONS --------------------------------*/





/* BEGIN BUTTON CLICK EVENT LISTENERS -----------------------------------------*/

// Sets click event listener to enable button to load new quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// Sets click event listener to enable button to load random background color
document.getElementById('loadQuote').addEventListener("click", setBackgroundColor, false);

/* END OF BUTTON CLICK EVENT LISTENERS ----------------------------------------*/
