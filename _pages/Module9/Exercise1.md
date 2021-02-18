---
layout: exercise_python
permalink: "Module9/Exercise1"
title: "CS 371: Module 9: Exercise 1"
excerpt: "CS 371: Module 9: Exercise 1"
canvasasmtid: "113737"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 1.5
  instructions: "<p>The code below provides the beginning of a recursive implementation that counts the optimal number of moves needed in the Towers of Hanoi problem.  Fill in the recursive calls to complete this method.  We will make a recursive scheme in class to actually show the animation of a solution, but this is the first step.</p>"
  goals:
    - To implement recursive functions with proper stopping conditions
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("441.2205.11025")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("0.0.0")
      feedback: "Try again.  You need to return the frequency in hz, not 0"
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 400
    code: | 
         def h(N):
            """
            A method to recursively compute how many moves
            there are in an optimal solution to the Towers of
            Hanoi problem
            
            Parameters
            ----------
            N: int
                Number of discs
            
            Returns
            -------
            Number of optimal moves needed to move discs
            """
            res = 1
            if h > 1:
                ## TODO: Fill this in
            return res


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        for i in range(1, 10):
            print("{}.".format(h(i)), end='')
        
        
---
