---
layout: exercise_python
permalink: "Module3/Exercise1"
title: "CS 371: Module 3: Part 1"
excerpt: "CS 371: Module 3: Part 1"
canvasasmtid: "111826"
canvaspoints: "1"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1
  instructions: "<p>Fill in the <code>find</code> method in the bubble set implementation of disjoint sets below.</p>"
  goals:
    - To manipulate variables and types in python
    - To apply arithmetic expressions in python
    
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
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 800
    code: | 
        # List of lists, where each inner list corresponds to a bubble
        class MyDisjointSet:
            def __init__(self, N):
                self.N = N
                self._bubbles = []
                for i in range(N):
                    self._bubbles.append({i})
            
            def _find_i(self, i):
                """
                Find the index of the bubble that holds a particular
                value in the list of bubbles
                Parameters
                ----------
                i: int
                    Element we're looking for
                
                Returns
                -------
                Index of the bubble containing i
                """
                index = -1
                k = 0
                while k < len(self._bubbles) and index == -1:
                    if i in self._bubbles[k]:
                        index = k
                    k += 1
                return index
                        
            
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
                idx_i = self._find_i(i)
                idx_j = self._find_i(j)
                if idx_i != idx_j:
                    # Merge lists
                    # Decide that bubble containing j will be absorbed into
                    # bubble containing i
                    self._bubbles[idx_i] |= self._bubbles[idx_j]
                    # Remove the old bubble containing j
                    self._bubbles = self._bubbles[0:idx_j] + self._bubbles[idx_j+1::]


  - filename: "Test Code Block"
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
        
---
