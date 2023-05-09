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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let counter = [root];
    while(counter.length > 0) {
        let temp = [], nextLayer = [];
        for(let i = 0; i < counter.length; i++) {
            temp.push(counter[i].val);
            if(counter[i].left) {
                nextLayer.push(counter[i].left);
            }
            if(counter[i].right) {
                nextLayer.push(counter[i].right);
            }
        }
        result.push(temp);
        counter = nextLayer;
    }
    return result;
};