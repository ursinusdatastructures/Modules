---
layout: exercise
language: python
permalink: "/EditDistanceModule/Exercise1"
title: "CS 271: Edit Distance Module: Recursive String Edit Distance"
excerpt: "CS 271: Edit Distance Module: Recursive String Edit Distance"
canvasasmtid: "207259"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  points: 2
  instructions: "Fill in the code to complete the recursive calls for edit distance."
  goals:
    - To use recursion to implement the string edit distance
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("1.4.4")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("0.0.0")
      feedback: "Try again.  It looks like you're not filling in all of the costs"
    - incorrectcheck: |
        pos.includes("2.6.6")
      feedback: "Try again.  Be careful to only add 1 to the case where both are chopped off the end if they don't match"

files:
  - filename: "student.py"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 500
    code: | 
          def edit(s1, s2):
              """
              Parameters
              ----------
              s1: string of length M
                  A string with M characters
              s2: string of length N
                  A string with N characters
                  
              Returns
              -------
              int: The optimal number of add/delete/match/swap
                  operations needed to turn s1 into s2 or vice versa
              """
              
              res = 0
              # Stopping conditions
              if len(s1) == 0:
                  res = len(s2)
              elif len(s2) == 0:
                  res = len(s1)
              else:
                  # Delete last character from s1 and match the rest recursively
                  case1 = 1 + edit(s1[0:-1], s2) 
                  ## TODO: Fill in the other two cases 
                  # Delete last character from s2 and match the rest recursively
                  case2 = 0 #
                  # Swap or match the last characters from s1 and s2 and match the rest recursively
                  case3 = 0
                  res = min(case1, case2, case3)
              return res



  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        res = "{}.".format(edit("chr", "cha"))
        res += "{}.".format(edit("scho", "fool"))
        res += "{}".format(edit("logy", "grap"))
        print(res)

openFilesOnLoad: ["main.py", "student.py"]
---
