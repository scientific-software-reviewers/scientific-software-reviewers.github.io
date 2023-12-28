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

## What is the goal?

If you’ll indulge me a 20 year old British comedy reference, a quote from horror writer
[Garth Marenghi](https://en.wikipedia.org/wiki/Garth_Marenghi)
 “I’m one of the few people you’ll meet who’s written more books than they’ve read”. 
Which is a hilarious joke for writers, but a sobering reality for scientific software. 
It is not that unusual for people working in science to write more code than they read. But **we can change that**, right?

 The goal of the project is to enable everyone involved in Scientific Software to:

* Become a better reviewer. Reviewing is hard! You really have to take into account how to communicate, 
  constructive and actionable criticism. Practice reviewing in a no consequence environment using the tutorial.

* Become more comfortable having your code reviewed. People will explain a scientific idea with a sketch
  on a whiteboard, or a napkin no problem. But when it comes to code, there is a real tendency to keep it 
  hidden. You might have heard people say, “oh I need to polish this before I show it to you.” There is 
  some psychological effect behind this, and it would be great to change this and get people showing even 
  pseudo code to each other.  Sharing early and often becomes second nature.

* Use code review as a collaboration tool. Use code review as part of your onboarding new team members and collaborators. Share
  knowledge and know-how between team members.  There is a real benefit to being on both sides of the review. 
  We’re trying to humanize this process, and build rapport between people. 
  
* Read more code than you write! Take a peek into your favorite open source tools.  Encourage people to have 
  a look inside the software they are using. How does this work? Why did they do this? 
 
* Enable more open source contributors, and more open source reviewers.  This is a lofty goal, but there are a lot of 
  people out there who would make really good software engineers, and they don’t know it yet. 


## What are the main learning outcomes?

Code review is a skill. You can break it down, you can practice, and you can get better at it. 
The difficult thing is you are often learning a bunch of other skills at the same time. 
The mechanics of git and Github, which can be tricky.
Maybe a new programming language. Maybe you a scientist learning a new language
Or maybe you are a software engineer learning new science.
You have to fit into a new team and all the culture that comes with that. 

And this **never stops**, right? Whether you are starting out or a seasoned professional, you are 
learning something. Oh and also you’re going to be learning code review. 

As you work through the tutorial, you'll practice the mechanics of Github: navigating issues, pull requests,
adding comments and suggestions. You'll have the chance to review the pull requests in the exercises, with
some prompts to help you along.

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


## What prerequisite knowledge does someone need?

Ideally, this tutorial will get you started reviewing without requiring you to know any programing languages. 
The text exercises make no assumptions about coding knowledge. Text exercise 1 is a baking recipe. 
Text exercise 2 is an example of culturally specific mixup. These can occur when writing documentation for a global audience.
Variations in cultural knowledge always exist and it is important to have this in mind when writing or reviewing.
Text exercise 3 is some origami instructions, for some hands-on 'hands-on' reviewing.

The exercises that use code are in Python and in Fortran. You can do either or both!
Python is used by people across various domains by people with various scientific and non-scientific backgrounds.
The python exercises will be at the "introduction to python level" found in "learn python" tutorials. 
Fortran has a more restricted user base in terms of which domains people work in. These domains typically have numerical code. For Fortran
exercise 1, some mathematics knowledge is assumed. Fortran exercise 2 is a refactoring exercise.

## Help I don't have a GitHub account!

Part of the tutorial is getting familiar with GitHub, but setting up a GitHub account and setting up the tutorial may be a high bar to entry. 
One of the goals of this project is to get people looking at open source software. With this in mind, a 'take-a-look' repository with the 
exercise issues and pull requests is available at [take-a-look](https://github.com/scientific-software-reviewers/tutorial-take-a-look).
You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions. 

