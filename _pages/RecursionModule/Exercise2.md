---
layout: exercise
language: python
permalink: "/RecursionModule/Exercise2"
title: "CS 271: Recursion Module: Ackermann Memoization"
excerpt: "CS 271: Recursion Module: Ackermann Memoization"
canvasasmtid: "207297"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video3"
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
    pos.includes("9.23_61.186_13.39")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("9.44_61.2432_13.107")
      feedback: "Try again.  It looks like you're not using any memoization yet.  Are you remembering to check to see if (m, n) is already in the memory?  Are you saving (m, n) in memory the first time you have to compute it?"
files:
  - filename: "student.py"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 500
    code: | 
          def A(m, n, counts, memory = {}, do_print = True):
              res = 0
              counts[0] += 1
              ## TODO: Add memoization here.  Use the tuple 
              ## (m, n) as a key in the dictionary
              if m == 0:
                  res = n+1
              elif n == 0:
                  res = A(m-1, 1, counts, memory)
              else:
                  inner = A(m, n-1, counts, memory)
                  res = A(m-1, inner, counts, memory)
              return res


  - filename: "main.py"
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
        
openFilesOnLoad: ["main.py", "student.py"]
---
