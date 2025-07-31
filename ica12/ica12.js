// select the new quote button
const newQuoteButton = document.querySelector('#js-new-quote');
const quoteText = document.querySelector('#js-quote-text');
const answerText = document.querySelector('#js-answer-text');

// add event listener
newQuoteButton.addEventListener('click', getQuote);

// API endpoint
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// function to fetch and display quote
async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    displayQuote(json);
  } catch (err) {
    console.log(err);
    alert('Failed to fetch quote. Please try again later.');
  }
}

// display the quote in the page
function displayQuote(data) {
  quoteText.textContent = data.question;
  answerText.textContent = ""; // clear answer
}

// show the answer when the "Show me the answer!" button is clicked
document.querySelector('#js-tweet').addEventListener('click', () => {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      answerText.textContent = data.answer;
    })
    .catch(err => {
      console.log(err);
      alert('Failed to load the answer.');
    });
});

// load a quote on page load
getQuote();
