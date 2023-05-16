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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = NaN, level = 0;
    function bs(node) {
        if(!node) return 0;
        bs(node.left);
        if(result >= 0) return;
        level++;
        if(level === k) {
            result = node.val;
            return;
        }
        bs(node.right);
    }
    bs(root);
    return result;
};