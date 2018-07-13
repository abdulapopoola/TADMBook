/*
    QUESTION
    Write a program to reverse the direction of a given singly-linked list.
    In other words, after the reversal all pointers should now point backwards.
    Your algorithm should take linear time.
*/

/*
    ANALYSIS
    The reversal of a list is obtained by appending the first node to the
    end of the reversed sub list. Recursion or iteration works.
*/

function Node() {
    this.val = null;
    this.next = null;
}

/*  FIRST ATTEMPT
    O(n^2); can be improved
*/
function reverse(list) {
    if (!list.next) {
        return list;
    }

    var next = list.next;
    var reversed = reverse(next);
    list.next = null;
    var appendPoint = reversed;
    while (appendPoint.next) {
        appendPoint = appendPoint.next;
    }
    appendPoint.next = list;

    return reversed;
}

/*
    Using a stack to achieve O(n) time
    Push the elements onto a stack and then pop them out
*/
function reverseWithStack(head) {
    var stack = [];

    while (head) {
        stack.push(head);
        head = head.next;
    }

    var stackEnd = stack.length - 1;
    for (i = stackEnd; i > 0; i--) {
        stack[i].next = stack[i - 1];
    }

    stack[0].next = null;
    return stack[stackEnd];
}

/* Testing */
var chars = ['a', 'b', 'c', 'd'];
var nodes = [];
for (var i = 0; i < 4; i++) {
    var node = new Node();
    node.val = chars[i];
    nodes.push(node);
}

a = nodes[0];
b = nodes[1];
c = nodes[2];
d = nodes[3];

a.next = b;
b.next = c;
c.next = d;

debug(reverseWithStack);

reverseda = reverseWithStack(a);