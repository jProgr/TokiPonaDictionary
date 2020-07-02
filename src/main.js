import './styles/animations.css';
import './styles/main.css';
import {ElementSearcher} from './search';

const wordElements = document.querySelectorAll('div[class=word]');
const searcher = new ElementSearcher(wordElements);

const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup', () => {
  const query = searchElement.value.trim().toLowerCase();
  searcher.search(query);
});
