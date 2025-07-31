const newQuoteButton = document.querySelector('#js-new-quote');
const quoteText = document.querySelector('#js-quote-text');
const quoteAuthor = document.querySelector('#js-quote-author');
const tweetButton = document.querySelector('#js-tweet');

const endpoint = 'https://api.quotable.io/random';
const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;

async function getQuote() {
  showLoading();
  try {
    const response = await fetch(proxyURL);
    if (!response.ok) throw Error(response.statusText);
    
    const data = await response.json();
    const quoteData = JSON.parse(data.contents);

    displayQuote(quoteData);
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
