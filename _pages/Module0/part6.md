---
layout: exercise_python
permalink: "Module0/Part6"
title: "CS 371: Module 0 Warmup"
excerpt: "CS 371: Module 0 Warmup"
canvasasmtid: "109093"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Part5"
  next: "./Part7"
  points: 1.5
  instructions: "A lot of the learning in the course will occur with pre-class modules, which are sequences of short videos interspersed with coding exercises that are autograded.  To make sure the coding exercises work for you, please modify the Python program below so that it prints \"Hello CS 371\".  If this works, you should get an e-mail.  If you are off campus, you will need to connect via VPN to get credit.  <b>Please be sure to do this for every module!</b>  <a href = \"https://www.ursinus.edu/offices/information-technology/technology-support/hardware-and-software-help/remote-connections-and-vpn/\">Click here</a> to see directions on how to use the Ursinus VPN."
  goals:
    - To manipulate python code live in the browser and to test auto-submission to e-mail and canvas
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("Hello CS 371")   || pos.includes("Hello CS371")   
 
files:
  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: false
    isvisible: true
    code: |
        print("Hello World")
        
---
