/*
    QUESTION
    Implement an algorithm to reverse a linked list. Now do it without recursion.
*/

'use strict';
function reverse(linkedList){
    let node = linkedList;
    let prev = null;
    
    while(node){
        let tmp = node.next;
        node.next = prev;
        prev = node;
        node = tmp;
    }
    return prev;
}