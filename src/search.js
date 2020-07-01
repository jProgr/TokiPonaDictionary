function showElement(element) {
  element.style.display = 'flex';
}

function hideElement(element) {
  element.style.display = 'none';
}

function getTextNode(element) {
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
  }

  return '';
}

function getTextNodesRecursively(element, textNodes = new Set()) {
  textNodes.add(getTextNode(element));

  if (element.hasChildNodes()) {
    for (const node of element.childNodes) getTextNodesRecursively(node, textNodes)
  }

  return textNodes;
}

function hasQuery(query, element) {
  for (const definition of getTextNodesRecursively(element)) {
    if (definition.includes(query)) return true;
  }

  return false;
}

const wordElements = document.querySelectorAll('div[class=word]');

const searchElement = document.getElementById('search');
searchElement.addEventListener('keyup', _ => {
  const query = searchElement.value.trim().toLowerCase();

  if (!query) {
    wordElements.forEach(showElement);
    return;
  }

  for (const element of wordElements) {
    if (hasQuery(query, element)) { showElement(element); }
    else { hideElement(element); }
  }
});
