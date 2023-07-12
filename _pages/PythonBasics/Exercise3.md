---
layout: exercise_python
permalink: "Module1/Exercise3"
title: "CS 271: Module 1: Python Basics Part 3"
excerpt: "CS 271: Module 1: Python Basics Part 3"
canvasasmtid: "175624"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video3"
  next: "./Video4"
  points: 1.5
  instructions: "<p>Just one more exercise in this module!  Chad is a big baby when it comes to going outside.  He only goes outside if it's more than 60 degrees Fahrenheit but less than 80 degrees Fahrenheit.  Write a method called <code>goes_outside</code> that takes one parameter for the temperature and returns <code>True</code> if Chad is willing to go outside and <code>False</code> otherwise."
  goals:
    - To define methods in python
    - To implement boolean expressions and if statements in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("False.True.True.False.False")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("True.False.False.True.True")
      feedback: "Try again.  Somehow you got the opposite logic here!" 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
         ## TODO: Define the goes_outside method here


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the method
        print(goes_outside(50), end='.')
        print(goes_outside(65), end='.')
        print(goes_outside(72), end='.')
        print(goes_outside(83), end='.')
        print(goes_outside(90), end='.')
        
---
