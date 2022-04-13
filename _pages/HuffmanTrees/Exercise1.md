---
layout: exercise_python
permalink: "HuffmanTrees/Exercise1"
title: "CS 371: Huffman Trees Module: Exercise 1: Constructing BCB Trees"
excerpt: "CS 371: Huffman Trees Module: Exercise 1: Constructing BCB Trees"
canvasasmtid: "146080"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1.5
  instructions: "Fill in the constructor of the <code>BCBTree</code> class, using a deque to construct a BCB tree from the bottom up, according to the pseudocode on the previous page.  Note that the <code>append</code> method of the deque class will add something to the end of it."
  goals:
    - Manipulate nodes in a binary codebook tree
    - Work with object references in python
    - Implement recursive methods in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("{'i': '0000', 'm': '0001', 'l': '0010', 'f': '0011', 'y': '01000', 'r': '01001', 't': '01010', 'u': '01011', 'o': '01100', 'd': '01101', 'w': '01110', 'k': '01111', 'v': '10000', 'e': '10001', 'c': '10010', 'x': '10011', 'g': '10100', 's': '10101', 'n': '10110', 'h': '10111', 'z': '11000', 'b': '11001', 'q': '11010', 'a': '11011', 'p': '11100', '.': '11101', ' ': '11110', 'j': '11111'}")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("False.False.False.False.False.False.False")
      feedback: "Try again.  It looks like you're either still using the default code or you're not finding any of the nodes that do exist."
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: false
    isvisible: true
    height: 800
    code: | 
          from collections import deque

          class TreeNode(object):
              def __init__(self, key = None):
                  self.key = key
                  self.left = None
                  self.right = None
          
              def build_codebook(self, codebook, bstr):
                  if self.key:
                      codebook[self.key] = "".join(bstr)
                  else:
                      bstr.append("0")
                      self.left.build_codebook(codebook, bstr)
                      bstr.pop()
                      bstr.append("1")
                      self.right.build_codebook(codebook, bstr)
                      bstr.pop()

          class BCBTree(object):
              def __init__(self, chars):
                  nodes = deque()
                  # First, add all of the leaf nodes with the requested characters
                  for c in chars:
                      nodes.append(TreeNode(c))
                  while len(nodes) > 1:
                      # Take first two out of line
                      n1 = nodes.popleft()
                      n2 = nodes.popleft()
                      # Merge the two by making a new node
                      
                      ## TODO: Fill this in

                      # Add new node to the back of the line
                      
                      ## TODO: Fill this in

                  # Last node left is root
                  self.root = nodes.pop()

              def get_codebook(self):
                  codebook = {}
                  if self.root:
                      self.root.build_codebook(codebook, [])
                  return codebook



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        chars = ['y', 'r', 't', 'u', 'o', 'd', 'w', 'k', 'v', 'e', 'c', 'x', 'g', 's', 'n', 'h', 'z', 'b', 'q', 'a', 'p', '.', ' ', 'j', 'i', 'm', 'l', 'f']
        T = BCBTree(chars)
        print(T.get_codebook())

---
