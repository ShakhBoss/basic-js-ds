const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;

  }

  root() {
    return this.rootNode;
  }
  add(/*data*/) {
    throw new NotImplementedError('Not implemented');

  }
  has(data) {
    // throw new NotImplementedError('Not implemented');
    return this.search(this.rootNode, data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    if(!this.root) 
    return null;
    return this.internalFind(this.root, data);
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    this.root = this.removeNode(this.root, data);
  }

  min(root) {
    throw new NotImplementedError('Not implemented');
    if (!root.left) {
      return root.value
    }
    else {
      return this.min(root.left);
    }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};