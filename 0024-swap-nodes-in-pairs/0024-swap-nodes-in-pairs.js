/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    if there is no node return itself
    go down the list for every 2 node swap their vaule
*/
var swapPairs = function(head) {
    if(!head) return head;
    let node = head;
    while(head && head.next) {
        let temp = head.val;
        head.val = head.next.val;
        head.next.val = temp;
        head = head.next.next;
    }
    return node;
};