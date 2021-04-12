---
layout: exercise_python
permalink: "Module19/Exercise2"
title: "CS 371: Module 19: Exercise 2: Decoding from BCB Trees"
excerpt: "CS 371: Module 19: Exercise 2: Decoding from BCB Trees"
canvasasmtid: "116887"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 1.5
  instructions: "Fill in the <code>decode</code> method of the <code>BCBTree</code> class to convert a binary string back into its original representation according to the code stored in the tree."
  goals:
    - Manipulate nodes in a binary codebook tree
    - Work with object references in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("hello world.i love cs")
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

          class BCBTree(object):
              def __init__(self, chars):
                  nodes = deque()
                  for c in chars:
                      nodes.append(TreeNode(c))
                  while len(nodes) > 1:
                      # Take first two out of line
                      n1 = nodes.popleft()
                      n2 = nodes.popleft()
                      # Merge the two by making a new node
                      n12 = TreeNode()
                      n12.left = n1
                      n12.right = n2
                      # Add new node to the back of the line
                      nodes.append(n12)
                  # Last node left is root
                  self.root = nodes.pop()

              def decode(self, s):
                  ret = ""
                  if self.root:
                      # A node that stores where we are as we're walking the tree
                      node = self.root
                      # A binary string we're building as we walk from the root to a leaf
                      bstr = "" 
                      for b in s: # Loop through every 1/0 in the encoded string
                          if node.key:
                              ## TODO: Fill this in
                              ## Add on this node's character to ret
                              ## then go back to the root and reset bstr
                              pass
                          bstr += b
                          ## TODO: Fill this in
                          ## Move node to the left or right depending on b
                      if node.key:
                          ret += node.key
                  return ret



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        chars = ['y', 'r', 't', 'u', 'o', 'd', 'w', 'k', 'v', 'e', 'c', 'x', 'g', 's', 'n', 'h', 'z', 'b', 'q', 'a', 'p', '.', ' ', 'j', 'i', 'm', 'l', 'f']
        T = BCBTree(chars)
        s1 = "1011110001001000100110011110011100110001001001001101"
        s2 = "0000111100010011001000010001111101001010101"
        print(T.decode(s1)+"."+T.decode(s2))

---
