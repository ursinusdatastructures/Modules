---
layout: exercise_python
permalink: "/HW6hid/Exercise1"
title: "CS 371: Homework 6: Rush Hour Neighbor Enumeration"
excerpt: "CS 371: Homework 6: Rush Hour Graph Neighbor Enumeration"
canvasasmtid: "117730"
canvaspoints: "3"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video1"
  next: "./Video2"
  points: 3
  instructions: "Finish the <code>get_next_moves</code> method so that it adds neighboring state nodes for cars that move to the left (j-1) and up (i-1).  Be sure that the grid cells where you're trying to move the cars are unoccupied (have a value of -1 in the grid).  Also be sure that they remain in bounds.  You should hang onto the code you write here, because you'll need it in the next part"
  goals:
    - Construct nodes in an abstract representation of a graph as a state space
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again"
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
        pos.includes("-1-1-1-1-11000-151-1-1665122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15-1000-151-1-166-1122-1-1-1143333-14-1-1-1-1-1.-1-1-1-151-100051-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-1-166122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-11-122-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14-133334-1-1-1-1-1.-1-1-1-151000-151-166-1-1122-1-1-1-143333-14-1-1-1-1-1.")
  incorrectchecks:
    - incorrectcheck: |
        pos.includes("-1-1-1-1-11000-151-1-1665122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15-1000-151-1-166-1122-1-1-1143333-14-1-1-1-1-1.-1-1-1-151-100051-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-1-166122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-11-122-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14-133334-1-1-1-1-1.")
      feedback: "Try again.  It looks like you're still only adding moves of the cars down or to the right"
    - incorrectcheck: |
        pos.includes("-1-1-1-1-11000-151-1-1665122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15-1000-151-1-166-1122-1-1-1143333-14-1-1-1-1-1.-1-1-1-151-100051-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-1-166122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-11-122-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14-133334-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14333-1-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1142-1-1-1-143333-1-1-1-1-1-1-1.-1-1-1-151000-151-166-1-1122-1-1-1-143333-14-1-1-1-1-1.")
      feedback: "Try again.  Be sure that the grid cells where you're trying to move the car are unoccupied"
    - incorrectcheck: |
        pos.includes("-1-1-1-1-11000-151-1-1665122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15-1000-151-1-166-1122-1-1-1143333-14-1-1-1-1-1.-1-1-1-151-100051-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-1-11-1-166-1122-1-1-1-143333-14-1-1-15-1.-1-1-1-151000-151-1-1-166122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1-122-1-1-1-143333-14-1-1-1-11.-1-1-1-151000-151-1-166-11-122-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-112-1-1-1-1243333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14-133334-1-1-1-1-1.-1-1-1-151000-151-166-1-1122-1-1-1-143333-14-1-1-1-1-1.")
      feedback: "Try again.  Be sure that the car is in bounds"
    - incorrectcheck: |
        pos.includes("-1-1-1-1-11000-151-1-1665122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15-1000-151-1-166-1122-1-1-1143333-14-1-1-1-1-1.-1-1-1-151-100051-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-15100-1-151-1-166-1122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-1-11-1-166-1122-1-1-1-143333-14-1-1-15-1.-1-1-1-151000-151-1-1-166122-1-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1-122-1-1-1-143333-14-1-1-1-11.-1-1-1-151000-151-1-166-11-122-1-1-143333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-112-1-1-1-1243333-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14-133334-1-1-1-1-1.-1-1-1-151000-151-1-166-1122-1-1-1-14333-1-14-1-1-1-1-1.-1-1-1-151000-151-1-166-1142-1-1-1-143333-1-1-1-1-1-1-1.-1-1-1-151000-151-166-1-1122-1-1-1-143333-14-1-1-1-1-1.")
      feedback: "Try again.  Be sure that the car is in bounds and the grid cells where you're trying to move the car are unoccupied"
