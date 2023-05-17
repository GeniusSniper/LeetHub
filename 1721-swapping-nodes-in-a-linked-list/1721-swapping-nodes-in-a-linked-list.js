/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let arr = [], node, temp = head;
    while(temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    let num = arr[k - 1];
    arr[k - 1] = arr[arr.length - k];
    arr[arr.length - k] = num;
    
    for(let i = arr.length - 1 ; i > -1; i--) {
        node = new ListNode(arr[i], node);
    }
    return node;
};