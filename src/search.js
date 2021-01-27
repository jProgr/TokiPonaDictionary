/**
 * Handles the visibility of a set of DOM elements
 * according to a search query.
 */
export class ElementSearcher {
  /**
   * Creates an ElementSearcher.
   *
   * @param {HTMLElement} node - Container for search results.
   * @param {iterable} nodes - A bunch of HTMLElement.
   */
  constructor(exactResults, nodes) {
    this._words = [];
    this._exactResults = exactResults;
    for (let node of nodes) {
      let word = {
        node: node,
        fragments: this._getTextNodesRecursively(node),
      };
      this._words.push(word);
    }
  }


  /**
   * Performs a search in the text nodes of this._words by
   * showing or hiding the elements and displaying
   * highlighted copies of whole word matches at the top.
   *
   * @param {string} query
   * @return {undefined}
   */
  search(query) {
    if (!query) {
      this.showAll();
      return;
    }
    this._exactResults.innerHTML = "";

    for (let word of this._words) {
      if (word.fragments.has(query)) {
        this._showElement(word.node);
        let node = word.node.cloneNode(true);
        node.classList.add("exact-match");
        this._exactResults.insertBefore(node, this._exactResults.childNodes[-1]);
      } else  {
        let match = false;
        word.node.classList.remove("exact-match");
        for (let f of word.fragments) {
          if (f.includes(query)) {
            this._showElement(word.node);
            match = true;
            break;
          }
        }
        if (!match) {
          this._hideElement(word.node);
        }
      }
    }
  }

  /**
   * Marks all of the nodes as visible and resets exact match results.
   *
   * @return {undefined}
   */
  showAll() {
    this._exactResults.innerHTML = "";

    for (let word of this._words) {
      word.node.classList.remove("exact-match");
      this._showElement(word.node);
    }
  }

  /**
   * Marks element as visible.
   *
   * @param {HTMLElement} element
   * @return {undefined}
   */
  _showElement(element) {
    element.style.display = 'flex';
  }

  /**
   * Marks element as invisible.
   *
   * @param {HTMLElement} element
   * @return {undefined}
   */
  _hideElement(element) {
    element.style.display = 'none';
  }

  /**
   * Extracts the text node of element if any.
   *
   * @param {HTMLElement} element
   * @return {string} May be an empty string.
   */
  _getTextNode(element) {
    for (const node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) return node.nodeValue.toLowerCase();
    }

    return '';
  }

  /**
   * Extracts the text node of element and of any of its descendants.
   *
   * @param {HTMLElement} element
   * @param {Set} [textNodes] - Holds the strings of the text nodes already found.
   * @return {Set} Set of strings that the element and its descendants have as text
   * nodes in no particular order.
   */
  _getTextNodesRecursively(element, textNodes = new Set()) {
    let text = this._getTextNode(element);
    text.split(/\W+/).forEach(textNodes.add, textNodes);

    if (element.hasChildNodes()) {
      for (const node of element.childNodes) this._getTextNodesRecursively(node, textNodes)
    }

    return textNodes;
  }
}
