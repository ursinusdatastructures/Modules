---
layout: exercise_python
permalink: "Module4/Exercise1"
title: "CS 371: Module 4: Exercise 1"
excerpt: "CS 371: Module 3: Exercise 1"
canvasasmtid: "112182"
canvaspoints: "1"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1
  instructions: "<p>We can come up with a better algorithm to find if there are duplicates by first sorting the array and then noticing that duplicates will become adjacent in the sorted array.  So we just have to loop through and find adjacent elements that are the same.  Fill in the <code>has_duplicates_sorted</code> method that first sorts the elements and then does this.</p>"
  goals:
    - To write loops in python
    - To implement algorithm ideas in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("False.True.False")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("False.False.False")
      feedback: "Try again.  Somehow you're still returning False for all of the duplicate checks, but one of them should be true." 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
        def has_duplicates_sorted(arr):
            arr = sorted(arr)
            duplicate = False
            ## TODO: Change duplicate to True if there's
            ## a duplicate element in the array
            return duplicate


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the class
        print(has_duplicates_sorted([1, 2, 3, 4, 5]), end='.')
        print(has_duplicates_sorted([4, 20, 6, 4, 20]), end='.')
        print(has_duplicates_sorted([4, 20, 60, 5, 201]), end='.')
        
---
