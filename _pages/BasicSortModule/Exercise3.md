---
layout: exercise
language: python
permalink: "BasicSortingModule/Exercise3"
title: "CS 271: Sorting Basics Module: Exercise 2"
excerpt: "CS 271: Sorting Basics Module: Exercise 2"
canvasasmtid: "207300"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video4"
  next: "./Video5"
  points: 1.5
  instructions: "<p>Complete the code below to implement insertion sort in python.</p>"
  goals:
    - Implement the insertion sort algorithm
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("[6, 13, 21, 44, 51, 56, 66, 69].[1, 15, 23, 24, 29, 47]")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("6:set().41:set().94:set()")
      feedback: "Try again.  It looks like you aren't initiating the recursive calls"
files:
  - filename: "student.py"
    name: insertionsort
    ismain: false
    isreadonly: false
    isvisible: true
    height: 500
    code: | 
          def swap(arr, i, j):
              temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp

          def insertionsort(arr, idx=0):
              """
              Sort an array via the insertion sort algorithm
              
              Parameters
              ----------
              arr: list
                  An array of elements to sort
              """
              for i in range(1, len(arr)):
                  j = i
                  # As long as j > 0 and 
                  # arr[j] < arr[j-1], swap 
                  # the indices j and j-1 and decrement j

  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        arr = [51, 21, 66, 69, 56, 13, 44, 6]
        insertionsort(arr)
        print(arr, end='.')
        arr = [23, 1, 15, 24, 47, 29]
        insertionsort(arr)
        print(arr)
        
openFilesOnLoad: ["main.py", "student.py"]
---
