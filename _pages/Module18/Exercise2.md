---
layout: exercise_python
permalink: "Module18/Exercise2"
title: "CS 371: Module 18: Exercise 2: BST Removal"
excerpt: "CS 371: Module 18: Exercise 2: BST Removal"
canvasasmtid: "116330"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 2
  instructions: "Complete the <code>remove</code> method in the <code>TreeNode</code> class that removes a key from the tree, if it exists.  You will have to fill in a small part in <code>maxnode</code> as well as a small part in <code>remove</code>.  If you are stuck, check out section 17.4 of the book.  The code is very similar, I've just added more comments."
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
    pos.includes("True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("True.False.True.No key 11.True.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.No key 18.True.True.False.True.False.True.False.True.False.True.No key 29.True.True.No key 15.True.True.False.True.False.True.False.True.False.True.No key 20.True.True.False.True.No key 8.True.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.No key 23.True.True.No key 36.True.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False")
      feedback: "Try again.  It looks like you're either still using the default code or you're not actually swapping any nodes."
    - incorrectcheck: |
        pos.includes("True.False.True.False.True.No key 10.True.True.False.True.No key 2.True.True.False.True.False.True.False.True.False.True.No key 4.True.True.False.True.False.True.False.True.False.True.False.True.No key 7.True.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.False.True.No key 13.True.True.False.True.No key 5.True.True.False.True.False.True.False.True.No key 1.True.True.No key 12.True.True.False.True.False.True.No key 6.True.True.False.True.False.True.No key 21.True.True.No key 19.True.True.No key 9.True.True.False.True.False.True.False.True.False.True.False.True.False")
      feedback: "Try again.  It looks like you're doing the swapping correctly, but your maxnode method isn't going all the way down the right."
files:
  - filename: "Tree Code"
    name: tree
    ismain: false
    isreadonly: false
    isvisible: true
    height: 800
    code: | 
            class TreeNode(object):
                def __init__(self, key):
                    self.key = key
                    self.left = None
                    self.right = None
                
                def maxnode(self):
                    """
                    Return the node with the greatest key in the
                    subtree rooted at this node
                    """
                    res = self
                    ## TODO: Fill this in
                    ## If there is a right subtree of this node,
                    ## then keep searching that recursively.  Otherwise,
                    ## this node is the greatest node by default
                    return res
                
                def _swapwith(self, other):
                    self.key, other.key = other.key, self.key

                def remove(self, key):
                    if key == self.key:
                        # We've found the node to remove
                        ## Step 1: Handle the case with one or no children
                        if not self.left:
                            return self.right
                        if not self.right:
                            return self.left
                        ## Step 2: Handle the case with two children
                        # Step 2a: Find the maximum node in the left
                        # subtree, then swap that node's key with this
                        # node's key

                        ## TODO: Fill this in

                        # Step 2b: Remove the node from the left subtree
                        # where it now resides
                        self.left = self.left.remove(key)
                    elif key < self.key:
                        if self.left:
                            self.left = self.left.remove(key)
                        else:
                            print("No key {}".format(key), end='.')
                    elif key > self.key:
                        if self.right:
                            self.right = self.right.remove(key)
                        else:
                            print("No key {}".format(key), end='.')
                    return self
                    
                def add(self, key):
                    if key < self.key:
                        if self.left:
                            self.left.add(key)
                        else:
                            self.left = TreeNode(key)
                    elif key > self.key:
                        if self.right:
                            self.right.add(key)
                        else:
                            self.right = TreeNode(key)

                def contains(self, key):
                    res = False
                    if self.key == key:
                        res = True
                    else:
                        if self.left:
                            res = self.left.contains(key)
                        if not res and self.right:
                            res = self.right.contains(key)
                    return res


            class BinaryTree(object):
                def __init__(self):
                    self.root = None
                
                def remove(self, key):
                    if self.root:
                        self.root = self.root.remove(key)

                def add(self, key):
                    if self.root:
                        self.root.add(key)
                    else:
                        self.root = TreeNode(key)

                def contains(self, key):
                    res = False
                    if self.root:
                        res = self.root.contains(key)
                    return res

  - filename: "Tree Example"
    name: treeex
    ismain: false
    isreadonly: true
    isvisible: true
    code: | 
            def make_tree():
                T = BinaryTree()
                for key in [36, 15, 11, 23, 29, 39,  8, 44, 30, 46, 47,  3, 40, 25, 43, 10, 41, 34, 27, 20, 28,  0, 12, 18, 42, 14, 31, 26,  4, 13, 17,  7,  9, 19, 38, 35, 33, 22, 49, 21, 16, 32,  5, 37, 48,  1, 24,  6,  2, 45]:
                    T.add(key)
                return T




  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        T = make_tree()
        for i in [28, 11, 10, 41,  2, 27, 38, 31, 22,  4, 33, 35, 26, 34, 18,  7, 14, 45, 48, 29, 15, 30, 32, 16, 42, 20, 43,  8, 13, 25,  5, 17, 40, 49, 1, 12, 37, 24,  6, 23, 36, 21, 19,  9, 39, 46,  3,  0, 47, 44]:
            print(T.contains(i), end='.')
            T.remove(i)
            print(T.contains(i), end='.')
---
