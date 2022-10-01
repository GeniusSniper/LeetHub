/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let prev;
    while(slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    
    let left = head, right = prev;
    while(left && right) {
        if(left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    
    return true;
};