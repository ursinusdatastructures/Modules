---
layout: exercise_python
permalink: "Module11/Exercise1"
title: "CS 371: Module 11: Exercise 1"
excerpt: "CS 371: Module 11: Exercise 1"
canvasasmtid: "114325"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 1.5
  instructions: "<p>The code below includes the iterative dynamic programming approach we talked about for making change, which includes memory of the optimal coin choices to make at each step.  Complete the <code>get_change_coins</code> method to recursively backtrace and enumerate all possibilities of making change optimally.  The base case has already been taken care of, you just need to initiate recursion on all possible coins to choose at a particular step.  To show the algorithm off a little more, the test cases include a 3 cent coin, which leads to more than one possibility on some of the cases.</p>"
  goals:
    - Recursively backtrace optimal solutions in dynamic programming using stacks
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("6:{'1x1,5x1', '3x2'}.41:{'1x1,5x1,10x1,25x1', '3x2,10x1,25x1'}.94:{'1x1,3x1,5x1,10x1,25x3', '3x3,10x1,25x3'}")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("6:set().41:set().94:set()")
      feedback: "Try again.  It looks like you aren't initiating the recursive calls"
files:
  - filename: "Min Coins Needed (Provided)"
    name: mincoinsneededdyn
    ismain: false
    isreadonly: true
    isvisible: true
    height: 680
    code: | 
          def get_change_coins(optimal, s, amt, all_ways):
              """
              Recursively backtrace through optimal coin choices to see
              all of the ways of making changes
              Parameters
              ----------
              optimal: list of list
                  A list of optimal coin choices, indexed by amount
              s: stack
                  A stack of all of the coins considered so far
              amt: int
                  The current amount that's being turned into change
              all_ways: set
                  A set of strings describing all unique ways to make change.
                  Returned by reference
              """
              if len(optimal[amt]) == 0:
                  # Stopping condition: No more coins left to look at
                  # We know that this amount is one of the coins
                  counts = {amt:1} 
                  for coin in s.get_entire_stack():
                      if not coin in counts:
                          counts[coin] = 0
                      counts[coin] += 1
                  # Format this nicely in a string sorted in increasing
                  # order of coin value
                  way = ""
                  for i, coin in enumerate(sorted(counts.keys())):
                      way += "{}x{}".format(coin, counts[coin])
                      if i < len(counts)-1:
                          way += ","
                  all_ways.add(way)
              else:
                  for c in optimal[amt]:
                      ## TODO: Fill this in
                      ## 1. Push the coin c onto the stack
                      ## 2. Make a recursive call 
                      ## 3. Pop this coin off of the stack
                      pass
              

  - filename: "Min Coins Backtracing (Student Code)"
    name: mincoinsbacktrace
    ismain: false
    isreadonly: false
    isvisible: true
    height: 620
    code: | 
          def min_coins_needed_dyn(coins, amt):
              """
              Parameters
              ----------
              coins: list
                  List of all possible coin values (including 1 cent)
              amt: int
                  The change I'm trying to make
              
              Returns
              -------
              int: The minimum number of coins needed to make change,
              set: A set describing all of the ways to make that change
              """
              mem = [0]*(amt+1) # Ex) mem[10] is minimum # needed to make 10c
              optimal = [[] for i in range(amt+1)]
              for amti in range(1, amt+1):
                  if amti in coins:
                      mem[amti] = 1
                  else:
                      min_coins = amti
                      for c in coins:
                          sm_amt = amti - c
                          if sm_amt > 0:
                              min_c = 1 + mem[sm_amt]
                              min_coins = min(min_coins, min_c)
                      for c in coins:
                          sm_amt = amti - c
                          if sm_amt > 0:
                              min_c = 1 + mem[sm_amt]
                              if min_c == min_coins:
                                  optimal[amti].append(c)
                      mem[amti] = min_coins
              s = Stack()
              all_ways = set([])
              get_change_coins(optimal, s, amt, all_ways)
              return mem[-1], all_ways

  - filename: "Stack (Provided)"
    name: stack
    ismain: false
    isreadonly: true
    isvisible: true
    height: 400
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
              
              def peek_first(self):
                  ret = None
                  if self.head:
                      ret = self.head.value
                  return ret
                  
              def __str__(self):
                  # This is like the to-string method
                  s = "LinkedList: "
                  node = self.head
                  while node: #As long as the node is not None
                      s += "{} ==> ".format(node.value)
                      node = node.next
                  return s
              
              def __len__(self):
                  # This allows us to use len() on our object to get its length!
                  return self.N

          class Stack:
              def __init__(self):
                  self.L = LinkedList()
              
              def push(self, val):
                  self.L.add_first(val)
              
              def pop(self):
                  return self.L.remove_first()
              
              def peek(self):
                  return self.L.peek_first()
              
              def get_entire_stack(self):
                  node = self.L.head
                  ret = []
                  while node: #As long as the node is not None
                      ret = [node.value] + ret
                      node = node.next
                  return ret
              
              def __len__(self):
                  # This allows us to use len() on our object to get its length!
                  return len(self.L)


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        coins = [1, 3, 5, 10, 25]
        for amt in [6, 41, 94]:
            cost, ways = min_coins_needed_dyn(coins, amt)
            print("{}:{}".format(amt, ways), end='.')
        
        
---
