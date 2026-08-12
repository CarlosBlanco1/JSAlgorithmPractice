/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    if (lists.length == 0) return null;
    if (lists.length == 1) return lists[0];

    var i = 0;

    let global = lists[i];

    while (!global) {
        i++;
        global = lists[i];

        if (i > lists.length) return null;
    }

    let curr = global;
    i += 1;

    for (; i < lists.length; i++) {

        var right = new ListNode();
        right = lists[i];

        if (!right) {
            continue;
        }

        while (right && curr) {
            if (curr.val <= right.val) {
                curr = curr.next;
            }
            else {
                var prevCurr = new ListNode(curr.val, curr.next);
                curr.val = right.val;
                right = right.next;
                curr.next = prevCurr;
            }
        }

        curr = global;

        if (right) {
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = right;
            right++;
        }

        curr = global;
    }

    curr = global;

    if (curr && right) {
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = right;
    }

    return global ? global : right;
};