---
layout: exercise
language: python
permalink: "TreesModule/Exercise4"
title: "CS 371: Trees Module: Exercise 4: BST Search"
excerpt: "CS 371: Trees Module: Exercise 4: BST Search"
canvasasmtid: "145387"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video4"
  points: 2
  instructions: "Fill in the <code>contains</code> method that returns <code>True</code> if the tree contains a particular value, or <code>False</code> otherwise."
  goals:
    - Manipulate nodes in a binary search tree
    - Work with object references in python
    - Implement recursive methods in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("True.True.False.False.False.True.False")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("False.False.False.False.False.False.False")
      feedback: "Try again.  It looks like you're either still using the default code or you're not finding any of the nodes that do exist."
    - incorrectcheck: |
        pos.includes("False.False.False.False.False.True.False")
      feedback: "Try again.  It looks like even if the node exists in a left subtree, you're still returning False.  Be sure to only check the right subtree if the node wasn't found in the left subtree"
files:
  - filename: "tree.py"
    name: tree.py
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
                
                def contains(self, value):
                    res = False
                    if self.value == value:
                        res = True
                    else:
                        if self.left:
                            res = self.left.contains(value)
                        ## TODO: Recurse on the right child
                    return res
                    

            class BinaryTree(object):
                def __init__(self):
                    self.root = None
                
                def contains(self, value):
                    res = False
                    if self.root:
                        res = self.root.contains(value)
                    return res


  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        def make_left_subtree():
            node = TreeNode(7)
            node.left = TreeNode(3)
            node.right = TreeNode(9)
            node.right.left = TreeNode(8)
            return node

        def make_right_subtree():
            node = TreeNode(16)
            node.left = TreeNode(11)
            node.right = TreeNode(20)
            node.left.right = TreeNode(14)
            node.left.right.right = TreeNode(15)
            node.left.right.left = TreeNode(13)
            node.left.right.left.left = TreeNode(12)
            return node

        def make_tree():
            T = BinaryTree()
            T.root = TreeNode(10)
            T.root.left = make_left_subtree()
            T.root.right = make_right_subtree()
            return T

        T = make_tree()
        print(T.contains(11), end='.')
        print(T.contains(12), end='.')
        print(T.contains(2), end='.')
        print(T.contains(0), end='.')
        print(T.contains(19.5), end='.')
        print(T.contains(20), end='.')
        print(T.contains(17), end='.')

openFilesOnLoad: ["main.py", "tree.py"]
---
