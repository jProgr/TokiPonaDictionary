import './styles/animations.css';
import './styles/main.css';
import {ElementSearcher} from './search';

var compounds = document.getElementsByClassName('compound');
const wordElements = document.querySelectorAll('div[class=word]');
const searcher = new ElementSearcher(wordElements);

function hideCompounds() {
    for (var i = 0; i < compounds.length; i++) {
      compounds[i].parentElement.classList.add("hidden");
    }
}

function showCompounds() {
    for (var i = 0; i < compounds.length; i++) {
      compounds[i].parentElement.classList.remove("hidden");
    }
}

hideCompounds();
const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup', () => {
  const query = searchElement.value.trim().toLowerCase();

  if (query.length == 0) {
    hideCompounds();
  } else {
    showCompounds();
  }

  searcher.search(query);
});
