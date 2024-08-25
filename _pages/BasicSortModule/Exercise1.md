---
layout: exercise
language: python
permalink: "BasicSortingModule/Exercise1"
title: "CS 271: Sorting Basics Module: Exercise 1"
excerpt: "CS 271: Sorting Basics Module: Exercise 1"
canvasasmtid: "207299"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1.5
  instructions: "<p>The code below is a simple extension of the recursive permutation code, which is modified to print out one of the permutations as soon as it is in sorted order.  Fill in the <code>is_inorder</code> method below to return <code>True</code> if an array's elements are in ascending order, and <code>False</code> otherwise.  You should be able to accomplish this with a single loop that looks at all pairs of adjacent elements.  Once you're finished this, the brute force sorting code will work correctly.</p>"
  goals:
    - Implement a brute force sorting algorithm
    
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
    name: brutesort
    ismain: false
    isreadonly: false
    isvisible: true
    height: 680
    code: | 
          def swap(arr, i, j):
              temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp

          def is_inorder(arr):
              """
              Parameters
              ----------
              arr: list
                  An array of elements to sort
              
              Returns
              -------
              boolean: True if arr is sorted, False otherwise
              """
              inorder = True
              ## TODO: Fill this in
              return inorder

          def brutesort(arr, idx=0):
              """
              Sort an array by checking all permutations
              
              Parameters
              ----------
              arr: list
                  An array of elements to sort
              idx: int
                  What is the index of the element we are placing in the array
              """
              if idx == len(arr)-1:
                  if is_inorder(arr):
                      print(arr, end='.')
              else:
                  for i in range(idx, len(arr)):
                      swap(arr, i, idx)
                      brutesort(arr, idx+1)
                      swap(arr, i, idx)


  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        brutesort([51, 21, 66, 69, 56, 13, 44, 6])
        brutesort([23, 1, 15, 24, 47, 29])
        
openFilesOnLoad: ["main.py", "student.py"]
---
