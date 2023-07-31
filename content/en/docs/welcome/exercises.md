---
title: "Create the Exercises"
description: ""
lead: ""
date: 2023-07-26T14:06:29-04:00
lastmod: 2023-07-26T14:06:29-04:00
draft: false
images: []
menu:
  docs:
    parent: "welcome"
weight: 130
toc: true
---

There are two GitHub workflows for the tutorials.

`create_exercises` creates the exercises.   
`reset_exercises` clears the exercises so you can start afresh.  


## Workflows

To get to the workflows, click the `Actions` tab

![actions workflows](images/actions-workflows.png) 

### Create the Exercises

To create the exercises, click `create_exercises` from the menu on the left

![select-workflow](images/select-workflow.png)

Then click `Run workflow` which will bring up a pop up menu:

![run-workflow](images/run-workflow.png)

Choose the `Language` exercises. `Text` creates review exercises that do not require and code knowledge. 
The other options are code review exercises specific to a particular programming language.

![language](images/language.png)

Click `Run workflow` to create the exercises. It make take a few seconds to start, but then you will see `create_exercises` queued in the list of workflows:

![queued-workflow](images/queued-workflow.png)


### Reset the Exercises

The workflow `reset_exercises` will close all the issues and pull requests associated with the tutorial. 

![reset-exercises](images/reset-exercises.png)


Then click `Run workflow` to open up a menu, and click the green `Run workflow` button:

![run-reset](images/run-reset.png)


