var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/blog/welcome-to-code-review/",title:"Welcome to Code Review",description:"First post on Code Review",content:`Welcome to code-review.org, a project made possible by the Better Scientific Software Fellowship Program. While the tutorial exercises are intended to be a practical introduction to code review, the blog is a place to share practices and experiences of code review in scientific software. The goal is to shed light on coding in science, and be an informal place to share experiences: both positive negative.
`}),e.add({id:1,href:"/blog/talks-from-the-trenches/",title:"Talks from the Trenches",description:"Talks from the Trenches",content:`Conferences can be great places to meet other research software engineers. Conferences can also be prohibitively expensive.
Here is a collection of freely available \u0026lsquo;practice and experience\u0026rsquo; talks:
2023 Improving Scientific Software Conference The playlist is for the 3 day conference. agenda and abstracts.
`}),e.add({id:2,href:"/blog/finding-a-peer-group/",title:"Finding a Peer Group",description:"Finding a Peer Group",content:""}),e.add({id:3,href:"/blog/lgtm/",title:"LGTM",description:"Looks Good To Me",content:`lgtm
`}),e.add({id:4,href:"/docs/welcome/",title:"Welcome",description:"Welcome to Code Review",content:""}),e.add({id:5,href:"/docs/welcome/introduction/",title:"A online tutorial for Code Review",description:"Code Review",content:`Welcome to code-review.org. This is an online tutorial for code review made possible by the Better Scientific Software Fellowship Program, funded by the Exascale Computing Project (17-SC-20-SC), a collaborative effort of the U.S. Department of Energy (DOE) Office of Science and the National Nuclear Security Administration; and by the National Science Foundation (NSF) under Grant No. 2154495.
What is the goal? # If you’ll indulge me a 20 year old British comedy reference, a quote from horror writer Garth Marenghi “I’m one of the few people you’ll meet who’s written more books than they’ve read”. Which is a hilarious joke for writers, but a sobering reality for scientific software. It is not that unusual for people working in science to write more code than they read. But we can change that, right?
The goal of the project is to enable everyone involved in Scientific Software to:
Become a better reviewer. Reviewing is hard! You really have to take into account how to communicate, constructive and actionable criticism. Practice reviewing in a no consequence environment using the tutorial.
Become more comfortable having your code reviewed. People will explain a scientific idea with a sketch on a whiteboard, or a napkin no problem. But when it comes to code, there is a real tendency to keep it hidden. You might have heard people say, “oh I need to polish this before I show it to you.” There is some psychological effect behind this, and it would be great to change this and get people showing even pseudo code to each other. Sharing early and often becomes second nature.
Use code review as a collaboration tool. Use code review as part of your onboarding new team members and collaborators. Share knowledge and know-how between team members. There is a real benefit to being on both sides of the review. We’re trying to humanize this process, and build rapport between people.
Read more code than you write! Take a peek into your favorite open source tools. Encourage people to have a look inside the software they are using. How does this work? Why did they do this?
Enable more open source contributors, and more open source reviewers. This is a lofty goal, but there are a lot of people out there who would make really good software engineers, and they don’t know it yet.
What are the main learning outcomes? # Code review is a skill. You can break it down, you can practice, and you can get better at it. The difficult thing is you are often learning a bunch of other skills at the same time. The mechanics of git and Github, which can be tricky. Maybe a new programming language. Maybe you a scientist learning a new language Or maybe you are a software engineer learning new science. You have to fit into a new team and all the culture that comes with that.
And this never stops, right? Whether you are starting out or a seasoned professional, you are learning something. Oh and also you’re going to be learning code review.
As you work through the tutorial, you\u0026rsquo;ll practice the mechanics of Github: navigating issues, pull requests, adding comments and suggestions. You\u0026rsquo;ll have the chance to review the pull requests in the exercises, with some prompts to help you along.
When reviewing:
Does the pull request address the issue? Are there any deal breakers that would stop you accepting the changes? Can you suggest any improvements? What is a good way to phrase your suggested improvements? Is the solution overly complicated? For an example of an overly complicated solution, see the famous fizz buzz in Tensorflow. Are the comments up to date, necessary, helpful? Would you accept the pull request as it is now? Are your suggested changes must-do? nice-to-have? nitpicks? How would you communicate this? Do you spend a lot of time reviewing the code style? Is it worth having a style guide for contributors? Can you make use of an existing style guide? Or a linter? When working on your own contributions:
When putting in a pull request, how can you make it easy for a reviewer to understand what you have done? What makes a good pull request, what makes a bad pull request? Can you commit code in a way that lets someone review your code more easily? Should you separate functional changes from style changes? Would you use a tool such as commitizen to prompt yourself at commit time? Why? Why not? What prerequisite knowledge does someone need? # Ideally, this tutorial will get you started reviewing without requiring you to know any programing languages. The text exercises make no assumptions about coding knowledge. Text exercise 1 is a baking recipe. Text exercise 2 is an example of culturally specific mixup. These can occur when writing documentation for a global audience. Variations in cultural knowledge always exist and it is important to have this in mind when writing or reviewing. Text exercise 3 is some origami instructions, for some hands-on \u0026lsquo;hands-on\u0026rsquo; reviewing.
The exercises that use code are in Python and in Fortran. You can do either or both! Python is used by people across various domains by people with various scientific and non-scientific backgrounds. The python exercises will be at the \u0026ldquo;introduction to python level\u0026rdquo; found in \u0026ldquo;learn python\u0026rdquo; tutorials. Fortran has a more restricted user base in terms of which domains people work in. These domains typically have numerical code. For Fortran exercise 1, some mathematics knowledge is assumed. Fortran exercise 2 is a refactoring exercise.
Help I don\u0026rsquo;t have a GitHub account! # Part of the tutorial is getting familiar with GitHub, but setting up a GitHub account and setting up the tutorial may be a high bar to entry. One of the goals of this project is to get people looking at open source software. With this in mind, a \u0026rsquo;take-a-look\u0026rsquo; repository with the exercise issues and pull requests is available at take-a-look. You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions.
`}),e.add({id:6,href:"/docs/setup/",title:"Setup The Tutorial",description:"",content:""}),e.add({id:7,href:"/docs/setup/setup/",title:"Set up the Tutorial on GitHub",description:`To do the tutorial exercises interactively you will need a GitHub account.
If you are not ready to setup a GitHub account and run workflows, a \u0026rsquo;take-a-look\u0026rsquo; repository with the exercise issues and pull requests is available at take-a-look. You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions. Skip head to the exercises.
For those working through the exercises, this setup guide will take you though forking the tutorial, enabling issues, setting read and write permissions for workflows, and switching on workflows.`,content:`To do the tutorial exercises interactively you will need a GitHub account.
If you are not ready to setup a GitHub account and run workflows, a \u0026rsquo;take-a-look\u0026rsquo; repository with the exercise issues and pull requests is available at take-a-look. You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions. Skip head to the exercises.
For those working through the exercises, this setup guide will take you though forking the tutorial, enabling issues, setting read and write permissions for workflows, and switching on workflows.
Fork the tutorial repository # The tutorial repository is github.com/scientific-software-reviewers/tutorial
Uncheck Copy the main branch only and click Create fork
You\u0026rsquo;ll see this message as your fork is being created:
After a few seconds you will see your fork.
Enable issues # The tutorial makes use of GitHub issues. To enable issues click the Settings tab
Scroll down to features and click Issues:
Enable read and write permissions for workflows # By default, write permissions are not enabled for workflows. Write permission is needed for the tutorial so the automated actions can be used to create pull requests.
Click the Settings tab
Then Actions -\u0026gt; General on the menu on the left
Then enable read and write permissions for workflows, and allow GitHub Actions to create and approve pull requests and click save:
Switch on Workflows # The tutorial makes use of GitHub actions to create the exercises. To enable actions, click on the Actions tab and then I understand my workflows, go ahead and enable them.
Great! You are now set to create the tutorial exercises.
`}),e.add({id:8,href:"/docs/setup/exercises/",title:"Create the Exercises",description:`There are two GitHub workflows for the tutorials.
create_exercises creates the exercises.
reset_exercises clears the exercises so you can start afresh.
Workflows # To get to the workflows, click the Actions tab
Create the Exercises # To create the exercises, click create_exercises from the menu on the left
Then click Run workflow which will bring up a pop up menu:
Choose the Language exercises. Text creates review exercises that do not require any code knowledge.`,content:`There are two GitHub workflows for the tutorials.
create_exercises creates the exercises.
reset_exercises clears the exercises so you can start afresh.
Workflows # To get to the workflows, click the Actions tab
Create the Exercises # To create the exercises, click create_exercises from the menu on the left
Then click Run workflow which will bring up a pop up menu:
Choose the Language exercises. Text creates review exercises that do not require any code knowledge. The other options are code review exercises specific to a particular programming language.
Click Run workflow to create the exercises. It make take a few seconds to start, but then you will see create_exercises queued in the list of workflows:
Once the workflow is finished, refresh the page and you will see you now have issues and pull requests:
Reset the Exercises # If you would like to close all the issues and pull requests at once, you can use the reset_exercises action. To get to the workflows, click the Actions tab
Click reset_exercises from the menu on the left
click Run workflow to open up a menu, and click the green Run workflow button:
`}),e.add({id:9,href:"/docs/exercises/",title:"Exercises",description:"",content:""}),e.add({id:10,href:"/docs/exercises/ex_intro/",title:"Tutorial Exercises",description:"Exercises for code review",content:`There are three sets of exercises, all on GitHub. Follow the setup instructions to create your own tutorial repository to work on.
If you are not ready to setup a GitHub account and run workflows, a \u0026rsquo;take-a-look\u0026rsquo; repository with the exercise issues and pull requests is available at take-a-look. You can follow along with the tutorial and read the issues and pull requests without having to run your own GitHub actions.
For those working through the exercises, running the create_exercises workflow will generate the text, python, or Fortran exercises in your fork of the tutorial.
The exercises are in no particular order. You can start with whichever seems the most interesting/applicable to you. Each exercise consists of a GitHub issue describing a problem and a pull request which is a proposed solution to the issue. Your mission is to review the proposed solution.
An issue may be a complaint from a user, a bug report, a request for a new feature. Pull requests may be from a colleague, or if your code is publicly available, from someone who uses the code.
`}),e.add({id:11,href:"/docs/exercises/navigating/",title:"Navigating the Exercises",description:"Navigating the GitHub repository",content:`We\u0026rsquo;re going to navigate between issues and pull requests using the menu across the top of the repository. I\u0026rsquo;m using the take-a-look repository to demonstrate.
Click on issues to get to the list of issues.
The issues and pull requests are labelled with the language: text, python, Fortran.
Labels are a way to filter issues and pull requests. Typically on a repository you\u0026rsquo;ll see labels such as \u0026lsquo;Bug\u0026rsquo;, \u0026lsquo;Enhancement\u0026rsquo;, \u0026lsquo;Good First Issue\u0026rsquo;.
Try filtering the issues by label to show only the text exercises.
Let\u0026rsquo;s take a look at text: Exercise 1. Navigate to the issue by clicking on the text: Exercise 1 issue:
There are several places that show there is a pull request linked to this issue. The pink circles in the image below show where you can find linked pull requests from an issue page. Note the actual issue numbers (#2 in this example) and pull request numbers (#5 in this example) may be different depending on how many times you have created and reset the exercises.
Click on one of the links to get to the pull request
The pull request has a description of what has been proposed and which issue is being fixed. The take-a-look repository also has review comments. You\u0026rsquo;ll add your own review comments and suggestion to your fork of the tutorial as you work through the exercise.
`}),e.add({id:12,href:"/docs/exercises/examine-issues/",title:"Examining Issues",description:"Examining Issues",content:`An issue is a way to discuss, plan and track work on a GitHub repository.
Issues can be bugs, complaints from users, requests for new features or added functionality.
When reading though an issue,
Are there multiple problems reported in the issue? Can you confirm the issue by reading the code or documentation? Do you need to run the code to confirm the issue? Can you reproduce the problem? Each tutorial exercise has an issue describing the problem. This issue contains a link to the code under discussion, and some questions to think about when looking at the issue, the code, and the pull request.
Bonus points:
Think about how you would like people to report issues with your own code.
Would you use GitHub issues templates to prompt people to provide relevant information?
What is important information you would like to someone to give in an issue?
version of the code being used? a small example the shows the bug? screenshots of the problem? error messages? desired solution? operating system where the problem occurred (Windows, Mac, Linux)? `}),e.add({id:13,href:"/docs/exercises/examine-pull/",title:"Working with Pull requests",description:"Working with Pull requests",content:`A pull request is a proposed change. A review is feedback on the change.
When you are reviewing, you\u0026rsquo;ll need to assess the scope and size of the pull request. This will give you some idea of how much work will be involved in the review, and what feedback you need to give.
Read the pull request description. Ideally this will give you the scope:
What\u0026rsquo;s changed. Why the changes were made. What the person is looking for from the review. They may have code ready to release, they may have an urgent bug fix, they may have a draft that they want you to look at before they do any more work. Small code changes can have big impacts, so lines of code changed does not necessarily correlate with how difficult, important, or necessary a change is. But you can use GitHub to see:
How many lines of code have been added or removed. How many files have been changed. How many commits were made. These are circled below in pink, and will give you an idea of how big the pull request is.
The lines of code changed is show by the green/red +/-. In this case 14 new lines, 10 lines removed:
Click on \u0026lsquo;Files changed\u0026rsquo; to see what changes are proposed in this pull request.
Each exercise has a pull request which proposes a change to the existing code. You can read about the reasons for the change in the issue linked from the pull request description. The issues contain questions to think about during review.
Your mission is to review the proposed changes! Provide your feedback on the pull request using comments, suggestions, and by giving your review. Note comments, suggestions and reviews are all done in the \u0026lsquo;Files changed\u0026rsquo; tab.
Adding comments # To add a comment, click on the + or - by the line number. A blue box + will show up when you hover over a + or -. You can only comment on the green (new lines of code) or red (code removed) sections.
This will open up a box where you can write a comment on the code. The comments support Markdown
Write your comment, and click \u0026lsquo;Add single comment\u0026rsquo;. Try selecting multiple lines of code to add a comment.
Note there is an Start a review button. If you click \u0026lsquo;Start a review\` rather than \u0026lsquo;Add single comment\u0026rsquo;, this will save all your comments until you finish the review. The difference between these is how many notifications (emails) the pull request author will receive.
Add single comment -\u0026gt; sends a notification to the pull request author for each comment you add.
Start a review -\u0026gt; send one notification when the review is submitted.
Which one of these you choose will depend on who you are working with. Some people prefer the instant collaboration in comments back and forth, some people do not want to get lots and lots of notifications. It\u0026rsquo;s a good idea to ask how someone how they would like to get feedback.
Adding suggestions # Suggestions are the same as comments, but you suggest an edit to the code that can be committed from the pull request. Click the suggestion icon in the comment box:
The lines you have selected will show up. Edit this with what you think should be there. You can click preview to see your code changes.
Try committing changes from a suggestion.
Add your review # When you\u0026rsquo;re ready to add your review click the green Review changes button
You\u0026rsquo;re choices are:
Comment Approve Request changes Bonus points:
What makes a pull request easy to review? What makes a pull request difficult to review? `}),e.add({id:14,href:"/docs/exercises/tldr/",title:"TL;DR",description:"quick start",content:`For each exercise:
The issue describes the problem. Read the code, does the issue describe the problem accurately? In each issue there are some questions to think about when looking at the code.
The pull request is a solution to the issue.
Review the pull request, does the pull request fix the issue?
Add comments about what is good, what is bad. Add suggestions for code changes. Would you accept the pull request as is? If not, why not.
`}),e.add({id:15,href:"/docs/reviewing/reviewing/",title:"Reviewing",description:"Reviewing",content:`Software engineering is programming integrated over time [1]. The goal of code review is to be continually improving our code.
How do you tell if code is better?
Correctness
Readability
Design
Style
Functionality
Complexity
Consistency
Depending on your experience you may focus on one, many, or all of these.
The main question to ask yourself when reviewing code is:
Does the pull request improve the existing code?
Are there unnecessary changes? If the pull request contains other changes that are not related to the issue, how does your team deal with this. It is ok to close the pull request?
Is now a good time to add new functionality?
Does the code do what it says it does?
What testing has been carried out?
What dependencies does the code have? Are they required? Are they secure? Are they manageable?
How does the code handle errors?
Does the new code change how users interact with the software? Does this require a change to the documentation?
Did the author write comments? Do the comments match the code? Are all the comments necessary and helpful?
Does the author follow the style of the rest of the code? Do you have a style guide?
Can I accept the pull request as-is, or are there changes that must be made?
Giving Feedback # When giving feedback on code, try to give comments that:
are actionable. differentiate between a suggestion, a definite change, or a point that needs a discussion or clarification. are collaborative not accusatory. How do organizations decide if code is better? # Take a look at organizations you admire or appreciate. What practices do they employ for code review? Below are some examples of code review guides from well known organizations.
Google eng-practices
Microsoft Code with Engineering Playbook
Python Discord, Code Reviews: A Primer
[1]: WINTERS, T., MANSHRECK, T., \u0026amp; WRIGHT, H. (2020). Software engineering at Google: lessons learned from programming over time.
`}),e.add({id:16,href:"/docs/reviewing/",title:"Reviewing Tips",description:"Tips for code review",content:""}),e.add({id:17,href:"/docs/help/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:"How can I get involved? # Contribute a blog article Add a tutorial section Create a code review example Get Involved! Can I do the tutorial without a GitHub account? # Yes, follow along with the take-a-look. version. This will let you read the issues and pull requests without having to run your own GitHub actions. Is there a glossary of GitHub terms? # Yes available at GitHub glossary. "}),e.add({id:18,href:"/docs/reviewing/community/",title:"Finding Community",description:"Finding community",content:`You are not alone.
Building community and building great teams takes time, skill, and dedicated effort. Luckily, you do not have to start from scratch!
If you are the only person person writing code on your team, join an RSE organization and find your people.
US-RSE. A community of people who make research software happen. Society of Research Software Engineering which emerged from the successful grass-roots RSE movement and is the successor to the UK RSE Association. Better Scientific Software. A hub for scientific software development resources. Campus Champions. Uniting Research Computing Facilitators `}),e.add({id:19,href:"/docs/help/",title:"Help",description:"Help with common code review tasks",content:""}),e.add({id:20,href:"/blog/",title:"Blog",description:"Collecting the good, bad, and ugly parts of code review",content:`A collection of thoughts of code review.
`}),e.add({id:21,href:"/docs/",title:"Tutorial",description:"An online tutorial for code review",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()