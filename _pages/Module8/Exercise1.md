---
layout: exercise_python
permalink: "Module8/Exercise1"
title: "CS 371: Module 8: Exercise 1"
excerpt: "CS 371: Module 8: Exercise 1"
canvasasmtid: "112843"
canvaspoints: "1.5"
canvashalftries: 5

info:
  comments: "true"
  next: "./Video1"
  points: 1.5
  instructions: "<p>Fill in the count_characters method to create a map where the keys are the characters and the values are the number of times the characters occur in the string.</p>"
  goals:
    - To implement data structures in python using object-oriented paradigms
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("{'m': 1, 's': 4, 'p': 2, 'i': 4}.{'l': 1, 'k': 1, 'z': 1, 'a': 4, 'm': 1}.{'q': 1, 'i': 1, 'c': 1, 'k': 1, 'b': 1, 'w': 1, 'n': 1, 'f': 1, 'x': 1, 'j': 1, 'u': 2, 'm': 1, 'p': 1, 'v': 1, 'r': 2, 't': 2, 'h': 2, 'e': 4, 'l': 1, 'a': 1, 'z': 1, 'y': 1, ' ': 8, 'd': 2, 'o': 4, 'g': 1}")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("{'m': 0, 'i': 0, 's': 0, 'p': 0}.{'a': 0, 'l': 0, 'k': 0, 'z': 0, 'm': 0}.{'t': 0, 'h': 0, 'e': 0, ' ': 0, 'q': 0, 'u': 0, 'i': 0, 'c': 0, 'k': 0, 'b': 0, 'r': 0, 'o': 0, 'w': 0, 'n': 0, 'f': 0, 'x': 0, 'j': 0, 'm': 0, 'p': 0, 'd': 0, 'v': 0, 'l': 0, 'a': 0, 'z': 0, 'y': 0, 'g': 0}")
      feedback: "Try again.  It looks like you're not updating the counts of each character." 
 
files:
  - filename: "Student Code"
    name: driver
    ismain: false
    isreadonly: false
    isvisible: true
    height: 400
    code: | 
          def count_characters(s):
              """
              Parameters
              ----------
              s: string
                  A string whose characters we want to count
              
              Returns
              -------
              A map of {'characters':counts} for all characters in s
              """
              counts = {}
              for i in range(len(s)):
                  c = s[i]
                  if not c in counts:
                      counts[c] = 0
                  ## TODO: Finish this
              return counts


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        print(count_characters("mississippi"), end='.')
        print(count_characters("alakazam"), end='.')
        print(count_characters("the quick brown fox jumped over the lazy dog"))

        
---
