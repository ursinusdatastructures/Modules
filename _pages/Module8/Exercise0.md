---
layout: exercise_python
permalink: "Module8/Exercise0"
title: "CS 371: Module 8: Exercise 0"
excerpt: "CS 371: Module 8: Exercise 0"
canvasasmtid: "112841"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  next: "./Video1"
  points: 2
  instructions: "<p>Fill in the <code>binary_search</code> method to complete the binary search technique to find an element in a sorted array.  Note that the <code>//</code> operator rounds the division down to the nearest int, which you'll need to do to keep them as indices.  Refer to the image below to recall how this algorithm works:</p><img src = \"../images/Module8/NumberLine.svg\"><p>Running into infinite loops is very common here!  So if your code doesn't terminate quickly, you probably have an infinite loop, and you may need to refresh your page.  Don't feel bad about this though...I had this happen to me when I implemented this for the first time in CS 174 last fall.</p>"
  goals:
    - To implement data structures in python using object-oriented paradigms
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("0,9.0,9.2,12.3,14.4,19.4,19.6,20.7,21.8,25.9,29.10,36.11,37.12,39.13,44.14,46.15,47.15,47.17,49.18,58.19,64.19,64.21,65.22,67.22,67.24,69.25,70.26,72.27,77.28,79.29,80.30,81.31,82.32,83.33,87.33,87.35,88.35,88.35,88.35,88.39,99")
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 500
    code: | 
          def binary_search(arr, value):
              """
              Parameters
              ----------
              arr: list
                  A *sorted* list of numbers
              value: float
                  Number under search
              Returns
              -------
              idx: int
                  Index of the first occurrence of value in arr
              """
              idx = -1
              i1 = 0
              i2 = len(arr)-1
              mid = (i1+i2)//2
              while i1 != i2:
                  if arr[mid] < value:
                      # TODO: Fill this in
                  else:
                      # TODO: Fill this in
              if arr[i1] == value:
                  idx = i1
              return idx


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        arr = [9,9,12,14,19,19,20,21,25,29,36,37,39,44,46,47,47,49,58,64,64,65,67,67,69,70,72,77,79,80,81,82,83,87,87,88,88,88,88,99]
        for i in range(len(arr)):
            idx = binary_search(arr, arr[i])
            print("{},{}".format(idx, arr[idx]), end=".")

        
---