files:
  - filename: "Rush Hour Code"
    name: rushhour
    ismain: false
    isreadonly: false
    isvisible: true
    height: 2900
    code: | 
            class Car:
                def __init__(self, i, j, L, horiz):
                    """
                    Parameters
                    i: int
                        Row of the car
                    j: int
                        Column of the car
                    L: int
                        Length of the car
                    horiz: boolean
                        True if the car is horizontal, false
                        if the car is vertical
                    """
                    self.i = i
                    self.j = j
                    self.L = L
                    self.horiz = horiz

            class State:
                def __init__(self):
                    self.N = 0 # Our cars are on an NxN grid
                    self.cars = [] # The first car is the red car
                    self.goal = [0, 0] # The state that our red car needs to reach
                    self.prev = None # Pointers to previous states (use later)
                
                def clone(self):
                    """
                    Make a deep copy of this state

                    Return
                    ------
                    State: copy of this state
                    """
                    s = State()
                    s.N = self.N
                    for c in self.cars:
                        s.cars.append(Car(c.i, c.j, c.L, c.horiz))
                    s.goal = self.goal.copy()
                    return s

                def load_puzzle(self, filename):
                    """
                    Load in a puzzle from a text file
                    
                    Parameters
                    ----------
                    filename: string
                        Path to puzzle
                    """
                    fin = open(filename)
                    lines = fin.readlines()
                    fin.close()
                    self.N = int(lines[0])
                    self.goal = [int(k) for k in lines[1].split()]
                    for line in lines[2::]:
                        fields = line.rstrip().split()
                        i, j, L = int(fields[0]), int(fields[1]), int(fields[3])
                        horiz = True
                        if "v" in fields[2]:
                            horiz = False
                        self.cars.append(Car(i, j, L, horiz))

                def get_state_grid(self):
                    """
                    Return an NxN 2D list corresponding to this state.  Each
                    element has a number corresponding to the car that occupies 
                    that cell, or is a -1 if the cell is empty

                    Returns
                    -------
                    list of list: The grid of numbers for the state
                    """
                    grid = [[-1]*self.N for i in range(self.N)]
                    for idx, c in enumerate(self.cars):
                        di = 0
                        dj = 0
                        if c.horiz:
                            dj = 1
                        else:
                            di = 1
                        i, j = c.i, c.j
                        for k in range(c.L):
                            grid[i][j] = idx
                            i += di
                            j += dj
                    return grid

                def get_state_printable(self):
                    """
                    Get a string representing the state
                    """
                    s = ""
                    grid = self.get_state_grid()
                    for i in range(self.N):
                        for j in range(self.N):
                            s += "%5s"%grid[i][j]
                        s += "\n"
                    return s
                
                def get_state_hashable(self):
                    """
                    Return a shorter string used to hash the state
                    """
                    s = ""
                    grid = self.get_state_grid()
                    for i in range(self.N):
                        for j in range(self.N):
                            s += "{}".format(grid[i][j])
                    return s
                
                def reached_goal(self):
                    """
                    Return True if the 0th car overlaps with
                    the goal sell or False otherwise
                    """
                    grid = self.get_state_grid()
                    res = False
                    if grid[self.goal[0]][self.goal[1]] == 0:
                        res = True
                    return res

                def get_next_moves(self):
                    """
                    Return a list of states that are reachable from this state
                    
                    Returns
                    -------
                    list of State
                    """
                    moves = []
                    grid = self.get_state_grid()
                    for idx, c in enumerate(self.cars):
                        # Move down / right
                        i = c.i
                        di = 0
                        j = c.j
                        dj = 0
                        if c.horiz:
                            dj = 1
                            j += c.L
                        else:
                            di = 1
                            i += c.L
                        if i < self.N and j < self.N and grid[i][j] == -1:
                            move = self.clone()
                            move.cars[idx].i += di
                            move.cars[idx].j += dj
                            moves.append(move)
                        # Move left/up
                        ## TODO: Fill this in for part 1
                    return moves


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
        state = State()
        state.N = 6
        state.cars.append(Car(1, 0, 3, True))
        state.cars.append(Car(0, 5, 3, False))
        state.cars.append(Car(3, 0, 2, True))
        state.cars.append(Car(4, 1, 4, True))
        state.cars.append(Car(4, 0, 2, False))
        state.cars.append(Car(0, 4, 2, False))
        state.cars.append(Car(2, 2, 2, True))
        for move in sorted([m.get_state_hashable() for m in state.get_next_moves()]):
            print(move, end='.')

---
