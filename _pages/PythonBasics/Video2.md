---
layout: module
permalink: /Module1/Video2
title: "CS 371: Module 1: Python Basics Part 2"
excerpt: "CS 371: Module 1: Python Basics Part 2"

info:
  prev: "./Exercise1"
  next: "./Exercise2"
  comments: "true"
---

<p>
Please watch the video below, and click the <code>Next</code> button to continue when you're finished

<iframe width="560" height="315" src="https://www.youtube.com/embed/znN2wDriwAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Notes</h2>

<ul>
<li>Lists can be defined on the fly in python by putting stuff in brackets separated by commas.  For instance, <code>x = [3, 7, 1, 4, 7, 2]</code>.  Lists are then zero-index and accessed by brackets, just as arrays are in Java and C++.</li>
<li>To find the length of a list, say <code>len(x)</code></li>
<li>Negative indices can be used to access elements at the end of the list.  For instance, <code>x[-3]</code> accesses the third to last element in a list <code>x</code>.</li>
<li>It's possible to have heterogenous typed elements in lists.  For instance, <code>arr = [1, 2.5, "chris", [1, 2, 8]]</code></li>
<li>We can create new lists from a subset of elements in the list, which we call <b>slices</b>.  The syntax <code>x[a:b]</code> takes all contiguous elements in x starting at index <code>a</code> and ending right before index <code>b</code>.  The syntax <code>x[a:b:k]</code> starting at index <code>a</code> and ending right before index <code>b</code>, jumping by <code>k</code> indices in between elements.</li>
<li>Lists are <i>mutable</i> in python, which means we can add elements (e.g. with <code>append()</code>) and remove elements (e.g. with <code>pop()</code>) without making a whole new list from scratch.  This makes them more flexible than arrays in Java and C++</li>
<li>String are exactly like arrays, except they are <b>immutable</b> and consist of a sequence of character only</li>
</ul>