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
    function reverseList(head, previous) {
        if(head.next){
            return reverseList(head.next, head);
        }
        head.next = previous;
    }
    reverseList(node, null);
}

let sample = {
    next: {
        next: {
            next: {
                
            }
        }
    }
};