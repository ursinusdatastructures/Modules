---
layout: exercise_python
permalink: "/HW6hid/Exercise2"
title: "CS 371: Homework 6: Rush Hour Solution"
excerpt: "CS 371: Homework 6: Rush Hour Graph Solution"
canvasasmtid: "117733"
canvaspoints: "5"
canvashalftries: 5

info:
  comments: "true"
  prev: "./Video2"
  next: "./Video3"
  points: 5
  instructions: "Copy in your code from before for <code>get_next_moves</code>, and then fill in the <code>solve_puzzle</code> method to run breadth-first search starting at this state and going until a goal state is reached.  Then, trace back from the goal state to the beginning, and return that list.  The tester will use this code to solve the hard puzzle given on the <a href = \"http://www.ctralie.com/Teaching/CS371_S2021/ClassExercises/Week1/rushhour-master/\">first day of class</a>, and the next page will show an animation of that solution.<p>Because it's easy to mix up object references when the same state gets enumerated from different places, there are two sets \"touched\" and \"visited\" that you can use to mark nodes as touched or visited in BFS, respectively.  If you want to touch a state, add its hash string <code>state.get_state_hashable()</code> to the set <code>touched</code>.  This is a unique string that identifies the state.  You can do the same for <code>visited</code>.  To see if a state has been touched, you can use the boolean statement <code>state.get_state_hashable() in touched</code></p>"
  goals:
    - Implement breadth-first search in an abstract graph
    - Backtrace from a goal state in breadth-first search to enumerate a sequence of moves to a solution
    
processor:  
  correctfeedback: "Correct!!" 
  incorrectfeedback: "Try again. Hint: Your optimal solution should have 25 steps in it (the first state, plus 24 moves), and the last state in the list should be the goal."
  submitformlink: false
  feedbackprocess: | 
    var pos = feedbackString.trim();
  correctcheck: |
        pos.includes("25.True")
files:
  - filename: "Rush Hour Code"
    name: rushhour
    ismain: false
    isreadonly: false
    isvisible: true
    height: 3500
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
                        ## TODO: Copy your part 1 code in here
                    return moves
                
                def solve_puzzle(self):
                    start = self
                    from collections import deque
                    touched = set([])
                    visited = set([])
                    touched.add(start.get_state_hashable())
                    queue = deque()
                    queue.append(start)
                    finished = False
                    end = None
                    while len(queue) > 0 and not finished:
                        state = queue.popleft()
                        visited.add(state.get_state_hashable())
                        if state.reached_goal():
                            end = state
                            finished = True
                        else:
                            ## TODO: Fill this in.  Loop through all of the next
                            ## possible moves and see if they have been touched yet
                            ## If not, touch them, and add them to the back of the queue
                            pass
                    
                    ## TODO: Backtrace from the end node to show a solution path
                    ## and return a list of states with the solution from start
                    ## to finish
                    states = [end]
                    node = end

                    ## TODO: Fill this in

                    return states


  - filename: "Test Code Block"
    ismain: true
    name: main
    isreadonly: true
    isvisible: true
    code: |
            start = State()
            start.N = 6
            start.goal = [2, 5]
            start.cars.append(Car(2, 0, 2, True))
            start.cars.append(Car(4, 0, 3, True))
            start.cars.append(Car(1, 2, 3, False))
            start.cars.append(Car(3, 3, 2, True))
            start.cars.append(Car(4, 4, 2, False))
            start.cars.append(Car(3, 5, 3, False))
            solution = start.solve_puzzle()
            print(len(solution), end='.')
            if solution[-1]:
                print(solution[-1].reached_goal())

---
