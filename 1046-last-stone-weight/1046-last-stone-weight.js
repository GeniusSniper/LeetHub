/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();
    stones.forEach(num => pq.enqueue(num));
    while(pq.size() > 1) {
        let l = pq.dequeue(), sl = pq.dequeue();
        let num = Math.abs(l.element - sl.element);
        if(num !== 0) pq.enqueue(num);
    }
    return pq.front() ? pq.front().element : 0;
};