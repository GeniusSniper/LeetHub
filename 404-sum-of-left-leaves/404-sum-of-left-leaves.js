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
var sumOfLeftLeaves = function(root) {
    if(!root || !root.left && !root.right) return 0;
    
    let stack = [root], sum = 0;
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(node.left) {
            if(!node.left.left && !node.left.right){
                sum += node.left.val;
            } else {
                stack.push(node.left);
            }
        }
        if(node.right) stack.push(node.right);
    }
    
    return sum;
};