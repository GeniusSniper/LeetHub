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
var maxPathSum = function(root) {
    let max = -Infinity;
    function helper(node){
        if(!node) return -Infinity;
        let left = helper(node.left), right = helper(node.right), val = node.val;
        let temp = Math.max(val, left + val, right + val);
        max = Math.max(max, left, right, temp, left + right + val);
        return temp;
    }
    helper(root);
    return max;
};