class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.val) return undefined;
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);

    const insertNode = (node) => {
      if (!node) {
        return newNode;
      }
      if (val < node.val) {
        node.left = insertNode(node.left)
      } else if (val > node.val) {
        node.right = insertNode(node.right)
      }
      // console.log(node);
      return node;
    }
    this.root = insertNode(this.root)
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    while (val !== currentNode.val) {
      if (val < currentNode.val) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }
        else return undefined;
      }
      else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        }
        else return undefined;
      }
    }
    return currentNode;
  }
  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findNode = (node) => {
      if (!node) {
        return undefined;
      }
      if (val < node.val) {
        return findNode(node.left)
      }
      else if (val > node.val) {
        return findNode(node.right)
      }
      else {
        return node;
      }
    }
    return findNode(this.root)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const finalArray = []
    const visitNodes = (node) => {
      if (!node) return;

      finalArray.push(node.val)

      visitNodes(node.left)
      visitNodes(node.right)
    }
    visitNodes(this.root)
    return finalArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const finalArray = []
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left);
      finalArray.push(node.val);
      // console.log(finalArray)
      traverse(node.right);
    }
    traverse(this.root)
    return finalArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let finalArray = []
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left)
      traverse(node.right)
      finalArray.push(node.val)
      // console.log(finalArray)
    }
    traverse(this.root)
    return finalArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let finalArray = [];
    //stack or queue?
    let stack = [];
    if (this.root) {
      stack.push(this.root)
    }
    while (stack.length > 0) {
      const node = stack.shift();
      finalArray.push(node.val)

      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    return finalArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
