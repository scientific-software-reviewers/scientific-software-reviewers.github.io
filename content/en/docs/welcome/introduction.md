---
title: "A online tutorial for Code Review"
description: "Code Review"
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "welcome"
toc: true
weight: 110
---

Welcome to code-review.org. This is an online tutorial for code review made possible by the Better Scientific Software Fellowship
Program, funded by the Exascale Computing Project (17-SC-20-SC), a collaborative effort of the U.S. Department of Energy (DOE) Office of
Science and the National Nuclear Security Administration; and by the National Science Foundation (NSF) under Grant No. 2154495.

### What is the goal?


### What are the main learning outcomes?

When reviewing:  

* Does the pull request address the issue?
* Are there any deal breakers that would stop you accepting the changes?
* Can you suggest any improvements?
   * What is a good way to phrase your suggested improvements?
* Is the solution overly complicated? For an example of an overly complicated solution, see the famous [fizz buzz in Tensorflow](https://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/).
* Are the comments up to date, necessary, helpful?
* Would you except the pull request as it is now? Are your suggested changes must-do? nice-to-have? nitpicks? How would you communicate this?
* Do you spend a lot of time reviewing the code style?  Is it worth having a style guide for contributors? Can you make use of an existing style guide? Or a linter?

When working on your own contributions:  

* When putting in a pull request, how can you make it easy for a reviewer to understand what you have done?
* What makes a good pull request, what makes a bad pull request?
* Can you commit code in a way that lets someone review your code more easily?  Should you separate functional changes from style changes?
Would you use a tool such as [commitizen](http://commitizen.github.io/cz-cli/) to prompt yourself at commit time? Why? Why not?

### What prerequisite knowledge does someone need?

Ideally, this tutorial will get you started reviewing without requiring you to know any programing languages. 
The text exercises make no assumptions about coding knowledge. Text exercise 1 is a baking recipe. 
Text exercise 2 is an example of culturally specific mixup. These can occur when writing documentation for a global audience.
Variations in cultural knowledge always exist and it is important to have this in mind when writing or reviewing.
Text exercise 3 is some origami instructions, for some hands-on 'hands-on' reviewing.

The exercises that use code are in Python and in Fortran. You can do either or both!
Python is used by people across various domains by people with various scientific and non-scientific backgrounds.  The python exercises 
will be at the "introduction to python level" found in "learn python" tutorials. 
Fortran has a more restricted user base in terms of which domains people work in. These domains typically have numerical code. For Fortran
exercise 1, some mathematics knowledge is assumed. Fortran exercise 2 is a refactoring exercise.

### Help I don't have a GitHub account!

Part of the tutorial is getting familiar with GitHub, but setting up a GitHub account and setting up the tutorial may be a high bar to entry. 
One of the goals of this project is to get people looking at open source software. With this in mind, a 'take-a-look' repository with the 
exercise issues and pull requests is available at [take-a-look](https://github.com/scientific-software-reviewers/tutorial-take-a-look).
You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions. 

