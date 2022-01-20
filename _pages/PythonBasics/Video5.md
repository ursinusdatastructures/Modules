---
layout: module
permalink: /Module1/Video5
title: "CS 371: Module 1 Part 5: Python Classes"
excerpt: "CS 371: Module 1 Part 5: Python Classes"

info:
  prev: "./Exercise4"
  next: "./Exercise5"
  comments: "true"
---

<p>
Please watch the video below, and click the <code>Next</code> button to continue when you're finished
</p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/uL-ftsDtmCc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Notes</h2>

<ul>
<li>Every instance method of a class must take <code>self</code> as its first parameter.  <code>self</code> is akin to <code>this</code> in Java or C++.  Then, when referring to instance methods <b>and</b> instance variables, you must always do so with <code>self.</code></li>
<li>The constructor in a class is defined as <code>__init__(self, ...)</code></li>
<li>A "to string" method can be defined with <code>__str__(self)</code></li>
<li>There are no private or protected variables; everything is public.  The convention is that variables that start with an underscore are private variables</li>
<li>It is possible to add variables on the fly to python objects!  We do not need to declare them up front</li>
<li>Python objects are passed by reference, not by value!  So <code>obj1 = obj2</code> <b>does not</b> create a copy of <code>obj1</code>, but just makes <code>obj2</code> point to the same object as <code>obj1</code> in memory.  In this way, the variables that you use to refer to objects are really all pointers by default. </li>
</ul>