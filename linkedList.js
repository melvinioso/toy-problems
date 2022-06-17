/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

LinkedList.prototype.addToTail = function(value) {
  // var newNode = this.makeNode(value);
  // var current;
  // this.tail = newNode;

  // if (!this.head) {
  //   this.head = newNode;
  // }

  // current = this.head;
  // while(current.next) {
  //   current = current.next;
  // }

  // current.next = newNode;
  var newNode = this.makeNode(value);
  var current;
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    return null;
  }

  var oldHead = this.head.value;
  this.head = this.head.next;
  this.tail = this.tail.next;

  return oldHead;
};

LinkedList.prototype.contains = function(value) {
  var node = this.head;

  while (node) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }

  return false;
};




var list = new LinkedList();
console.log(list.tail);         //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log(list.head.value);   //yields '4';
console.log(list.contains(5));  //yields 'true';
console.log(list.contains(6));  //yields 'false';
console.log(list.removeHead()); //yields '4';
console.log(list);
// console.log(list.tail.value);   //yields '5';
// console.log(list.removeHead()); //yields '5';
// console.log(list.removeHead()); //yields 'null';