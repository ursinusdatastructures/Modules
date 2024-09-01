---
layout: exercise
language: "python"
permalink: "BinarySearch/Exercise1"
title: "CS 271: Binary Search Module"
excerpt: "CS 271: Binary Search Module"
canvasasmtid: "215339"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "../AmortizedModule/Video1"
  points: 2
  instructions: "<p>Tweak the implementation of binary search so that if a target shows up at multiple places, instead of returning the lowest index where it occurs, return the largest index where it occurs.  As a hint, instead of rounding down the average between <code>lo</code> and <code>hi</code>, round it up (using <code>math.ceil</code>).  Also, switch back to <code>if target < arr[mid]:</code> and change the logic accordingly</p>"
  goals:
    - To manipulate variables and types in python
    - To implement binary search
    - To tweak binary search to return the largest index when there are ties
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("1.7.68")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("0.5.65")
      feedback: "Try again.  It looks like you're still returning the lowest index." 
 
files:
  - filename: "student.py"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
        import math

        def binarysearch(arr, target):
            """
            arr: ndarray(N)
                An array of elements that are sorted
            target: float
                Element I'm looking for

            Returns
            -------
            idx: int
                Index where we found the element, or -1 if the
                element isn't there
                NOTE: This version will always return the leftmost index
                of a contiguous chunk where target occurs multiple times
            """
            lo = 0
            hi = len(arr)-1
            while lo != hi: # Keep going until we converge to 1 element
                mid = lo + (hi-lo)//2 
                if target > arr[mid]:
                    lo = mid + 1
                else:
                    hi = mid
            idx = -1
            if arr[lo] == target:
                idx = lo
            return idx


  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the method
        arr = [0,0,1,4,5,9,9,9,12,14,17,19,19,20,21,23,25,28,29,31,31,32,32,34,35,36,36,37,38,39,39,41,42,44,46,47,47,49,53,55,57,57,58,58,64,64,65,65,65,67,67,69,70,72,74,75,77,79,79,80,81,82,83,87,87,88,88,88,88,99]
        s = "{}".format(binarysearch(arr, 0))
        s = s + ".{}".format(binarysearch(arr, 9))
        s = s + ".{}".format(binarysearch(arr, 88))
        print(s)
        
openFilesOnLoad: ["main.py", "student.py"]
---
