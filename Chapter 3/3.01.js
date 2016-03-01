/*

    QUESTION
    3-1. A common problem for compilers and text editors is determining whether the parentheses in a string are balanced and properly nested. 
    For example, the string ((())())() contains properly nested pairs of parentheses, which the strings )()( and ()) do not.
    Give an algorithm that returns true if a string contains properly nested and balanced parentheses, and false if otherwise. 
    For full credit, identify the position of the first offending parenthesis if the string is not properly nested and balanced.

*/


/*
    ANALYSIS
    Use a binary tree
    Create new active node for every encountered (
    When a ) is seen and the active node is not the root
    Check if the node's parent has a ) child already
    if so, then that's a mismatch
    Otherwise, set the active node to the parent
    (since the left and right children match and have been dropped )
 */

function balancedParens(string) {
    var activeNode = {
        left: null,
        right: null,
        parent: null
    };

    for (var i = 0, len = string.length; i < len; i++) {
        if (string[i] === '(') {
            activeNode = {
                left: null,
                right: null,
                parent: activeNode
            }
        } else {
            var parent = activeNode.parent;
            if(!activeNode.parent || parent.right) {
                return 'Mismatch at : ' + i;
            }
            
            activeNode = parent;
        }
    }
    
    return 'Balanced pairs';
}

balancedParens('()');
balancedParens('(((((((()()())))))))');
balancedParens(')()()');

/*
    OTHER APPROACHES
    * Using a stack
    * Using a counter
*/