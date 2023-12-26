---
title: "Navigating the Exercises"
description: "Navigating the GitHub repository"
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "exercises"
toc: true
weight: 320
---

We're going to navigate between issues and pull requests using the menu across the top of 
the repository. I'm using the
[take-a-look](https://github.com/scientific-software-reviewers/tutorial-take-a-look) repository
to demonstrate.


![navigate](images/navigate.png)

Click on issues to get to the list of issues.

![navigate-issue](images/navigate-issue.png)


The issues and pull requests are labelled with the language: Text, python, Fortran.  
Labels are a way to filter issues and pull requests. Typically on a repository you'll see
labels such as 'Bug', 'Enhancement', 'Good First Issue'.  

Try filtering the issues by label to show only the text exercises. 

![filter-issues](images/filter-issues.png)

Let's take a look at `text: Exercise 1`. Navigate to the issue by clicking on the `text: Exercise 1` 
issue:  

![issue-nav](images/issue-nav.png)

There are several places that show there is a pull request linked to this issue.  
The pink circles in the image below show where you can find linked pull requests from 
an issue page. Note the actual issue numbers (#2 in this example) may be different depending on 
how many times you have created and reset the exercises. 
 
![link-pull-issue](images/link-pull-issue.png)


Click on one of the links to get to the pull request

![pull](images/pull.png)

The pull request has a description of what has been proposed and which issue is being fixed. 
The [take-a-look](https://github.com/scientific-software-reviewers/tutorial-take-a-look) repository
also has review comments.  You'll add your own review comments and suggestion to your fork of the
tutorial as you work through the exercise. 

## Examining Pull requests


There are a few things to look at when you first approach a pull request.

* How many lines of code have been added or removed
* How many files have been changed
* How many commits were made

These are circled below in pink, and these will give you an idea of how big the pull request is. 

![look-at-pull](images/look-at-pull.png)

The lines of code changed is show by the green/red +/-. In this case 14 new lines, 10 lines removed:

![lines-changed](images/lines-changed.png)

Click on 'Files changed' to see 
