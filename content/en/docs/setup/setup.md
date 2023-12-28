---
title: "Set up the Tutorial on GitHub"
description: ""
lead: ""
date: 2023-07-26T14:06:29-04:00
lastmod: 2023-07-26T14:06:29-04:00
draft: false
images: []
menu:
  docs:
    parent: "setup"
toc: true
weight: 210
---

To do the tutorial exercises interactively you will need a GitHub account.

If you are not ready to setup a GitHub account and run workflows, a 'take-a-look' repository with the 
exercise issues and pull requests is available at 
[take-a-look](https://github.com/scientific-software-reviewers/tutorial-take-a-look).
You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions. 
Skip head to the [exercises]({{<ref "/docs/exercises/ex_intro.md" >}} "exercises").

For those working through the exercises, this setup guide will take you though forking the tutorial, enabling issues, setting
read and write permissions for workflows, and switching on workflows. 


### Fork the tutorial repository

The tutorial repository is [github.com/scientific-software-reviewers/tutorial](https://github.com/scientific-software-reviewers/tutorial)


![tutorial repo](images/fork-it.png)

Uncheck `Copy the main branch only` and click `Create fork`

![create fork](images/uncheck-main-branch-only.png)

You'll see this message as your fork is being created:

![fork setting up](images/fork-setting-up.png)

After a few seconds you will see your fork.

![fork created](images/fork-created.png)

### Enable issues

The tutorial makes use of GitHub issues. To enable issues click the `Settings` tab

![settings](images/settings.png)

Scroll down to features and click `Issues`:

![allow issues](images/allow-issues.png)


### Enable read and write permissions for workflows

By default, write permissions are not enabled for workflows.  Write permission is needed
for the tutorial so the automated actions can be used to create pull requests.  

Click the `Settings` tab

![settings](images/settings.png)

Then `Actions` -> `General` on the menu on the left

![actions](images/settings-actions-general.png)

Then enable read and write permissions for workflows, and allow GitHub Actions to
create and approve pull requests and click save:

![workflow permissions](images/workflow-permissions.png)

### Switch on Workflows

The tutorial makes use of GitHub actions to create the exercises. To enable actions, click on the 
Actions tab and then `I understand my workflows, go ahead and enable them`.

![actions tab](images/actions-tab.png)

Great! You are now set to create the tutorial exercises.

[tutoral-repo]: https://github.com/scientific-software-reviewers/tutorial
