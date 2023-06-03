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
var averageOfSubtree = function(root) {
    let count = 0;
    function rec(node) {
        if(!node) return [0, 0];
        let left = rec(node.left), right = rec(node.right);
        let totalNum = left[0] + right[0] + node.val, div = left[1] + right[1] + 1;
        if(Math.floor(totalNum / div) === node.val) count++;
        return [totalNum, div];
    }
    rec(root);
    return count;
};