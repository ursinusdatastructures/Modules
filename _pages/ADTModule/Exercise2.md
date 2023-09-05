---
layout: exercise_python
permalink: "/ADTModule/Exercise2"
title: "CS 271: ADTs: LinkedList Remove All Instances"
excerpt: "CS 271: ADTs: LinkedList Remove All Instances"
canvasasmtid: "186607"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  points: 2
  instructions: "<p>Modify the <code>remove</code> method of the <code>LinkedList</code> class so that it removes <b>all copies</b> of <code>obj</code>, not just the first one.  To keep things simple, we're going to do an inefficient version of this where we can start at the beginning of the list each time, which could take ~N<SUP>2</SUP> operations in the worst case, but it will be much simpler than the N version.  Then this is the last exercise in this module.</p>"
  packages: "numpy"
  goals:
      - Work with object references in python
      - Work with linked lists in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("2==>5==>0==>0==>6==>5==>0==>6==>6==>2==>2==>5==>")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("4==>4==>2==>5==>4==>0==>0==>6==>4==>3==>3==>3==>5==>0==>6==>6==>4==>2==>2==>1==>1==>5==>")
      feedback: "Try again.  It looks like you haven't updated the <code>remove</code> method yet." 


files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 1100
    code: | 
            class Node:
                def __init__(self, obj):
                    """
                    Parameters
                    ----------
                    obj: object
                        Some object we want to store in this container
                    """
                    self.obj = obj
                    self.next = None # Like "null" in C++
                    
                    
            class LinkedList:
                def __init__(self):
                    self.head = None
                
                def add_first(self, obj):
                    new_node = Node(obj)
                    new_node.next = self.head
                    self.head = new_node
                    
                def contains(self, obj):
                    cursor = self.head
                    found = False
                    while not found and cursor: # If cursor is None, this is false
                        if cursor.obj == obj:
                            found = True
                        cursor = cursor.next
                    return found
                
                def remove(self, obj):
                    if self.head:
                        cursor = self.head
                        if obj == self.head.obj:
                            ## Special case
                            self.head = self.head.next
                        else:
                            while cursor.next and cursor.next.obj != obj:
                                cursor = cursor.next
                            if cursor.next:
                                ## Route around the node we're trying to remove
                                cursor.next = cursor.next.next

                        ## TODO: If obj is still in the list, make a recursive
                        ## call to remove
                
                def print_elements(self):
                    cursor = self.head
                    while cursor: # If cursor is None, this is false
                        print(cursor.obj, end="==>")
                        cursor = cursor.next



  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        mylist = LinkedList()
        for i in [5, 1, 1, 2, 2, 4, 6, 6, 0, 5, 1, 3, 3, 3, 4, 6, 0, 0, 4, 5, 2, 3, 4, 4, 4]:
            mylist.add_first(i)
        mylist.remove(1)
        mylist.remove(3)
        mylist.remove(4)
        mylist.print_elements()
        
---
