const customName = document.getElementById('customname');
const generateBtn = document.getElementById('generate');
const story = document.getElementById('story');

function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const characters = ['a Broadway actor', 'a lost tourist', 'a breakdancing grandma'];
const actions = ['started rapping on the subway', 'spilled coffee on a celebrity', 'got cast on a reality TV show'];
const endings = ['and the crowd was left speechless — in one way or another :)', 'and nobody could believe their eyes.', 'and TikTok went wild.'];

generateBtn.addEventListener('click', () => {
  const name = customName.value !== '' ? customName.value : 'Maeve';
  const character = randomValueFromArray(characters);
  const action = randomValueFromArray(actions);
  const ending = randomValueFromArray(endings);

  const fullStory = `It was a hot summer afternoon in NYC when ${name}, ${character}, suddenly ${action}. ${ending}`;

  story.textContent = fullStory;
});
