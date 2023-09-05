---
layout: exercise_python
permalink: "TreesModule/Exercise3"
title: "CS 271: Trees Module: Exercise 3: Preorder Traversal"
excerpt: "CS 271: Trees Module: Exercise 3: Preorder Traversal"
canvasasmtid: "175638"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video3"
  points: 1.5
  instructions: "Complete the recursive calls to create a working implementation of preorder traversal."
  goals:
    - Use recursion to implement preorder traversal of a binary tree
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("10.7.3.9.8.15.12.14.13.20")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("3.8.9.7.13.14.12.20.15.10")
      feedback: "Try again.  It looks like you implemented postorder.  Move the print statement to before the recursive calls"
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
          def preorder(node):
              ## TODO: Finish this.  As a stopping
              ## condition, be sure to only visit a child
              ## node if it is not None.
              print(node.value, end='.')



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        T = make_tree()
        preorder(T.root)
---
