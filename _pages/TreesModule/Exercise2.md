---
layout: exercise_python
permalink: "TreesModule/Exercise2"
title: "CS 371: Trees Module: Exercise 2: Inorder Traversal"
excerpt: "CS 371: Trees Module: Exercise 2: Inorder Traversal"
canvasasmtid: "145385"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 2
  instructions: "Complete the recursive calls to create a working implementation of inorder traversal."
  goals:
    - Use recursion to implement inorder traversal of a binary tree
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("3.7.8.9.10.12.13.14.15.20")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("4.9.")
      feedback: "Try again.  It looks like you haven't finished filling in the tree yet"
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: true
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
          
          def make_left_subtree():
              node = TreeNode(7)
              node.left = TreeNode(3)
              node.right = TreeNode(9)
              node.right.left = TreeNode(8)
              return node

          def make_right_subtree():
              node = TreeNode(15)
              node.left = TreeNode(12)
              node.right = TreeNode(20)
              node.left.right = TreeNode(14)
              node.left.right.left = TreeNode(13)
              return node;

          def make_tree():
              T = BinaryTree()
              T.root = TreeNode(10)
              T.root.left = make_left_subtree()
              T.root.right = make_right_subtree()
              return T

  - filename: "Inorder Code"
    name: inorder
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
          def inorder(node):
              ## TODO: Finish this.  As a stopping
              ## condition, be sure to only visit a child
              ## node if it is not None.  The way to see if
              ## an object "obj" in python is not none is 
              ## to simply say
              ## if obj:
              print(node.value, end='.')



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        T = make_tree()
        inorder(T.root)
---
