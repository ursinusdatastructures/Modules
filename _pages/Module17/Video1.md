---
layout: module
permalink: /Module17/Video1
title: "CS 371: Module 17: Introduction To Binary Trees"
excerpt: "CS 371: Module 17: Introduction To Binary Trees"

info:
  next: "./Video1b"
---

Below is a video from CS 174.  Please watch the first 7 minutes until it gets to the C++ code, and then you can skip to the next page

<iframe width="560" height="315" src="https://www.youtube.com/embed/HGZ21401-Uo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>Notes</h2>


<ul>
<li>A <b>binary tree</b> is a generalization where every node has both a <code>left</code> and a <code>right</code> reference to other nodes, known as the left and right <b>child nodes</b>, respectively.</li>
<li>Binary trees are drawn from top to bottom by convention.  The top node where a binary tree starts is called the <code>root</code> node</li>
<li>If a node <code>c</code> is the child of a node <code>p</code>, then <code>p</code> is referred to as <code>c</code>'s <b>parent</b>.</li>
<li>Binary trees are naturally recursive data structure, as an entire <b>subtree</b> can be spliced in by making the left child of a node be the root of that subtree.</li>
</ul>

<img src = "../images/Module17/BinaryTree.svg">