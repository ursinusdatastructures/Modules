---
layout: module
permalink: /Module17/Video3
title: "CS 371: Module 17: Binary Trees Preorder/Postorder"
excerpt: "CS 371: Module 17: Binary Trees Preorder/Postorder"

info:
  prev: "./Exercise2"
  next: "./Exercise3"
---

Please watch the video below from CS 174, and click the next button once you have finished

<iframe width="560" height="315" src="https://www.youtube.com/embed/chsQztf0kSA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<ul>
<li>A <b>preorder traversal</b> can be defined as visiting the nodes in the order they are printed by the following recursive function
<p>
<pre><code>preorder(node)
    print(node)
    preorder(node->left)
    preorder(node->right)</code></pre>
</p>
</li>
<li>A <b>preorder traversal</b> can be defined as visiting the nodes in the order they are printed by the following recursive function
<p>
<pre><code>postorder(node)
    postorder(node->left)
    postorder(node->right)
    print(node)</code></pre>
</p>
</li>
</ul>

<img src = "../images/Module17/BinaryTree_Preorder_PostOrder.svg">