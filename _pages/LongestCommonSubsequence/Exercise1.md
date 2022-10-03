---
layout: exercise_python
permalink: "LCSModule/Exercise1"
title: "CS 271: Longest Common Subsequence: Exercise 1"
excerpt: "CS 271: Longest Common Subsequence: Exercise 1"
canvasasmtid: "157864"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 2
  instructions: "<p>Complete memoization in the else statement of the recursive LCS code.  If you're not doing memoization properly and have to repeat problems, the recursion will take a very long time for the third example in the test code block, and <b>your browser will lock up</b>.</p>"
  goals:
    - Use memoization to speed up recursive evaluations with overlapping subproblems
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("5.3.16")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("6:set().41:set().94:set()")
      feedback: "Try again.  It looks like you aren't initiating the recursive calls"
files:
  - filename: "LCS"
    name: lcs
    ismain: false
    isreadonly: false
    isvisible: true
    height: 680
    code: | 
          def LCS(s1, s2, mem):
              """
              Parameters
              ----------
              s1: string
                  First string
              s2: string
                  Second string
              mem: A dictionary from tuples (i, j) -> LCS(s1[0:i], s2[0:j])
              """
              res = 0
              if len(s1) != 0 and len(s2) != 0:
                  if s1[-1] == s2[-1]:
                      res = 0
                      problem = (len(s1)-1, len(s2)-1)
                      res = 1 + LCS(s1[0:-1], s2[0:-1], mem)
                  else:
                      res = max(LCS(s1[0:-1], s2, mem), LCS(s1, s2[0:-1], mem))
              return res


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        print(LCS("phone", "phones", {}), end='.')
        print(LCS("school", "fool", {}), end='.')
        s1 = "rules are not all that great"
        s2 = "Ursinus college students are great students"
        print(LCS(s1, s2, {}))
        
        
---
