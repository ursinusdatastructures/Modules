---
layout: exercise_python
permalink: "HW6/Exercise0"
title: "CS 371: SPTQ"
excerpt: "CS 472: SPTQ"
canvasasmtid: "117734"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  next: "./Video1"
  points: 2
  instructions: "<p>Please fill out your <a href = \"https://gummi.ursinus.edu/Blue\">SPTQ</a> for the course.  To certify that you have finished, change the method <code>finished_sptq()</code> to return True.</p><p>As a general note, giving and receiving feedback are practiced skills, and we're not born with these skills.  In this exercise, you will practice giving constructive feedback.  Constructive feedback should be both <code>specific</code> and <code>actionable</code>.  If you feel positive about something in the course, say why specifically and what I should keep doing.  If it's negative, say why specifically and what I might do differently.</p>"
  goals:
    - Practice giving constructive feedback
    
processor:  
  correctfeedback: "Thank you!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
        pos.includes("Finished")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("Whoops")
      feedback: "Please finish your SPTQ and return True from the method once you have done so"
files:
  - filename: "SPTQ Code"
    ismain: false
    name: sptq
    isreadonly: false
    isvisible: true
    height: 100
    code: |
        def finished_sptq():
            # Change this to return True to certify
            # that you have finished your SPTQ
            return False

  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        if finished_sptq():
            print("Finished")
        else:
            print("Whoops")

---
