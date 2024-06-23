---
layout: exercise_pyodide
permalink: "/ADTModule/Exercise1"
title: "CS 271: ADTs: ArraySet remove"
excerpt: "CS 271: ADTs: ArraySet remove"
canvasasmtid: "186606"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  points: 2
  instructions: "<p>Finish implementing the <code>remove</code> method in the <code>ArraySet</code> class</p>"
  packages: "numpy"
  goals:
      - Manipulate arrays and array indices in python
      - Implement abstract data types in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  correctcheck: |
    pyodide.globals.res.includes("True.False.False.True.True.True.True.False.True.True.True.True.True.True.True.True.True.True.True.False")
  incorrectchecks:
    - incorrectcheck: |
        pyodide.globals.res.includes("True.True.True.True.True.True.True.True.True.True.True.True.True.True.True.True.True.True.True.True")
      feedback: "Try again.  It looks like you haven't changed <code>self.arr</code> yet.  If you made a new array, be sure to overwrite self.arr with that new array!" 

files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 1100
    code: | 
          import numpy as np

          class ArraySet:
              def __init__(self):
                  self.arr = np.array([]) # Numpy array is fixed in size
                  # Behaves more like a Java/C++ array; if we want to add
                  # or remove something from the array, we have to create
                  # an entirely new array of a different size and fill that in
              
              def get_idx(self, obj):
                  """
                  A helper method for __contains__ and remove
                  Return the index at which obj exists in the array, or -1
                  if it's not there
                  """
                  idx = -1
                  i = 0
                  while i < len(self.arr) and idx == -1:
                      if self.arr[i] == obj:
                          idx = i
                      else:
                          i += 1
                  return idx

              def __contains__(self, obj):
                  return self.get_idx(obj) != -1
              
              def add(self, obj):
                  # if not self.__contains__(obj):
                  if not obj in self:
                      ## Step 1: Make an array that's one bigger
                      N = len(self.arr)
                      new_arr = np.zeros(N+1) # Make an array of all 0's that 
                      # has one extra element
                      
                      ## Step 2: Copy everything over from the original array
                      for i in range(N):
                          new_arr[i] = self.arr[i]
                          
                      ## Step 3: Add this new object to the end
                      new_arr[N] = obj
                      
                      self.arr = new_arr
                  
              
              def remove(self, obj):
                  ## First, find where the element is
                  idx = self.get_idx(obj)
                  if idx == -1:
                      raise KeyError("Cannot remove non-existant object {}".format(obj))
                  else:
                      ## TODO: Fill this in
                      ## Ceate a new array where you copy over everything but the 
                      ## element at idx
                      pass



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        myset = ArraySet()
        for x in range(20):
            myset.add(x)
        myset.remove(2)
        myset.remove(7)
        myset.remove(1)
        myset.remove(19)
        res = ""
        for x in range(20):
            res = res + "{}.".format(x in myset)
        
---
