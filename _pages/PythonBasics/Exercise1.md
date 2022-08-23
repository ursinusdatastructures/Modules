---
layout: exercise_python
permalink: "Module1/Exercise1"
title: "CS 271: Module 1: Python Basics Part 1"
excerpt: "CS 271: Module 1: Python Basics Part 1"
canvasasmtid: "152496"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 1.5
  instructions: "<p>A group of Ursinus students wants to take a trip to The Poconos. The school wants students to use as many full buses as they can to hold the students, and anyone who's leftover should take a van.  As an example, suppose 87 students want to go on a field trip, a bus holds 10 people, and a van holds 4 people (yes, I know, these are small buses and vans). Then the most buses we can fill is 8 buses, but there are still 7 people leftover. We need 2 vans to hold those 7 people.</p><p>Modify the code below to compute the correct number of buses and vans.  The code has imported the <code>math</code> library, and you can use <code>math.ceil(number)</code> to round a number up and <code>math.floor(number)</code> to round a number down.  My solution had 3 lines and used the operators %, -, and /, as well as <code>math.ceil</code>.  You could have a few more lines to split stuff up if you wanted.  You could also have fewer lines!  But you should only need arithmetic operations; no loops, if statements, or anything like that (we will talk about those momentarily)</p>"
  goals:
    - To manipulate variables and types in python
    - To apply arithmetic expressions in python
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("8 Buses, 2 Vans.4 Buses, 1 Vans.0 Buses, 1 Vans")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("8.0 Buses, 2 Vans.4.0 Buses, 1 Vans.0.0 Buses, 1 Vans")
      feedback: "Try again.  You've got the right answer!  But make sure num_buses is an int by saying <code>num_buses = int(num_buses)</code>." 
    - incorrectcheck: |
        pos.includes("8 Buses, 2.0 Vans.4 Buses, 1.0 Vans.0 Buses, 1.0 Vans")
      feedback: "Try again.  You've got the right answer!  But make sure num_vans is an int by saying <code>num_vans = int(num_vans)</code>." 
    - incorrectcheck: |
        pos.includes("8 Buses, 2.0 Vans.4 Buses, 1.0 Vans.0 Buses, 1.0 Vans")
      feedback: "Try again.  You've got the right answer!  But make sure num_vans and num_buses are ints by saying <code>num_vans = int(num_vans)</code> and <code>num_buses = int(num_buses)</code>." 
    - incorrectcheck: |
        pos.includes("0 Buses, 0 Vans.0 Buses, 0 Vans.0 Buses, 0 Vans.")
      feedback: "Try again.  It looks like you haven't updated num_buses or num_vans" 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    code: | 
         import math
         def print_bus_vans(bus_capacity, van_capacity, num_people):
             """
             Compute the bus and van capacity
             Parameters
             ----------
             bus_capacity: int
              Number of people a bus can hold
             van_capacity: int
              Number of people a van can hold
             num_people: int
              Number of people on the trip
             """
             ## TODO: Change these two variables to reflect the actual
             ## number needed
             num_buses = 0
             num_vans = 0
             print("{} Buses, {} Vans".format(num_buses, num_vans), end='.')


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        # Run some tests on the method
        print_bus_vans(10, 4, 87)
        print_bus_vans(20, 7, 87)
        print_bus_vans(20, 8, 5)
        
---
