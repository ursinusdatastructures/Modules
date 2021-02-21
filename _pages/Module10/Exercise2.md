---
layout: exercise_python
permalink: "Module10/Exercise2"
title: "CS 371: Module 10: Exercise 2"
excerpt: "CS 371: Module 10: Exercise 2"
canvasasmtid: "113872"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 1.5
  instructions: "<p>The code below provides a method to compute the Ackermann function.  Use memoization to speed it up by checking a dictionary to see if a particular ackermann call has already been computed.</p>"
  goals:
    - To use memoization to speed up the evaluation of recursive functions
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("9.20_61.154_13.33")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("9.35_61.2258_13.79")
      feedback: "Try again.  It looks like you're still only using memoization for one of the recursive calls"
    - incorrectcheck: |
        pos.includes("9.23_61.186_13.39")
      feedback: "Try again.  It looks like you're only using memoization for one of the recursive calls in the third case"
    - incorrectcheck: |
        pos.includes("9.24_61.216_13.41")
      feedback: "Try again.  It looks like you're only using memoization for one of the recursive calls in the third case"
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 500
    code: | 
          def A(m, n, counts, memory = {}, do_print = True):
              counts[0] += 1
              if (m, n) in memory:
                  return memory[(m, n)]
              if m == 0:
                  res = n+1
              elif n == 0:
                  if (m-1, 1) in memory:
                      res = memory[(m-1, 1)]
                  else:
                      res = A(m-1, 1, counts, memory)
                      memory[m-1, 1] = res
              else:
                  ## TODO: Add memoization here for A(m, n-1)
                  inner = A(m, n-1, counts, memory)
                  ## TODO: Add memoization here for A(m-1, inner)
                  res = A(m-1, inner, counts, memory)
              return res


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        counts = [0]
        print(A(2, 3, counts, {}), end=".")
        print(counts[0], end="_")
        counts = [0]
        print(A(3, 3, counts, {}), end=".")
        print(counts[0], end="_")
        counts = [0]
        print(A(4, 0, counts, {}), end=".")
        print(counts[0])
        
---
