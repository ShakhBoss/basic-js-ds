const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Simple Binary Search Tree
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null; // daraxt ildizi shu yerda
  }

  // ildizni qaytaradi (Node yoki null)
  root() {
    return this.rootNode;
  }

  // daraxtga yangi qiymat qo'shish
  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data === current.data) {
        // dublikatlarni qo‘shmaymiz
        return;
      } else if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // qiymat mavjudligini tekshirish
  has(data) {
    return this.find(data) !== null;
  }

  // qiymatga ega node'ni qaytaradi yoki null
  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  // qiymatni o'chirish
  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // topildi: node.data === data

      // 1) farzandsiz
      if (!node.left && !node.right) return null;

      // 2) bitta farzand
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // 3) ikki farzand: o‘ng kichik daraxtning minimumini topamiz (successor)
      let succ = node.right;
      while (succ.left) succ = succ.left;

      node.data = succ.data; // qiymatni successor bilan almashtiramiz
      node.right = this._removeNode(node.right, succ.data); // successorni o‘chirib yuboramiz
      return node;
    }
  }

  // eng kichik qiymat (yoki null)
  min() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.left) current = current.left;
    return current.data;
  }

  // eng katta qiymat (yoki null)
  max() {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current.right) current = current.right;
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};