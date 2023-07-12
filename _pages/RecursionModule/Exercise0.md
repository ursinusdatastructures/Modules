---
layout: exercise_python
permalink: "/RecursionModule/Exercise0"
title: "CS 271: Dictionary Exercise"
excerpt: "CS 271: Dictionary Exercise"
canvasasmtid: "175629"
canvaspoints: "1"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video0"
  next: "./Video2"
  points: 1
  instructions: "<p>The code below sets up a python dictionary where the keys are strings of peoples names and the associated values are int which represent their grade.  Fill in the method <code>grade_chris</code> to give \"chris\" a grade of 100.</p>"
  goals:
    - To implement recursive functions with proper stopping conditions
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("100")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("0.0.0")
      feedback: "Try again.  You need to return the frequency in hz, not 0"
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 200
    code: | 
         def grade_chris(grades):
            """
            Give "chris" a grade of 100

            Parameters
            ----------
            grades: dict (string name) => (int grade)
              A dictionary of grades
            """
            ## TODO: Give "chris" a grade of 100
            pass


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        grades = {"bingus":70, "spoingus":95}
        grade_chris(grades)
        print(grades["chris"])

        
---
