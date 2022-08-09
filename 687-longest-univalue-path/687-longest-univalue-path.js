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
var longestUnivaluePath = function(root) {
    let max = 0;
    
    function dfs(node, val) {
        if(!node) return 0;
        let sameNode = val === node.val ? 1 : 0;
        let left = dfs(node.left, node.val),
            right = dfs(node.right, node.val);
        
        max = Math.max(max, sameNode + left, sameNode + right);
        if(left && right && node.left.val === node.right.val) max = Math.max(max, left + right);
        
        return sameNode ? sameNode + Math.max(left,right) : 0;
    }
    
    dfs(root);
    
    return max;
};