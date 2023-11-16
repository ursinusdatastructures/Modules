---
layout: exercise_python
permalink: "Graphs/Exercise1"
title: "CS 271: Graph Degree"
excerpt: "CS 271: Graph Degree"
canvasasmtid: "190325"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1.5
  instructions: "The \"degree\" of a vertex is defined as the number of neighbors it has.  Fill in the method below to compute the average degree of all of the vertices in the graph."
  goals:
    - Manipulate basic graph data structures
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("1.6_2")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("0_0")
      feedback: "Try again.  It looks like you're still returning an average degree of 0"
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: false
    isvisible: true
    height: 600
    code: | 
          class GraphEdgeSet:
              def __init__(self):
                  self.V = set([])
                  self.E = set([])
              
              def add_vertex(self, v):
                  self.V.add(v)
              
              def add_edge(self, u, v):
                  self.E.add((u, v))
              
              def get_neighbors(self, v):
                  neighbs = set([])
                  for (a, b) in self.E:
                      if a == v:
                          neighbs.add(b)
                      elif b == v:
                          neighbs.add(a)
                  return neighbs
              
              def get_avg_degree(self):
                  """
                  Compute the average degree of a vertex in the graph
                  """
                  deg = 0
                  ## TODO: Fill this in
                  return deg


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        graph = GraphEdgeSet()
        for v in range(5):
            graph.add_vertex(v)
        graph.add_edge(0, 1)
        graph.add_edge(1, 2)
        graph.add_edge(1, 4)
        graph.add_edge(4, 3)
        s = "{}".format(graph.get_avg_degree())
        graph.add_edge(1, 3)
        s += "_{}".format(graph.get_avg_degree())
        print(s)
---
