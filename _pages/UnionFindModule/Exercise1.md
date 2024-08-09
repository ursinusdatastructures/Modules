---
layout: exercise_python
permalink: "UnionFindModule/Exercise1"
title: "CS 271: Disjoint Set Naive Implementation"
excerpt: "CS 271: Disjoint Set Naive Implementation"
canvasasmtid: "207257"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1.5
  instructions: "<p>Fill in the <code>find</code> method in the naive bubble list implementation of disjoint sets below.</p>"
  goals:
    - To use instance methods in python
    - To implement an ADT
    
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
    height: 1200
    code: | 
        # List of lists, where each inner list corresponds to a bubble
        class DJSet:
            def __init__(self, N):
                self.N = N
                self.bubbles = []
                for i in range(N):
                    self.bubbles.append([i])
                #self.bubbles = [[i] for i in range(N)]
            
            def _get_index_of(self, i):
                ret = -1
                idx = 0
                found = False
                while not found and idx < len(self.bubbles):
                    bubble = self.bubbles[idx]
                    for b in bubble:
                        if i == b:
                            ret = idx
                            found = True
                    idx += 1
                return ret
            
            def union(self, i, j):
                """
                Void method that unions two elements
                
                Parameters
                ----------
                i: int
                    First element to union
                j: int
                    Second element to union
                """
                # Figure out what bubble i is in
                idx_i = self._get_index_of(i)
                # Figure out what bubble j is in
                idx_j = self._get_index_of(j)
                if idx_i != idx_j:
                    # Create a new bubble that merges the two
                    bubble = self.bubbles[idx_i] + self.bubbles[idx_j]
                    self.bubbles.append(bubble)
                    # Delete the original two bubbles
                    bubbles = []
                    for i in range(len(self.bubbles)):
                        if i != idx_i and i != idx_j:
                            bubbles.append(self.bubbles[i])
                    self.bubbles = bubbles
            
            def find(self, i, j):
                """
                A method that says if two elements belong to
                the same set
                
                Parameters
                i: int
                    First element
                j: int
                    Second element
                
                Returns
                -------
                True if i and j belong to the same set, and False otherwise
                """
                pass


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the class
        s = DJSet(10)
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
