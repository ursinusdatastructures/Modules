---
layout: exercise_python
permalink: "Module6/Exercise1"
title: "CS 371: Module 6: Exercise 1"
excerpt: "CS 371: Module 6: Exercise 1"
canvasasmtid: "112492"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Exercise2"
  points: 1.5
  instructions: "<p>Fill in the <code>remove_last</code> method of the <code>ArrayList</code> data structure.  This should run in O(1) time.</p>"
  goals:
    - To implement data structures in python using object-oriented paradigms
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("4(4).3(3).2(2).1(1).0(0).None(0).None(0).None(0).None(0).None(0)")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("4(5).4(5).4(5).4(5).4(5).4(5).4(5).4(5).4(5).4(5)")
      feedback: "Try again.  It looks like you're not changing <code>_N</code>." 
    - incorrectcheck: |
        pos.includes("0(4).4(3).3(2).2(1).1(0).None(0).None(0).None(0).None(0).None(0)")
      feedback: "Try again.  It looks like you're indexing by <code>_N</code>, not <code>_N-1</code>." 
    - incorrectcheck: |
        pos.includes("0(5).0(5).0(5).0(5).0(5).0(5).0(5).0(5).0(5).0(5).")
      feedback: "Try again.  It looks like you're indexing by <code>_N</code>, not <code>_N-1</code>, and you also need to decrease <code>_N</code> every time." 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 800
    code: | 
          class ArrayList:
              def __init__(self, capacity = 10):
                  self._capacity = capacity
                  self._arr = [0]*capacity # Have an array in the background, and I'm only allowed to
                  # make a new array of a fixed length, or to modify the current array's elements
                  self._N = 0 # How many elements we have
              
              def add_fast(self, x):
                  """
                  Add an element at the end of the list, doubling
                  capacity if needed
                  Parameters
                  ----------
                  x: The element to add
                  """
                  if self._N == self._capacity:
                      self._capacity *= 2
                      new_arr = [0]*self._capacity
                      for i in range(self._N):
                          new_arr[i] = self._arr[i]
                      self._arr = new_arr
                  # Now I know I have enough room no matter what
                  self._arr[self._N] = x
                  self._N += 1
              
              def remove_last(self):
                  ret = None
                  if self._N > 0:
                      ## TODO: Fill this in
                      ## Save the element in ret, move the cursor
                      
                  return ret

              def at(self, i):
                  return self._arr[i]

              def __str__(self):
                  s = ""
                  for i in range(self._N):
                      s += "{}".format(self._arr[i])
                      if i < self._N-1:
                          s += ", "
                  return s
              
              def __len__(self):
                  return self._N


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the class
        L = ArrayList(4)
        for i in range(5):
            L.add_fast(i)
        for k in range(10):
            print("{}({})".format(L.remove_last(), len(L)), end='.')
        
---
