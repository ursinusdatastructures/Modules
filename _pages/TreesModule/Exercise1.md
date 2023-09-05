---
layout: exercise_python
permalink: "TreesModule/Exercise1"
title: "CS 271: Trees Module: Exercise 1: Constructing Python Trees"
excerpt: "CS 271: Trees Module: Exercise 1: Constructing Python Trees"
canvasasmtid: "175636"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1b"
  next: "./Video2"
  points: 1.5
  instructions: "Fill in the <code>make_tree()</code> method to create the binary tree pictured below:<BR><img src = \"../images/TreesModule/Exercise1.svg\">"
  goals:
    - Manipulate nodes in a binary tree data structure
    - Work with object references in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("1.4.8.9.15.20.25")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("4.9.")
      feedback: "Try again.  It looks like you haven't finished filling in the tree yet"
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: false
    isvisible: true
    height: 600
    code: | 
          class TreeNode(object):
              def __init__(self, value):
                  self.value = value
                  self.left = None
                  self.right = None

          class BinaryTree(object):
              def __init__(self):
                  self.root = None
          
          def traverse(N):
              if N.left:
                  traverse(N.left)
              print(N.value, end='.')
              if N.right:
                  traverse(N.right)

          def make_tree():
              T = BinaryTree()
              T.root = TreeNode(9)
              T.root.left = TreeNode(4)
              ## TODO: Finish this
              return T


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        T = make_tree()
        traverse(T.root)
---
