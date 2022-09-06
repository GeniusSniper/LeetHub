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
var rob = function(root) {
    function robbing(root) {
        if(!root) return [0, 0];
        let rob1 = robbing(root.left), rob2 = robbing(root.right);
        let temp = Math.max(rob1[0] + rob2[0] + root.val, rob1[1] + rob2[1]);
        return [rob1[1] + rob2[1], temp];
    }
    
    return robbing(root)[1];
};