---
layout: exercise
language: python
permalink: "LCSModule/Exercise2"
title: "CS 271: Longest Common Subsequence: Exercise 2"
excerpt: "CS 271: Longest Common Subsequence: Exercise 2"
canvasasmtid: "207282"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 2
  instructions: "<p>Complete the backtracing code to extract a maximal subsequence between two strings.  The code below uses regular 2D python lists for storing the choices, so you index them with <code>choices[i][j]</code>.  <b>NOTE:</b> Running the code as is will be an infinite loop.  So you'll need to decrement <code>i</code> and <code>j</code> within the loop at the appropriate times.</p>"
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
    - incorrectcheck: |
        pos.includes("rrrrules are nnot alllll  thaaaaatttttt greaaaaaaaaatt")
      feedback: "Try again.  Close!  Be sure to only prepend the character if <code>s1[i] == s2[j]</code>"
    - incorrectcheck: |
        pos.includes("||")
      feedback: "Try again.  Close!  Be sure to prepend <code>s1[i]</code> to <code>seq</code> if <code>s1[i] == s2[j]</code>"
    
files:
  - filename: "lcs.py"
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
              DIAG = 0
              UP = 1
              LEFT = 2

              M = len(s1)
              N = len(s2)
              table = [[0]*N for i in range(M)]
              choices = [[DIAG]*N for i in range(M)]
              for i in range(M):
                  for j in range(N):
                      res = 0
                      if s1[i] == s2[j]:
                          res = 1
                          if i > 0 and j > 0:
                              choices[i][j] = DIAG
                              res += table[i-1][j-1]
                      else:
                          res1 = 0
                          res2 = 0
                          if i > 0:
                              res1 = table[i-1][j]
                          if j > 0:
                              res2 = table[i][j-1]
                          if res1 > res2:
                              choices[i][j] = UP
                              res = res1
                          else:
                              choices[i][j] = LEFT
                              res = res2
                      table[i][j] = res
              for j in range(N):
                  choices[0][j] = LEFT
              for i in range(M):
                  choices[i][0] = UP
              i = M-1
              j = N-1
              seq = ""
              while not (i == 0 and j == 0):
                  ## TODO: Fill this in. If s1[i] == s2[j], add s1[i] (or s2[j])
                  ## to before what's currently in seq.
                  ## Then, regardless, change i and j based on choices[i, j]
                  pass
              if s1[0] == s2[0]:
                  seq = s1[0] + seq
              return seq



  - filename: "test.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        s1 = "rules are not all that great"
        s2 = "Ursinus college students are great students"
        print("|" + LCS(s1, s2) + "|")
        
openFilesOnLoad: ["main.py", "lcs.py"]
---
