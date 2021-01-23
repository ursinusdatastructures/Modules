---
layout: exercise_python
permalink: "Module2/Exercise2"
title: "CS 371: Module 2: Part 2"
excerpt: "CS 371: Module 2: Part 2"
canvasasmtid: "111323"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 1.5
  instructions: "<p>Create a static variable in the <code>Person</code> class called <code>num_people</code> which starts off as 0 and increments every time a new object of type <code>Person</code> is constructed.</p>"
  goals:
    - Work with classes and objects in python
    - Define and manipulate static variables in python classes
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("Person name is chris, age is 32")
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
          class Person:
              def __init__(self, name, age):
                  self._name = name
                  self._age = age
              
              def celebrate_birthday(self):
                  self._age += 1
              
              def __str__(self):
                  return "Person name is {}, age is {}".format(self._name, self._age)


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the method
        chris = Person("chris", 31)
        celia = Person("celia", 30)
        james = Person("james", 23)
        brock = Person("brock", 80)
        print(Person.num_people)
        
---
