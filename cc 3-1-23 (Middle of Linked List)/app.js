/*
Leetcode: https://leetcode.com/problems/middle-of-the-linked-list

Given the head of a linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

//Loop through all the nodes at two speeds .next and .next.next by the time the second speed reaches the end the first will be at the middle. Just return what node it is currently at

//solution
const middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};