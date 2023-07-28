---
title: "Set up the tutorial"
description: ""
lead: ""
date: 2023-07-26T14:06:29-04:00
lastmod: 2023-07-26T14:06:29-04:00
draft: false
images: []
menu:
  docs:
    parent: "welcome"
weight: 120
toc: true
---

## Setup your fork

### Fork the tutorial repository

![tutorial repo](images/fork-it.png)

Uncheck `Copy the main branch only` and click `Create fork`

![create fork](images/uncheck-main-branch-only.png)

You'll see this message as your fork is being created:

![fork setting up](images/fork-setting-up.png)

After a few seconds you will see your fork.

![fork created](images/fork-created.png)

### Enable read and write permissions for workflows

By default, write permissions are not enabled for workflows.  Write permission is needed
for the tutorial so the automated actions can be used to create pull requests.  

Click the `Settings` tab

![settings](images/settings.png)

Then `Actions` -> `General` on the menu on the left

![actions](images/settings-actions-general.png)

Then enable read and write permissions for workflows and click save:

![workflow permissions](images/workflow-permissions.png)

### Switch on Workflows

The tutorial makes use of GitHub actions to create the exercises. To enable actions, click on the 
Actions tab and then `I understand my workflows, go ahead and enable them`.

![actions tab](images/actions-tab.png)

Great! You are now set to create the tutorial exercises.

[tutoral-repo]: https://github.com/scientific-software-reviewers/tutorial
