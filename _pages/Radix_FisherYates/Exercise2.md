---
layout: exercise
language: pyodide
permalink: "RadixFisherYates/Exercise2"
title: "CS 271: Fisher-Yates Shuffling Code"
excerpt: "CS 271: Fisher-Yates Shuffling Code"
canvasasmtid: "207263"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 2
  instructions: "Fill in the code to an implementation of Fisher-Yates shuffling which shuffles the items in place from the back forward.  In particular, at each step i, you should pick an index between 0 and N-i-1, inclusive, and then swap the element at index i with this random index.  Recall that <code><a href = \"https://numpy.org/doc/stable/reference/random/generated/numpy.random.randint.html\">np.random.randint(num)</a></code> returns numbers between 0 and num-1, inclusive."
  packages: "numpy"
  goals:
    - Implement an O(N), in-place algorithm for shuffling that samples uniformly across all possible permutations
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    logToConsole(pyodide.globals.get("arr"));
  correctcheck: |
    pyodide.globals.get("arr") == "[2 8 4 9 1 6 7 3 0 5]"
  incorrectchecks:
    - incorrectcheck: |
        pyodide.globals.get("arr") == "[2 8 4 1 9 6 7 3 0 5]"
      feedback: "Try again.  You're very close!  But np.random.randint(N-i-1) only returns indices up to N-i-2"

files:
  - filename: "student.py"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 300
    code: | 
          import numpy as np

          def swap(arr, i, j):
              temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp
          
          def shuffle(arr):
              N = len(arr)
              for i in range(N-1):
                  # TODO: Pick a random index between
                  # 0 and N-i-1, inclusive, and swap this 
                  # index with index N-i-1
                  pass



  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        np.random.seed(0)
        arr = np.arange(10)
        shuffle(arr)
        arr = "{}".format(arr)
        
openFilesOnLoad: ["main.py", "student.py"]
---
