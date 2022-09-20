---
layout: exercise_python
permalink: "/StackModule/Exercise"
title: "CS 271: Stacks And Queues Exercise"
excerpt: "CS 271: Stacks And Queues Exercise"
canvasasmtid: "157379"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video"
  points: 2
  instructions: "<p>I've provided you with an implementation of a stack below that uses a linked list.  As I mentioned, a good way to implement a queue is with a doubly-linked list since we can add things to the end in O(1) time and we can remove things from the beginning in O(1) time.  However, it is also possible to implement a queue using two stacks (which is a useful exercise when talking about turing machines and pushdown automata in the theory of computation, FYI).  In this case, the best we can do is O(1) to push at the end of the queue and O(N) to pop from the front of the queue.  Use the two stacks, stack1 and stack2, in the Queue class to accomplish this below.</p>"
  goals:
    - To implement a queue using two stacks
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
    let fields = pos.split("|");
    let nums = fields[0];
    let steps = fields[1].split(".");
    for (let i = 0; i < steps.length; i++) {
        steps[i] = parseInt(steps[i]);
    }
    let gtsteps = [99,174,245,312,375,434,489,540,587,630,669,704,735,762,785,804,819,830,837,840];
    function allLess(arr1, arr2, fac) {
        ret = true;
        for (let i = 0; i < arr1.length; i++) {
            ret *= (arr1[i] <= fac*arr2[i]);
        }
        return ret;
    }
  correctcheck: |
    pos.includes("1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19") && allLess(steps, gtsteps, 2)
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("1.2.3.4.5.6.7.8.9.10.11.12.13.14.15.16.17.18.19") && !allLess(steps, gtsteps, 2)
      feedback: "Try again.  You appear to be doing more than O(N) steps in some of your operations"
files:
  - filename: "Stack Implementation with Linked List (Provided)"
    name: stack
    ismain: false
    isreadonly: true
    isvisible: true
    height: 800
    code: | 
      class Node:
          def __init__(self, value):
              self.value = value
              self.next = None # Python's version of "null" is "None"
      
      class LinkedList:
          def __init__(self):
              self.head = None
              self.N = 0
          
          def add_first(self, value):
              """
              Parameters
              ----------
              value: any
                  Add a new node to the beginning with this value
              """
              new_node = Node(value)
              head_before = self.head
              self.head = new_node
              new_node.next = head_before
              self.N += 1
          
          def remove_first(self):
              """
              Remove and return the first value from the linked list
              or do nothing and return None if it's already empty
              """
              ret = None
              if self.head: # If the head is not None
                  ret = self.head.value
                  self.head = self.head.next
                  self.N -= 1
              return ret
          
          def __len__(self):
              # This allows us to use len() on our object to get its length!
              return self.N

      class Stack:
          def __init__(self):
              self.L = LinkedList()
              self.ops = 0
          
          def push(self, val):
              self.L.add_first(val)
              self.ops += 1
          
          def pop(self):
              self.ops += 1
              return self.L.remove_first()
        
          def __len__(self):
              return len(self.L)


  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 400
    code: | 
         class Queue:
            def __init__(self):
                self.stack1 = Stack()
                self.stack2 = Stack()
            
            def push(self, x):
                """
                Add something to the end of the queue in O(1) time
                using one of the stacks
                """
                ## TODO: Fill this in
                pass

            def pop(self):
                """
                Remove and return the item from the front of the queue 
                in O(N) time using both stacks
                """
                ## TODO: Fill this in
                pass
            
            def __len__(self):
                return len(self.stack1)



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        q = Queue()
        for i in range(20):
            q.push(i)
        ops = []
        while len(q) > 0:
            print("{}.".format(q.pop()), end='')
            ops.append(q.stack1.ops + q.stack2.ops)
        print("|", end='')
        for i, op in enumerate(ops):
            print("{}".format(op), end='')
            if i < len(ops)-1:
                print(".", end='')

        
---
