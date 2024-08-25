---
layout: exercise
language: python
permalink: "UnionFindModule/OptionalExercise"
title: "CS 271: Union Find Optional Exercise"
excerpt: "CS 271: Union Find Optional Exercise"
canvasasmtid: "207256"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 1
  instructions: "<p>This is an optional exercise.  Fill in the <code>find</code> method in the ID-based implementation of disjoint sets below.</p>"
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("False.True.True.False")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("False.False.False.False")
      feedback: "Try again.  Somehow you're still returning False for all of the finds, but some of them should be True." 
 
files:
  - filename: "student.py"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 750
    code: | 
        # Single list, each element is the ID of the corresponding object
        class MyDisjointSet:
            def __init__(self, N):
                self.N = N
                self._ids = list(range(N))
            
            def find(self, i, j):
                """
                Return true if i and j are in the same component, or
                false otherwise
                Parameters
                ----------
                i: int
                    Index of first element
                j: int
                    Index of second element
                """
                return False #TODO: This is a dummy value
            
            def union(self, i, j):
                """
                Merge the two sets containing i and j, or do nothing if they're
                in the same set
                Parameters
                ----------
                i: int
                    Index of first element
                j: int
                    Index of second element
                """
                # If i and j have different IDs, then we have to
                # merge the bubbles
                id_i = self._ids[i]
                id_j = self._ids[j]
                if id_i != id_j:
                    # Let's merge everything in the bubble containing j
                    # into the bubble containing i
                    # In other words, everything with id_j should now
                    # have id_i
                    for k, id_k in enumerate(self._ids):
                        if id_k == id_j:
                            self._ids[k] = id_i


  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the class
        s = MyDisjointSet(10)
        s.union(0, 2)
        s.union(1, 8)
        s.union(8, 7)
        
        print(s.find(0, 3), end='.')
        print(s.find(1, 7), end='.')
        s.union(1, 6)
        s.union(0, 1)
        print(s.find(0, 7), end='.')
        print(s.find(1, 9))
   
openFilesOnLoad: ["main.py", "student.py"]
---
