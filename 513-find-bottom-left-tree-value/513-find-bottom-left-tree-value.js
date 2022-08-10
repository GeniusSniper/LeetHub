/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    function dfs(node) {
        if(!node) return [0,0];
        if(!node.left && !node.right) return [1,node.val];
        let left = dfs(node.left),
            right = dfs(node.right);
        return right[0] > left[0] ? [right[0] + 1, right[1]] : [left[0] + 1, left[1]];
    }
    
    return dfs(root)[1];
};