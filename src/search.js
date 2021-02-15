/**
 * Handles the visibility of a set of DOM elements
 * according to a search query.
 */
export class ElementSearcher {
  /**
   * Creates an ElementSearcher.
   *
   * @param {iterable} nodes - A bunch of HTMLElement.
   */
  constructor(nodes) {
    this._nodes = new Map();
    let i = 0;
    for (const node of nodes) {
      this._nodes.set(i, node);
      i++;
    }

    this._boot();
  }

  /**
   * Does some extra work to initialize the object.
   *
   * @return {undefined}
   */
  _boot() {
    this._textNodes = new Map();
    this._nodes.forEach((node, id) => {
      this._textNodes.set(
        id,
        this._getTextNodesRecursively(node)
      );
    });
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

    this._nodes.forEach((element, id) => {
      if (this._textNodes.get(id).has(query)) { this._showElement(element); }
      else { this._hideElement(element); }
    });
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
      this._getTextNode(element)
        .split(/\W+/)
        .forEach(textNodes.add, textNodes);

    if (element.hasChildNodes()) {
      for (const node of element.childNodes) this._getTextNodesRecursively(node, textNodes)
    }

    return textNodes;
  }
}
