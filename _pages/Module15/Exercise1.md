---
layout: exercise_python
permalink: "Module15/Exercise1"
title: "CS 371: Module 15: Exercise 1"
excerpt: "CS 371: Module 15: Exercise 1"
canvasasmtid: "115545"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video0"
  next: "./Video1"
  points: 2
  instructions: "<p>Finish the code below to complete merge sort.</p>"
  goals:
    - Implement merge sort
    - Implement a divide and conquer algorithm
    
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
        pos.includes("[6, 13, 21, 44, 0, 0, 0, 0].[1, 15, 0, 0, 0, 0]")
      feedback: "Try again.  It looks like you haven't finished copying over leftover elements from the first or second halves in the merge"
    - incorrectcheck: |
        pos.includes("[6, 13, 21, 44, 51, 0, 0, 0].[1, 15, 23, 0, 0, 0]")
      feedback: "Try again.  It looks like you are copying leftover elements from the first half, but not from the second half."
    - incorrectcheck: |
        pos.includes("[6, 13, 21, 44, 51, 66, 69, 0].[1, 15, 0, 24, 29, 0]")
      feedback: "Try again.  It looks like you are copying leftover elements from the second half, but not from the first half."
files:
  - filename: "Merge"
    name: mergesort
    ismain: false
    isreadonly: false
    isvisible: true
    height: 1000
    code: | 
          def swap(arr, i, j):
              temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp

          def merge(x, y, i1, mid, i2):
              """
              Perform a merge of two contiguous sorted sub-chunks of
              the array x, using y as a staging area

              Parameters
              ----------
              x: list
                  The main array
              y: list
                  The array to copy into as the two chunks are being merged
              i1: int
                  Left of first chunk
              mid: int
                  Right of first chunk
              i2: int
                  End of second chunk
              """
              i = i1
              j = mid+1
              idx = 0
              while i != mid+1 and j != i2+1:
                  if x[i] < x[j]:
                      y[idx] = x[i]
                      i += 1
                  else:
                      y[idx] = x[j]
                      j += 1
                  idx += 1
              
              ## TODO: Copy over any elements that are left in
              ## the first chunk

              ## TODO: Copy over any elements that are left in
              ## the second chunk

              # Copy our merged sorted chunk from the staging area
              # back into the chunk from i1 to i2
              for idx in range(i2-i1+1):
                  x[i1+idx] = y[idx]


          def mergesort_rec(x, y, i1, i2):
              """
              A recursive call to sort a subset of the array

              Parameters
              ----------
              x: list
                  Array to sort
              y: list
                  A temporary array / staging area to store intermediate results
              i1: int
                  First index of chunk to sort, inclusive
              i2: int
                  Second index of chunk to sort, inclusive (i2 >= i1)
              """
              if (i1 == i2):
                  # Base case: A single number
                  return
              elif (i2 - i1 == 1):
                  # Base case: A pair of numbers right next to each other
                  if (x[i2] < x[i1]):
                      swap(x, i1, i2)
              else:
                  # More than two; need to "divide and conquer"
                  mid = (i1 + i2)//2
                  mergesort_rec(x, y, i1, mid)
                  mergesort_rec(x, y, mid+1, i2)
                  merge(x, y, i1, mid, i2)


          def mergesort(x):
              """
              An entry point for merge sort on the entire array

              Parameters
              ----------
              x: list
                  Array to sort
              """
              y = [0]*len(x)
              mergesort_rec(x, y, 0, len(x)-1)


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        arr = [51, 21, 66, 69, 56, 13, 44, 6]
        mergesort(arr)
        print(arr, end='.')
        arr = [23, 1, 15, 24, 47, 29]
        mergesort(arr)
        print(arr)
        
---
