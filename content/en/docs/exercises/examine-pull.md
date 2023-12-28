---
title: "Working with Pull requests"
description: "Working with Pull requests"
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "exercises"
toc: true
weight: 340
---

A pull request is a proposed change. A review is feedback on the change.

When you are reviewing, you'll need to assess the scope and size of the pull request. 
This will give you some idea of how much work will be involved in the review, and
what feedback you need to give.

Read the pull request description. Ideally this will give you the scope:

* What's changed.
* Why the changes were made.
* What the person is looking for from the review. They may have code ready to release, 
  they may have an urgent bug fix, they may have a draft that they want you to look
  at before they do any more work.

Small code changes can have big impacts, so lines of code changed does not necessarily 
correlate with how difficult, important, or necessary a change is. 
But you can use GitHub to see:

* How many lines of code have been added or removed.
* How many files have been changed.
* How many commits were made.

These are circled below in pink, and will give you an idea of how big the pull request is. 

![look-at-pull](images/look-at-pull.png)

The lines of code changed is show by the green/red +/-. In this case 14 new lines, 10 lines removed:

![lines-changed](images/lines-changed.png)

Click on 'Files changed' to see what changes are proposed in this pull request.  

Each exercise has a pull request which proposes a change to the existing code. 
You can read about the reasons for the change in the issue linked from the pull request description. 
The issues contain questions to think about during review.

**Your mission is to review the proposed changes!** Provide your feedback on the pull 
request using comments, suggestions, and by giving your review.
Note comments, suggestions and reviews are all done in the 'Files changed' tab.


![linked-issue](images/linked-issue.png)


### Adding comments

To add a comment, click on the `+` or `-` by the line number. A blue box `+` will show up
when you hover over a `+` or `-`. You can only comment on the green (new lines of code)
or red (code removed) sections. 

![click-line-num](images/click-line-num.png)

This will open up a box where you can write a comment on the code. The comments support Markdown

![comment-box](images/comment-box.png)

Write your comment, and click 'Add single comment'. Try selecting multiple lines of code to add a comment.

![nice-comment](images/nice-comment.png)

Note there is an `Start a review` button.  If you click 'Start a review` rather than 'Add single comment',
this will save all your comments until you finish the review.  The difference between these is how many 
notifications (emails) the pull request author will receive. 

Add single comment -> sends a notification to the pull request author for _each_ comment you add.  
Start a review -> send one notification when the review is submitted. 

Which one of these you choose will depend on who you are working with.
Some people prefer the instant collaboration in comments back and forth, some people do not want to 
get lots and lots of notifications.  It's a good idea to ask how someone how they would like to get feedback.

### Adding suggestions

Suggestions are the same as comments, but you suggest an edit to the code that can be committed from 
the pull request. Click the suggestion icon in the comment box:

![add-suggestion](images/add-suggestion.png)

The lines you have selected will show up. Edit this with what you think should be there.
You can click preview to see your code changes.

![suggestion-preview](images/suggestion-preview.png)

Try committing changes from a suggestion.

### Add your review

When you're ready to add your review click the green `Review changes` button

![review-button](images/review-button.png)

You're choices are:

* Comment
* Approve
* Request changes

**Bonus points:**

* What makes a pull request easy to review?
* What makes a pull request difficult to review?

