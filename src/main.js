import './styles/animations.css';
import './styles/main.css';
import {ElementSearcher} from './search';

const wordElements = document.querySelectorAll('div[class=entry]');
const exactResults = document.querySelector('div[id=exact-results]');
const searcher = new ElementSearcher(exactResults, wordElements);

const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup', () => {
  const query = searchElement.value.trim().toLowerCase();
  searcher.search(query);
});
