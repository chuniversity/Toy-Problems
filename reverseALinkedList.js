// Reverse a Linked List

// PROMPT: Given the head node of a linked list, your task is to reverse the linked list.

// INPUTS: The head node of a linked list

// OUTPUTS: The new head node of the linked list (after it has been reversed)

// CLARIFIERS:
// This is a singly-linked list (no previous pointer)
// The linked list will have at least one node
// EXTRA (if solved):6
// Craft a solution that uses constant O(1) space
// If current solution is an iterative approach, craft a solution that uses a recursive approach (and vice versa)

// STEPPED SOLUTION:
// Solution 1: STACK O(n) space complexity
// Traverse the linked list
// Add each node to a stack
// Hang onto the last node added to the stack–this will be the new head node
// Pop off each node, and point it’s next to the now top of the stack (or null if stack is empty)
// Return the head node
// Solution 2: IN-PLACE O(1) space complexity
// Traverse the linked list 
// At every node, do the following
// Use variables, prev = null, curr = the current node, and next = current.next
// Set curr.next = prev
// Set prev = curr
// Set curr = next
// Set next = curr.next
// Return the last node (Probably the prev pointer. This is the new head pointer.)

const reverseList = node => {
  //handle if node doesn't exist
  if(!node) return node;

  //create a stack array
  const stack = [];

  // while node exists, push the node to the stack, make node = node.next
  while(node) {
    stack.push(node);
    node = node.next
  }

  // pop the last element in stack, save to newHead variable
  const newHead = stack.pop();
  //save newHead to a curr variable
  let curr = newHead;

  // while curr exists, pop the stack, 
  while (curr) {
    let next = stack.pop() || null;
    curr.next = next;
    curr = next;
  }

  return newHead


}