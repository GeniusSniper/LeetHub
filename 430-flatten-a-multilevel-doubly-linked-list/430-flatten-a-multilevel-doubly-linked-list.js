/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if(!head) return head;
    let next = [], node = head;
    
    while(head.next || head.child || next.length > 0) {
        if(head.child) {
            if(head.next) next.push(head.next);
            head.next = head.child;
            head.child = null;
            head.next.prev = head;
            head = head.next;
        } else if(head.next) {
            head = head.next;
        } else {
            let temp = next.pop();
            head.next = temp;
            temp.prev = head;
            head = temp;
        }
    }
    
    return node;
};