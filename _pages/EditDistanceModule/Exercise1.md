---
layout: exercise_python
permalink: "/EditDistanceModule/Exercise1"
title: "CS 371: Edit Distance Module: Recursive String Edit Distance"
excerpt: "CS 371: Edit Distance Module: Recursive String Edit Distance"
canvasasmtid: "143118"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 2
  instructions: "Fill in the code to complete the recursive calls for edit distance."
  packages: "numpy"
  goals:
    - To use recursion to implement the string edit distance
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    feedback.setValue(pyodide.globals.res);
  correctcheck: |
    pyodide.globals.res == "3.4.5"
  incorrectchecks:
    - incorrectcheck: |
        pyodide.globals.res == "0.0.0"
      feedback: "Try again.  It looks like you're not filling in all of the costs"
    - incorrectcheck: |
        pyodide.globals.res == "5.6.10"
      feedback: "Try again.  Be careful to only add 1 to the case where both are chopped off the end if they don't match"

files:
  - filename: "Student Code"
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



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        res = "{}.".format(edit("chris", "chase"))
        res += "{}.".format(edit("school", "fools"))
        res += "{}".format(edit("topology", "topography"))
        print(res)
        
---
