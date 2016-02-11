/*
 * Use a binary tree
 * Create new active node for every encountered (
 * When a ) is seen and the active node is not the root
 * Check if the node's parent has a ) child already
 * if so, then that's a mismatch
 * Otherwise, set the active node to the parent
 * (since the left and right children match and have been dropped )
 */

function balancedParens(string) {
    var rootNode = {
        val: null,
        left: null,
        right: null,
        parent: null
    };

    var activeNode = rootNode;
    for (var i = 0, len = string.length; i < len; i++) {
        if (string[i] === '(') {
            var newChild = {
                val: '(',
                left: null,
                right: null,
                parent: activeNode
            }
            activeNode = newChild;
        } else {
            if(!activeNode.parent) {
                return i;
            }
            
            var parent = activeNode.parent;            
            if(parent.right)
                return i;
            
            activeNode = parent;
        }
    }
    
    return 'Balanced pairs';
}

balancedParens('()');
balancedParens('(((((((()()())))))))');
balancedParens(')()()');