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
 * @return {number[]}
 */
var rightSideView = function(root, result = []) {
    if(!root) return [];
    
    function side(node, step = 0, max = 0) {
        if(!node) return max;
        if(step >= max) result.push(node.val);
        step++;
        let right = side(node.right, step, Math.max(step, max));
        return Math.max(right, side(node.left, step, Math.max(step, max, right)));
    }
    side(root);
    
    return result;
};