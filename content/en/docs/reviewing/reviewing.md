---
title: "Reviewing"
description: "Reviewing"
lead: ""
draft: false
images: []
menu:
  docs:
      parent: "reviewing"
toc: true
weight: 400
---

Software engineering is programming integrated over time [1].
The goal of code review is to be continually improving our code.

How do _you_ tell if code is better?

Correctness  
Readability  
Design  
Style  
Functionality  
Complexity  
Consistency  


Depending on your experience you may focus on one, many, or all of these.

The main question to ask yourself when reviewing code is:  
**Does the pull request improve the existing code?**
   
* Are there unnecessary changes? If the pull request contains other changes that are 
  not related to the issue, how does your team deal with this. It is ok to close the pull request?

* Is now a good time to add new functionality?

* Does the code do what it says it does?

* What testing has been carried out?

* What dependencies does the code have? Are they required? Are they secure? Are they manageable?

* How does the code handle errors?

* Does the new code change how users interact with the software? 
  Does this require a change to the documentation? 

* Did the author write comments? Do the comments match the code? Are all the comments 
  necessary and helpful?
  
* Does the author follow the style of the rest of the code? Do you have a style guide?

* Can I accept the pull request as-is, or are there changes that must be made?

### Giving Feedback

When giving feedback on code, try to give comments that:

* are actionable.
* differentiate between a suggestion, a definite change, or a point that needs a discussion or clarification.
* are collaborative not accusatory.


### How do organizations decide if code is better?

[Google eng-practices](https://google.github.io/eng-practices/review/reviewer/looking-for.html)

---

[1] WINTERS, T., MANSHRECK, T., & WRIGHT, H. (2020). Software engineering at Google: lessons learned from programming over time.
