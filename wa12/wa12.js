const newQuoteButton = document.querySelector('#js-new-quote');
const quoteText = document.querySelector('#js-quote-text');
const quoteAuthor = document.querySelector('#js-quote-author');
const tweetButton = document.querySelector('#js-tweet');

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
  showLoading();
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    displayQuote(data);
  } catch (err) {
    console.error(err);
    alert('Failed to fetch quote.');
  }
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

function showLoading() {
  quoteText.textContent = 'Loading...';
  quoteAuthor.textContent = '';
}

newQuoteButton.addEventListener('click', getQuote);
getQuote();
