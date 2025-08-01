const newQuoteButton = document.querySelector('#js-new-quote');
const quoteText = document.querySelector('#js-quote-text');
const quoteAuthor = document.querySelector('#js-quote-author');
const tweetButton = document.querySelector('#js-tweet');

const quotes = [
  { content: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { content: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { content: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" }
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteObj = quotes[randomIndex];
  displayQuote(quoteObj);
}

function displayQuote(quoteObj) {
  quoteText.textContent = `"${quoteObj.content}"`;
  quoteAuthor.textContent = `— ${quoteObj.author}`;
  tweetButton.setAttribute(
    'onclick',
    `window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quoteObj.content}" — ${quoteObj.author}`
    )}', '_blank')`
  );
}

newQuoteButton.addEventListener('click', getQuote);
getQuote(); // load one on page load
