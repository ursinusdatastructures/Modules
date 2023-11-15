---
layout: exercise_python
permalink: "Graphs/Exercise3"
title: "CS 271: Conversion To Adjacency Matrix"
excerpt: "CS 271: Conversion To Adjacency Matrix"
canvasasmtid: "190327"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video3"
  points: 1.5
  instructions: "Fill in the method <code>get_matrix</code> to compute an adjacency matrix associated to the graph."
  goals:
    - Code up the definition of an adjacency matrix in a graph
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("[[1, 1, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0], [0, 1, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0]]_[[1, 1, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0], [0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1], [0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0]]")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]_[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]")
      feedback: "Try again.  It looks like you're still returning a matrix of all 0s"
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: false
    isvisible: true
    height: 600
    code: | 
          class AdjacencyGraph:
              def __init__(self):
                  self.neighbs = {}
              
              def add_vertex(self, v):
                  self.neighbs[v] = set([])
              
              def add_edge(self, u, v):
                  self.neighbs[u].add(v)
                  self.neighbs[v].add(u)
              
              def get_neighbors(self, v):
                  return self.neighbs[v]
              
              def is_edge(self, u, v):
                  return u in self.neighbs[v] and v in self.neighbs[u]
              
              def get_matrix(self):
                  """
                  Compute the adjacency matrix associated to this graph
                  """
                  V = len(self.neighbs) # Number of vertices
                  matrix = [[0]*V for i in range(V)] # Setup a VxV matrix of all 0s
                  ## TODO: Fill this in
                  return matrix


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        graph = AdjacencyGraph()
        for v in range(6):
            graph.add_vertex(v)
        graph.add_edge(0, 1)
        graph.add_edge(1, 2)
        graph.add_edge(1, 4)
        graph.add_edge(4, 3)
        graph.add_edge(1, 3)
        graph.add_edge(0, 0)
        s = "{}".format(graph.get_matrix())
        graph.add_edge(3, 5)
        s += "_{}".format(graph.get_matrix())
        print(s)
---
