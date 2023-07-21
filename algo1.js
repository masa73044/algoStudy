function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// adds node to end of list
LinkedList.prototype.push = function (value) {
  //create a New object instance from the function Node.
  const newNode = new Node(value);
  // set condition saying if the head is equal to null.
  if (this.head === null) {
    //create a New object instance from the function Node
    //point head to that new obj created
    this.head = newNode;
    this.tail = newNode;
    //store this.value to value
    console.log(this);
  } else {
    // point the tail to the end node
    this.tail.next = newNode;
    this.tail = newNode;
    //otherwise create the object instance
    //check previous node
    //set the next val to the new object instance created
    // point tail towards new obj created
    //store this.value to value
  }
};

// returns true if value is present in the list
LinkedList.prototype.contains = function (value) {
  let currentNode = this.head;
  //loop through the head to the tail
  while (this.head !== null) {
    //check if that value in the node were in is strictly equal to the value
    if (currentNode.value === value) {
      return true;
    }
    if (currentNode.next === null) {
      return false;
    }
    currentNode = currentNode.next;
    //if yes return true
    //otherwise return false
  }
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function (value) {
  // initialize a new object
  let newNode = new Node(value);

  // H
  // 1 -> 2 -> 3

  //      H
  // 8 -> 1 -> 2 -> 3

  // initialize the newNode to the head
  newNode.next = this.head;
  this.head = newNode;
  // this.head = value
  // this.head.next = previousHead
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function (value, position) {
  if (position === 1) {
    this.addToHead(value);
    return;
  }
  // head is position 1

  // 1 2 3  positions
  // 5 6 7  nodes

  // 1 position
  //  9 5 6 7

  // 2
  // 5 9 6 7  nodes

  // 9 new node

  let newNode = new Node(value);
  let counter = 1;

  let previous = this.head;

  traverse(this.head);

  function traverse(node) {
    let current = node;

    // 1 2 3 position
    // 5 6 7
    // p c

    if (current !== null) {
      if (counter === position) {
        previous.next = newNode;
        newNode.next = current;
        return;
      }
      previous = current;
      counter++;
      current = current.next;
      traverse(current);
    }
    return "invalid number";
    // previous.next = newNode;
    // this.tail = newNode;
  }
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function (value) {
  //if the head matches the value

  // 1 -> 2 -> 3
  // 1 -> null
  // this.head = 2

  if (this.head.value === value) {
    // console.log(`hit`);
    let nextNode = this.head.next;
    // delete this.head;
    this.head = nextNode;
    // this.tail = this.tail;
    return;
  }

  //store previous node in a variable to later compare
  let previousNode = this.head;
  traverse(this.head);
  //declare recursive function to traverse through the nodes.
  function traverse(node) {
    //if the node is strictly equal to the value
    if (node !== null) {
      if (node === value) {
        //remove the node by set previousNode to next node
        previousNode = node.next;
      }
      //otherwise reassign the previous
      previousNode = node;
      //invoke traverse again.
      traverse(node.next);
    }
  }
};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function (position) {};

var newList = new LinkedList();
console.log(newList.push(23));
console.log(newList.push(32));
console.log(newList.push(344));
// console.log(newList);
// expected => LinkedList {
//   head: Node { value: 23, next: Node { value: 32, next: [Node] } },
//   tail: Node { value: 344, next: null }
// }

// console.log(newList.contains(23)); //true
// console.log(newList.contains(32)); //true
// console.log(newList.contains(344)); //true
// console.log(newList.contains(44)); //false

console.log(newList.addToHead(2));
console.log(newList);
// expected output :
// LinkedList { head:
// Node { value: 2,
//     next:
//      Node { value: 23,
//        next: Node { value: 32, next: Node { value: 344, next: null } } } },
//  tail: Node { value: 344, next: null } }

console.log(newList.insert(9, 4));
console.log(newList);
// expected output:
// LinkedList { head:
//     Node { value: 2,
//       next:
//        Node { value: 23,
//          next:
//           Node { value: 32,
//             next: Node { value: 9, next: Node { value: 344, next: null } } } } },
//    tail: Node { value: 344, next: null } }

console.log(newList.removeItem(2));
console.log(newList);

// LinkedList { tail: Node { value: 344, next: null },
//   head:
//    Node { value: 23,
//      next:
//       Node { value: 32,
//         next: Node { value: 9, next: Node { value: 344, next: null } } } } }

console.log(newList.removeItem(9));
console.log(newList);

console.log(newList.removeItem(344));
console.log(newList.removeItem(444));
console.log(newList.removeItem(23));
console.log(newList.removeItem(32));
console.log(newList.removeItem(9));
console.log(newList.removeItem(344));

console.log(newList);

// traverse(newList.head);

// function traverse(node) {
//   if (node !== null) {
//     console.log(node.value);
//     traverse(node.next);
//   }
// }
