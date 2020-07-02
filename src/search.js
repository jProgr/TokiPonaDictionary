/**
 * Handles the visibility of a set of DOM elements
 * according to a search query.
 */
export class ElementSearcher {
  /**
   * Creates an ElementSearcher.
   *
   * @param {iterable} nodes - A bunch of DOM elements.
   */
  constructor(nodes) {
    this._nodes = nodes;
  }

  /**
   * Performs a search in the text nodes of this_nodes by
   * showing or hiding the elements.
   *
   * @param {string} query
   * @return {undefined}
   */
  search(query) {
    if (!query) {
      this.showAll();
      return;
    }

    for (const element of this._nodes) {
      if (this._hasQuery(query, element)) { this._showElement(element); }
      else { this._hideElement(element); }
    }
  }

  /**
   * Marks all of the nodes as visible.
   *
   * @return {undefined}
   */
  showAll() {
    this._nodes.forEach(this._showElement);
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
      if (node.nodeType === Node.TEXT_NODE) return node.nodeValue;
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
    textNodes.add(this._getTextNode(element));

    if (element.hasChildNodes()) {
      for (const node of element.childNodes) this._getTextNodesRecursively(node, textNodes)
    }

    return textNodes;
  }

  /**
   * Checks if element and any of its descendants have query as a substring in the
   * text nodes.
   *
   * @param {string} query
   * @param  {HTMLElement} element
   * @return {Boolean}
   */
  _hasQuery(query, element) {
    for (const definition of this._getTextNodesRecursively(element)) {
      if (definition.includes(query)) return true;
    }

    return false;
  }
}
