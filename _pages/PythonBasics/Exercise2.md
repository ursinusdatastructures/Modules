---
layout: exercise_python
permalink: "Module1/Exercise2"
title: "CS 271: Module 1: Python Basics Part 2"
excerpt: "CS 271: Module 1: Python Basics Part 2"
canvasasmtid: "207292"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 1.5
  instructions: "<p>One thing I find myself doing all the time is converting formats of multimedia data with python scripts.  Part of this is just getting the file paths correct.  Let's say I wanted to convert an image file with a .jpg format to a .png format.  Write the code comes up with the correct .png target filename using string slices and string concatenation.  <b>Hint:</b> You can use a negative index as the end of a slice.</p>"
  goals:
    - To use slicing notation in python
    - To apply string concatenation in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("chris.png_celia.png_drscoville.png")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("chris.jpg_celia.jpg_drscoville.jpg")
      feedback: "Try again.  Looks like the filenames are still in jpg format." 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
         def convert_format(filename):
             """
             Convert the file ending from .jpg to .png
             Parameters
             ----------
             filename: string
              Name of some file that ends in .jpg
             """
             ## TODO: Change result so that it ends with .png
             result = filename
             return result


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the method
        print(convert_format("chris.jpg"), end='_')
        print(convert_format("celia.jpg"), end='_')
        print(convert_format("drscoville.jpg"))
        
---
