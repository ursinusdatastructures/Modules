---
layout: exercise_python
permalink: "Module19/Exercise3"
title: "CS 371: Module 19: Exercise 3: Building Huffman Trees"
excerpt: "CS 371: Module 19: Exercise 3: Building Huffman Trees"
canvasasmtid: "116902"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video3"
  points: 1.5
  instructions: "Fill in the <code>HuffmanTree</code> constructor by using a priority queue to merge nodes together with smaller counts first."
  goals:
    - Manipulate nodes in a huffman tree tree
    - Work with object references in python
    - Use a python's heapq implementation of a priority queue
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("{'e': '000', ' ': '001', 'm': '01000', 'u': '01001', 'r': '0101', 'k': '0110000', 'x': '01100010', 'j': '011000110', 'z': '0110001110', 'q': '0110001111', 'b': '011001', 'h': '01101', 's': '0111', 'n': '1000', 'd': '10010', 'c': '10011', 'i': '1010', 'o': '1011', 'a': '1100', 'y': '110100', 'f': '110101', 'l': '11011', 't': '1110', 'g': '111100', '.': '111101', 'p': '111110', 'v': '1111110', 'w': '1111111'}")
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
    height: 850
    code: | 
          from heapq import heappush, heappop

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
                  pass # We're skipping this here since we're focused on the Huffman tree

              def get_codebook(self):
                  codebook = {}
                  if self.root:
                      self.root.build_codebook(codebook, [])
                  return codebook
          
          # Inherit from the BCBTree class.  The only thing that
          # changes is the constructor
          class HuffmanTree(BCBTree): 
              def __init__(self, counts):
                  nodes = []
                  for key, count in counts.items():
                      heappush(nodes, (count, TreeNode(key)))
                  while len(nodes) > 1:
                      (count1, n1) = heappop(nodes)
                      (count2, n2) = heappop(nodes)
                      ## TODO: Create a new node with n1 on the left and n2
                      ## on the right.  Then, add this node to the heap with
                      ## a count equal to the sum of the counts of the two nodes
                  self.root = nodes[0][1]


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        counts = {'t': 247577342738, 'h': 106367962556, 'e': 349588141984, 'o': 228025627088, 'f': 61328927423, 'a': 243662684512, 'n': 207910712159, 'd': 107605388542, 'i': 223353030415, 'r': 201896673641, 's': 207080253606, 'b': 49798922187, 'y': 52941043438, 'w': 44294405401, 'u': 86950627146, 'm': 84155576549, 'l': 130649920346, 'v': 34402346309, 'c': 113913698859, 'p': 77553040250, 'g': 63045208347, 'k': 24380950863, 'x': 9151143994, 'j': 7637833834, 'z': 4192477980, 'q': 4218467887, ' ': 349588141985, '.': 69917628396}
        T = HuffmanTree(counts)
        print(T.get_codebook())

---
