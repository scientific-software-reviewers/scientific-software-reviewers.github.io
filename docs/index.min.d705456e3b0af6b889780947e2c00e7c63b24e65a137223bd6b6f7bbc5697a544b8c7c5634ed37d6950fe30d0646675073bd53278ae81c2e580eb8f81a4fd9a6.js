var suggestions=document.getElementById("suggestions"),search=document.getElementById("search");search!==null&&document.addEventListener("keydown",inputFocus);function inputFocus(e){e.ctrlKey&&e.key==="/"&&(e.preventDefault(),search.focus()),e.key==="Escape"&&(search.blur(),suggestions.classList.add("d-none"))}document.addEventListener("click",function(e){var t=suggestions.contains(e.target);t||suggestions.classList.add("d-none")}),document.addEventListener("keydown",suggestionFocus);function suggestionFocus(e){const s=suggestions.classList.contains("d-none");if(s)return;const t=[...suggestions.querySelectorAll("a")];if(t.length===0)return;const n=t.indexOf(document.activeElement);if(e.key==="ArrowUp"){e.preventDefault();const s=n>0?n-1:0;t[s].focus()}else if(e.key==="ArrowDown"){e.preventDefault();const s=n+1<t.length?n+1:n;t[s].focus()}}(function(){var e=new FlexSearch.Document({tokenize:"forward",cache:100,document:{id:"id",store:["href","title","description"],index:["title","description","content"]}});e.add({id:0,href:"/blog/welcome-to-code-review/",title:"Welcome to Code Review",description:"First post on Code Review",content:`Introducing code review for Scientific Software.
Helen Kershaw
`}),e.add({id:1,href:"/docs/welcome/introduction/",title:"Introduction",description:"Code Review",content:`Welcome to Code Review.
What are the main learning outcomes? # When reviewing:
Does the pull request address the issue? Are there any deal breakers that would stop you accepting the changes? Can you suggest any improvements? What is a good way to phrase your suggested improvements? Is the solution overly complicated? For an example of an overly complicated solution, see the famous fizz buzz in Tensorflow. Are the comments up to date, necessary, helpful? Would you except the pull request as it is now? Are your suggested changes must-do? nice-to-have? nitpicks? How would you communicate this? Do you spend a lot of time reviewing the code style? Is it worth having a style guide for contributors? Can you make use of an existing style guide? Or a linter? When workng on your own contributions:
When putting in a pull request, how can you make it easy for a reviewer to understand what you have done? What makes a good pull request, what makes a bad pull request? Can you commit code in a way that lets someone review your code more easily? Should you separate functional changes from style changes? Would you use a tool such as commitizen to prompt yourself at commit time? Why? Why not? What prerequisite knowledge does someone need? # Ideally, it would be good to have minimum coding knowledge to get started reviewing. The text exercises make no assumptions about coding knowledge. Variations in cultural knowledge always exist and it is important to have this in mind when writing or reviewing. Text exercise 2 is an example of culturally specific mixup. Python is used by people across various domains by people with various scientific and non-scientific backgrounds. The python exercises will be at the \u0026ldquo;introduction to python level\u0026rdquo; found in \u0026ldquo;learn python\u0026rdquo; tutorials. Fortran has a more restricted user base in terms of which domains people work in. These domains typically have numerical code. For Fortran exercise 1, some mathematics knowledge is assumed.
`}),e.add({id:2,href:"/docs/exercises/ex_intro/",title:"Tutorial Exercises",description:"Exercises for code review",content:`There are three sets of exercises. Running the workflow will generate the text, python, or Fortran exercises
If you do not want to
Some GitHub basics.
The description of the problem is
Text # Python # Fortran # `}),e.add({id:3,href:"/docs/welcome/",title:"Welcome",description:"Welcome to Code Review",content:""}),e.add({id:4,href:"/docs/setup/setup/",title:"Set up the tutorial on GitHub",description:`To do the tutorial exercises you will need a GitHub account.
The tutorial can be found at github.com/scientific-software-reviewers/tutorial
Setup your fork # Fork the tutorial repository # Uncheck Copy the main branch only and click Create fork
You\u0026rsquo;ll see this message as your fork is being created:
After a few seconds you will see your fork.
Enable issues # The tutorial makes use of GitHub issues. To enable issues click the Settings tab`,content:`To do the tutorial exercises you will need a GitHub account.
The tutorial can be found at github.com/scientific-software-reviewers/tutorial
Setup your fork # Fork the tutorial repository # Uncheck Copy the main branch only and click Create fork
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
`}),e.add({id:5,href:"/docs/setup/exercises/",title:"Create the Exercises",description:`There are two GitHub workflows for the tutorials.
create_exercises creates the exercises.
reset_exercises clears the exercises so you can start afresh.
Workflows # To get to the workflows, click the Actions tab
Create the Exercises # To create the exercises, click create_exercises from the menu on the left
Then click Run workflow which will bring up a pop up menu:
Choose the Language exercises. Text creates review exercises that do not require and code knowledge.`,content:`There are two GitHub workflows for the tutorials.
create_exercises creates the exercises.
reset_exercises clears the exercises so you can start afresh.
Workflows # To get to the workflows, click the Actions tab
Create the Exercises # To create the exercises, click create_exercises from the menu on the left
Then click Run workflow which will bring up a pop up menu:
Choose the Language exercises. Text creates review exercises that do not require and code knowledge. The other options are code review exercises specific to a particular programming language.
Click Run workflow to create the exercises. It make take a few seconds to start, but then you will see create_exercises queued in the list of workflows:
Once the workflow is finished, refresh the page and you will see you now have issues and pull requests:
Reset the Exercises # If you would like to close all the issues and pull requests at once, you can use the reset_exercises action. To get to the workflows, click the Actions tab
Click reset_exercises from the menu on the left
click Run workflow to open up a menu, and click the green Run workflow button:
`}),e.add({id:6,href:"/docs/setup/",title:"Setup The Tutorial",description:"",content:""}),e.add({id:7,href:"/docs/exercises/",title:"Exercises",description:"",content:""}),e.add({id:8,href:"/docs/help/",title:"Help",description:"Help with common code review tasks",content:""}),e.add({id:9,href:"/docs/help/faq/",title:"FAQ",description:"Answers to frequently asked questions.",content:"How can I get involved? # Contribute a blog article Add a tutorial section Create a code review example "}),e.add({id:10,href:"/blog/",title:"Blog",description:"Collecting the good, bad, and ugly parts of code review",content:""}),e.add({id:11,href:"/docs/",title:"Tutorial",description:"An online tutorial for code review",content:""}),search.addEventListener("input",t,!0);function t(){const s=5;var n=this.value,o=e.search(n,{limit:s,enrich:!0});const t=new Map;for(const e of o.flatMap(e=>e.result)){if(t.has(e.doc.href))continue;t.set(e.doc.href,e.doc)}if(suggestions.innerHTML="",suggestions.classList.remove("d-none"),t.size===0&&n){const e=document.createElement("div");e.innerHTML=`No results for "<strong>${n}</strong>"`,e.classList.add("suggestion__no-results"),suggestions.appendChild(e);return}for(const[r,a]of t){const n=document.createElement("div");suggestions.appendChild(n);const e=document.createElement("a");e.href=r,n.appendChild(e);const o=document.createElement("span");o.textContent=a.title,o.classList.add("suggestion__title"),e.appendChild(o);const i=document.createElement("span");if(i.textContent=a.description,i.classList.add("suggestion__description"),e.appendChild(i),suggestions.appendChild(n),suggestions.childElementCount==s)break}}})()