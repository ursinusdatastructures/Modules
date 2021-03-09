---
layout: exercise_python
permalink: "Module13/Exercise2"
title: "CS 371: Module 13: Exercise 2"
excerpt: "CS 371: Module 13: Exercise 2"
canvasasmtid: "115038"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 2
  instructions: "<p>Complete the backtracing code to extract a maximal subsequence between two strings.  Note that unlike the sparse matrix code in assignment 3, the code below uses regular 2D python lists for storing the choices, so you index them with <code>choices[i][j]</code>.</p>"
  goals:
    - Backtrace through a table of backpointers in a dynamic programming problem to extract an optimal solution
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("rus oll tt great")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("taerg tt llo sur")
      feedback: "Try again.  It looks like you may be adding the characters in the reverse order.  Try seq = s1[i] + seq"
files:
  - filename: "LCS"
    name: lcs
    ismain: false
    isreadonly: false
    isvisible: true
    height: 1150
    code: | 
          def LCS(s1, s2):
              """
              Parameters
              ----------
              s1: string
                  First string
              s2: string
                  Second string
              
              Returns
              -------
              string: A maximal subsequence between s1 and s2
              """
              M = len(s1)
              N = len(s2)
              table = [[0]*N for i in range(M)]
              choices = [[0]*N for i in range(M)]
              for i in range(M):
                  for j in range(N):
                      res = 0
                      if s1[i] == s2[j]:
                          res = 1
                          if i > 0 and j > 0:
                              choices[i][j] = 0
                              res += table[i-1][j-1]
                      else:
                          res1 = 0
                          res2 = 0
                          if i > 0:
                              res1 = table[i-1][j]
                          if j > 0:
                              res2 = table[i][j-1]
                          if res1 > res2:
                              choices[i][j] = 1
                              res = res1
                          else:
                              choices[i][j] = 2
                              res = res2
                      table[i][j] = res
              for j in range(N):
                  choices[0][j] = 2
              for i in range(M):
                  choices[i][0] = 1
              i = M-1
              j = N-1
              seq = ""
              while not (i == 0 and j == 0):
                  ## TODO: Fill this in. If s1[i] == s1[j], add seq[i]
                  ## before what's currently in seq.
                  ## Then, regardless, change i and j based on choices[i, j]
                  pass
              if s1[0] == s2[0]:
                  seq = s1[0] + seq
              return seq



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        s1 = "rules are not all that great"
        s2 = "Ursinus college students are great students"
        print(LCS(s1, s2))
        
        
---
