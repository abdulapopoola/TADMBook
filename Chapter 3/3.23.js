/*
    QUESTION
    Implement an algorithm to reverse a linked list. Now do it without recursion.
*/

'use strict';
function reverse(node) {
    let prev = null;

    while (node) {
        let tmp = node.next;
        node.next = prev;
        prev = node;
        node = tmp;
    }

    return prev;
}

function reverseRecursive(node) {
    if(!node.next){
        return node;
    }
    
    let nextNode = node.next;
    delete node.next;
    let reversed = reverseRecursive(nextNode);
    reversed.next = node;
        
    return reversed;
}

var list = 
{
  name: "1",
  next: {
    name: "2",
    next: {
      name: "3",
      next: {
        name: "4"
      }
    }
  }
};

console.log("Original list");
var head = list;
function print(head){
    while (head != undefined) {
      console.log(head.name);
      head = head.next;
    }
}