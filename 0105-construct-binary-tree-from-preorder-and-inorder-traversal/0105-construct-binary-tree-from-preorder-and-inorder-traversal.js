/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let c = 0;
    function constructTree(i = 0, j = inorder.length) {
        if(j <= i) return null;
        let a = i;
        while(preorder[c] !== inorder[a++]);
        let temp = new TreeNode(preorder[c++]);
        
        temp.left = constructTree(i, a - 1);
        temp.right = constructTree(a, j);
        return temp;
    }
    return constructTree();
};