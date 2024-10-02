---
layout: exercise
language: "python"
permalink: "MakingChange/Exercise1"
title: "CS 271: Dynamic Programming And Backtracing: Exercise 1"
excerpt: "CS 271: Dynamic Programming And Backtracing: Exercise 1"
canvasasmtid: "216982"
canvaspoints: "2"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 2
  instructions: "<p>The code below includes the iterative dynamic programming approach we talked about for making change in the file <code>mincoins.py</code>, which includes memory of the optimal coin choices to make at each step.  Complete the <code>get_change_coins</code> helper method in <code>student.py</code> to recursively backtrace and enumerate all possibilities of making change optimally.  The base case has already been taken care of, you just need to initiate recursion on all possible coins to choose at a particular step.  To show the algorithm off a little more, the test cases in <code>main.py</code> include a 3 cent coin, which leads to more than one possibility on some of the cases.</p>"
  goals:
    - Recursively backtrace optimal solutions in dynamic programming using stacks
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
    pos.includes("6:{'1x1,5x1', '3x2'}.41:{'1x1,5x1,10x1,25x1', '3x2,10x1,25x1'}.94:{'1x1,3x1,5x1,10x1,25x3', '3x3,10x1,25x3'}")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("6:set().41:set().94:set()")
      feedback: "Try again.  It looks like you aren't initiating the recursive calls"
files:
  - filename: "mincoins.py"
    name: mincoinsneededdyn
    ismain: false
    isreadonly: true
    isvisible: true
    height: 620
    code: | 
          def min_coins_needed_dyn(coins, amt):
              """
              Parameters
              ----------
              coins: list
                  List of all possible coin values (including 1 cent)
              amt: int
                  The change I'm trying to make
              
              Returns
              -------
              int: The minimum number of coins needed to make change,
              set: A set describing all of the ways to make that change
              """
              mem = [0]*(amt+1) # Ex) mem[10] is minimum # needed to make 10c
              optimal = [[] for i in range(amt+1)]
              for amti in range(1, amt+1):
                  if amti in coins:
                      mem[amti] = 1
                  else:
                      min_coins = amti
                      for c in coins:
                          sm_amt = amti - c
                          if sm_amt > 0:
                              min_c = 1 + mem[sm_amt]
                              min_coins = min(min_coins, min_c)
                      for c in coins:
                          sm_amt = amti - c
                          if sm_amt > 0:
                              min_c = 1 + mem[sm_amt]
                              if min_c == min_coins:
                                  optimal[amti].append(c)
                      mem[amti] = min_coins
              chosen_coins = []
              all_ways = set([])
              get_change_coins(optimal, chosen_coins, amt, all_ways)
              return mem[-1], all_ways

  - filename: "student.py"
    name: mincoinsbacktrace
    ismain: false
    isreadonly: false
    isvisible: true
    height: 680
    code: | 
          def get_change_coins(optimal, chosen_coins, amt, all_ways):
              """
              Recursively backtrace through optimal coin choices to see
              all of the ways of making changes
              Parameters
              ----------
              optimal: list of list
                  A list of optimal coin choices, indexed by amount
              chosen_coins: list
                  All of the coins considered so far
              amt: int
                  The current amount that's being turned into change
              all_ways: set
                  A set of strings describing all unique ways to make change.
                  Returned by reference
              """
              if len(optimal[amt]) > 0:
                  ## Recusviely try each possible optimal coin in turn
                  for c in optimal[amt]:
                      ## TODO: Fill this in
                      ## 1. Put this coin on the back of the list of chosen coins
                      ## 2. Make a recursive call with the amount of change that's
                      ##    left after using one of the optimal coin choices
                      ## 3. Pop this coin off of the back of the list of chosen coins
                      pass
              
              else:
                  # Stopping condition: No more coins left to look at
                  # Make a dictionary of amount:count for all chosen coins
                  counts = {amt:1} # We know that this amount is one of the coins
                  for coin in chosen_coins:
                      if not coin in counts:
                          counts[coin] = 0
                      counts[coin] += 1
                  # Format this nicely in a string sorted in increasing
                  # order of coin value
                  way = ""
                  for i, coin in enumerate(sorted(counts.keys())):
                      way += "{}x{}".format(coin, counts[coin])
                      if i < len(counts)-1:
                          way += ","
                  all_ways.add(way)

  - filename: "main.py"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        coins = [1, 3, 5, 10, 25]
        for amt in [6, 41, 94]:
            cost, ways = min_coins_needed_dyn(coins, amt)
            print("{}:{}".format(amt, ways), end='.')
        
openFilesOnLoad: ["main.py", "mincoins.py", "student.py"]       
---
