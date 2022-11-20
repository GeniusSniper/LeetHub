/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return ;
    let node = head, arr =[];
    while(node) {
        arr.push(node);
        node = node.next;
    }
    node = head;
    let len = arr.length, mid = Math.floor(arr.length / 2);
    for(let i = 0; i < mid; i++) {
        let j = len - 1 - i, cur = node;
        node = node.next;
        cur.next = arr[j];
        arr[j].next = node;
    }
    arr[mid].next = null;
    return ;
};