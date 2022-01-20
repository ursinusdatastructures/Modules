---
layout: exercise_python
permalink: "Module1/Exercise5"
title: "CS 371: Module 1: Classes Exercise"
excerpt: "CS 371: Module 1: Classes Exercise"
canvasasmtid: "140170"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video5"
  next: "./Video6"
  points: 1.5
  instructions: "<p>Define an instance method, <code>reset_birthday</code>, which resets the age of a <code>Person</code> object to be 0.</p>"
  goals:
    - Work with classes and objects in python
    - Implement object instance methods in python
    
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
        chris.reset_birthday()
        for i in range(32):
          chris.celebrate_birthday()
        print(chris)
        
---
