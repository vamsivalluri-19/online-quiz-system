const defaultQuestions = [

/* =========================
   WEB QUESTIONS (20)
========================= */

{
    category: "Web",
    difficulty: "Easy",
    question: "What is HTML?",
    options: ["Programming Language","Markup Language","Database","Operating System"],
    answer: 1,
    explanation: "HTML is a markup language."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets","Cascading Style Sheets","Color Style System","Computer Style Sheets"],
    answer: 1,
    explanation: "CSS stands for Cascading Style Sheets."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "Which tag is used for paragraph?",
    options: ["<p>","<h1>","<div>","<span>"],
    answer: 0,
    explanation: "p tag defines paragraph."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "Which language is used for web styling?",
    options: ["HTML","CSS","Java","Python"],
    answer: 1,
    explanation: "CSS is used for styling."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "Which HTML tag is used for image?",
    options: ["<img>","<image>","<pic>","<src>"],
    answer: 0,
    explanation: "img tag inserts image."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "What does JavaScript do?",
    options: ["Styling","Structure","Interactivity","Database"],
    answer: 2,
    explanation: "JavaScript adds interactivity to pages."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "Which tag is used for buttons?",
    options: ["<button>","<btn>","<click>","<input>"],
    answer: 0,
    explanation: "button tag creates buttons."
},

{
    category: "Web",
    difficulty: "Easy",
    question: "Which tag represents a heading?",
    options: ["<heading>","<h1>","<head>","<title>"],
    answer: 1,
    explanation: "h1 is a heading tag."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which symbol is used for id selector in CSS?",
    options: [".","#","*","@"],
    answer: 1,
    explanation: "# is used for id selector."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which tag creates hyperlink?",
    options: ["<link>","<a>","<url>","<href>"],
    answer: 1,
    explanation: "Anchor tag creates links."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which company developed React?",
    options: ["Google","Facebook","Microsoft","Apple"],
    answer: 1,
    explanation: "React was developed by Facebook."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which CSS property changes text color?",
    options: ["background-color","font-color","color","text-color"],
    answer: 2,
    explanation: "color property changes text color."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which event occurs when user clicks?",
    options: ["onhover","onclick","onchange","onload"],
    answer: 1,
    explanation: "onclick handles click events."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "Which HTML attribute links CSS file?",
    options: ["src","href","link","style"],
    answer: 1,
    explanation: "href links external CSS."
},

{
    category: "Web",
    difficulty: "Medium",
    question: "What is DOM?",
    options: ["Document Object Model","Data Object Module","Display Object Map","Digital Output Method"],
    answer: 0,
    explanation: "DOM represents page elements."
},

{
    category: "Web",
    difficulty: "Hard",
    question: `What is output?

console.log(typeof []);`,
    options: ["array","object","list","undefined"],
    answer: 1,
    explanation: "Arrays are objects in JavaScript."
},

{
    category: "Web",
    difficulty: "Hard",
    question: `Which method converts JSON to object?`,
    options: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],
    answer: 0,
    explanation: "JSON.parse converts JSON string to object."
},

{
    category: "Web",
    difficulty: "Hard",
    question: "Which JavaScript function creates element?",
    options: ["createElement()","newElement()","addElement()","makeElement()"],
    answer: 0,
    explanation: "createElement() creates new elements."
},

{
    category: "Web",
    difficulty: "Hard",
    question: "What is localStorage used for?",
    options: ["Store functions","Store data locally","Store styles","Store HTML"],
    answer: 1,
    explanation: "localStorage stores client-side data."
},

{
    category: "Web",
    difficulty: "Hard",
    question: "Which CSS display value hides element?",
    options: ["visible","hidden","none","display"],
    answer: 2,
    explanation: "display: none hides elements."
},

/* =========================
   JAVA QUESTIONS (22)
========================= */

{
    category: "Java",
    difficulty: "Easy",
    question: "Who developed Java?",
    options: ["Google","Sun Microsystems","Microsoft","Apple"],
    answer: 1,
    explanation: "Java was developed by Sun Microsystems."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "Which keyword creates class in Java?",
    options: ["function","define","class","object"],
    answer: 2,
    explanation: "class keyword creates class."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "Which package is imported by default?",
    options: ["java.io","java.util","java.lang","java.sql"],
    answer: 2,
    explanation: "java.lang is imported automatically."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "Which keyword is used for inheritance?",
    options: ["implements","extends","inherit","super"],
    answer: 1,
    explanation: "extends keyword is used."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "Which data type stores whole numbers?",
    options: ["float","char","int","boolean"],
    answer: 2,
    explanation: "int stores integers."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "What is the size of int in Java?",
    options: ["16 bits","32 bits","64 bits","8 bits"],
    answer: 1,
    explanation: "int is 32 bits."
},

{
    category: "Java",
    difficulty: "Easy",
    question: "Which keyword is used for constant?",
    options: ["constant","final","const","static"],
    answer: 1,
    explanation: "final creates constants."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "Which method is entry point in Java?",
    options: ["run()","main()","start()","execute()"],
    answer: 1,
    explanation: "main() is entry point."
},

{
    category: "Java",
    difficulty: "Medium",
    question: `What is output?

int x = 10;
System.out.println(x++);`,
    options: ["11","10","9","Error"],
    answer: 1,
    explanation: "Post increment prints old value."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "Which loop executes at least once?",
    options: ["for","while","do while","foreach"],
    answer: 2,
    explanation: "do while executes once minimum."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "Which keyword stops loop?",
    options: ["stop","break","exit","return"],
    answer: 1,
    explanation: "break stops loop."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "Which keyword creates object?",
    options: ["create","new","object","make"],
    answer: 1,
    explanation: "new keyword creates object."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "What is method overloading?",
    options: ["Same name different parameters","Same name same parameters","Different name same parameters","Different class same method"],
    answer: 0,
    explanation: "Overloading: same name, different parameters."
},

{
    category: "Java",
    difficulty: "Medium",
    question: "Which keyword refers to current object?",
    options: ["current","this","self","object"],
    answer: 1,
    explanation: "this refers to current object."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "Which collection stores unique values?",
    options: ["ArrayList","HashMap","HashSet","Vector"],
    answer: 2,
    explanation: "HashSet stores unique values."
},

{
    category: "Java",
    difficulty: "Hard",
    question: `What is output?

String s = "Java";
System.out.println(s.charAt(2));`,
    options: ["J","a","v","Error"],
    answer: 2,
    explanation: "Index 2 contains v."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "Which exception occurs when dividing by zero?",
    options: ["IOException","ArithmeticException","NullPointerException","SQLException"],
    answer: 1,
    explanation: "Division by zero throws ArithmeticException."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "Which keyword prevents inheritance?",
    options: ["const","final","static","private"],
    answer: 1,
    explanation: "final prevents inheritance."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "Which operator compares objects?",
    options: ["=","==","===","equals()"],
    answer: 3,
    explanation: "equals() compares object values."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "What is the Diamond Problem?",
    options: ["Data structure","Multiple inheritance issue","Loop issue","Memory issue"],
    answer: 1,
    explanation: "Diamond problem occurs with multiple inheritance."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "Which keyword defines interface?",
    options: ["abstract","interface","class","type"],
    answer: 1,
    explanation: "interface keyword defines interface."
},

{
    category: "Java",
    difficulty: "Hard",
    question: "What is polymorphism?",
    options: ["Many objects","Many shapes","Many forms of same method","Many classes"],
    answer: 2,
    explanation: "Polymorphism means many forms."
},

/* =========================
   PYTHON QUESTIONS (22)
========================= */

{
    category: "Python",
    difficulty: "Easy",
    question: "Who developed Python?",
    options: ["Dennis Ritchie","Guido van Rossum","James Gosling","Bjarne"],
    answer: 1,
    explanation: "Guido van Rossum developed Python."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which symbol is used for comments?",
    options: ["//","#","<!-- -->","**"],
    answer: 1,
    explanation: "Python uses # for comments."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which keyword creates function?",
    options: ["func","define","def","function"],
    answer: 2,
    explanation: "def creates functions."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which data type is immutable?",
    options: ["List","Tuple","Dictionary","Set"],
    answer: 1,
    explanation: "Tuple is immutable."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which function prints output?",
    options: ["echo()","print()","printf()","show()"],
    answer: 1,
    explanation: "print() displays output."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which keyword is used for loop?",
    options: ["repeat","for","iterate","loop"],
    answer: 1,
    explanation: "for creates loop."
},

{
    category: "Python",
    difficulty: "Easy",
    question: "Which data type stores key-value pairs?",
    options: ["List","Tuple","Dictionary","Set"],
    answer: 2,
    explanation: "Dictionary stores key-value pairs."
},

{
    category: "Python",
    difficulty: "Medium",
    question: `What is output?

print(type([]))`,
    options: ["list","<class 'list'>","array","object"],
    answer: 1,
    explanation: "Returns list class."
},

{
    category: "Python",
    difficulty: "Medium",
    question: `What is output?

print(len("Python"))`,
    options: ["5","6","7","8"],
    answer: 1,
    explanation: "Python has 6 letters."
},

{
    category: "Python",
    difficulty: "Medium",
    question: "Which function takes user input?",
    options: ["scanf()","cin","input()","read()"],
    answer: 2,
    explanation: "input() reads user input."
},

{
    category: "Python",
    difficulty: "Medium",
    question: "Which operator is used for exponent?",
    options: ["^","**","//","%%"],
    answer: 1,
    explanation: "** is exponent operator."
},

{
    category: "Python",
    difficulty: "Medium",
    question: "Which method removes last item from list?",
    options: ["remove()","delete()","pop()","erase()"],
    answer: 2,
    explanation: "pop() removes last item."
},

{
    category: "Python",
    difficulty: "Medium",
    question: "What is slicing in Python?",
    options: ["Cutting strings","Extracting part of sequence","Dividing list","Breaking code"],
    answer: 1,
    explanation: "Slicing extracts part of sequence."
},

{
    category: "Python",
    difficulty: "Medium",
    question: "Which method converts string to integer?",
    options: ["str.int()","int()","convert()","parse()"],
    answer: 1,
    explanation: "int() converts to integer."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which library is used for AI/ML?",
    options: ["NumPy","TensorFlow","Pandas","Tkinter"],
    answer: 1,
    explanation: "TensorFlow is used for AI."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which keyword handles exceptions?",
    options: ["catch","error","try","check"],
    answer: 2,
    explanation: "try handles exceptions."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which method adds item to list?",
    options: ["push()","append()","add()","insertLast()"],
    answer: 1,
    explanation: "append() adds item."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which keyword defines class?",
    options: ["object","class","define","struct"],
    answer: 1,
    explanation: "class defines classes."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "What does *args do?",
    options: ["Single argument","Multiple arguments","No arguments","Keyword arguments"],
    answer: 1,
    explanation: "*args accepts multiple arguments."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which method returns list elements in reverse?",
    options: ["reverse()","flip()","backward()","sort()"],
    answer: 0,
    explanation: "reverse() reverses list."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "What is lambda function?",
    options: ["Named function","Anonymous function","Class method","Static method"],
    answer: 1,
    explanation: "Lambda is anonymous function."
},

{
    category: "Python",
    difficulty: "Hard",
    question: "Which method counts occurrences?",
    options: ["find()","count()","search()","locate()"],
    answer: 1,
    explanation: "count() counts occurrences."
},

/* =========================
   SQL QUESTIONS (21)
========================= */

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which SQL command retrieves data?",
    options: ["INSERT","UPDATE","SELECT","DELETE"],
    answer: 2,
    explanation: "SELECT retrieves records."
},

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which clause filters rows?",
    options: ["GROUP BY","ORDER BY","WHERE","LIMIT"],
    answer: 2,
    explanation: "WHERE filters rows."
},

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which command inserts data?",
    options: ["ADD","PUT","INSERT","CREATE"],
    answer: 2,
    explanation: "INSERT adds data."
},

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which command deletes table?",
    options: ["REMOVE","DROP","DELETE","CLEAR"],
    answer: 1,
    explanation: "DROP deletes table."
},

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which keyword sorts results?",
    options: ["WHERE","SORT","ORDER BY","GROUP"],
    answer: 2,
    explanation: "ORDER BY sorts data."
},

{
    category: "SQL",
    difficulty: "Easy",
    question: "Which wildcard matches any character?",
    options: ["%","_","*","#"],
    answer: 0,
    explanation: "% matches any characters."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which join returns matching rows only?",
    options: ["LEFT JOIN","RIGHT JOIN","INNER JOIN","FULL JOIN"],
    answer: 2,
    explanation: "INNER JOIN returns matches."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which function counts rows?",
    options: ["SUM()","COUNT()","TOTAL()","NUMBER()"],
    answer: 1,
    explanation: "COUNT counts rows."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which command updates data?",
    options: ["MODIFY","CHANGE","UPDATE","SETROW"],
    answer: 2,
    explanation: "UPDATE modifies rows."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which clause groups rows?",
    options: ["GROUP BY","ORDER BY","WHERE","LIMIT"],
    answer: 0,
    explanation: "GROUP BY groups records."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which operator checks NULL values?",
    options: ["== NULL","IS NULL","= NULL","CHECK NULL"],
    answer: 1,
    explanation: "IS NULL checks null."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which function calculates sum?",
    options: ["ADD()","SUM()","TOTAL()","CALC()"],
    answer: 1,
    explanation: "SUM() calculates total."
},

{
    category: "SQL",
    difficulty: "Medium",
    question: "Which keyword limits results?",
    options: ["WHERE","LIMIT","RESTRICT","TOP"],
    answer: 1,
    explanation: "LIMIT restricts results."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which command removes all rows but keeps table?",
    options: ["DROP","DELETE","REMOVE","TRUNCATE"],
    answer: 3,
    explanation: "TRUNCATE removes rows only."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which key uniquely identifies rows?",
    options: ["Foreign Key","Primary Key","Candidate Key","Composite Key"],
    answer: 1,
    explanation: "Primary key uniquely identifies rows."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which join returns all rows from left table?",
    options: ["RIGHT JOIN","LEFT JOIN","INNER JOIN","CROSS JOIN"],
    answer: 1,
    explanation: "LEFT JOIN returns left rows."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which command creates table?",
    options: ["BUILD","NEW","CREATE","TABLE"],
    answer: 2,
    explanation: "CREATE creates table."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which keyword removes duplicate rows?",
    options: ["DISTINCT","UNIQUE","REMOVE","FILTER"],
    answer: 0,
    explanation: "DISTINCT removes duplicates."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "What is a foreign key?",
    options: ["Key that links to another table","Primary key","Unique key","Index key"],
    answer: 0,
    explanation: "Foreign key references another table."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which function gets maximum value?",
    options: ["MAX()","HIGHEST()","GREATEST()","TOP()"],
    answer: 0,
    explanation: "MAX() returns maximum value."
},

{
    category: "SQL",
    difficulty: "Hard",
    question: "Which clause combines conditions?",
    options: ["AND","OR","NOT","BOTH"],
    answer: 0,
    explanation: "AND combines multiple conditions."
},

/* =========================
   DSA QUESTIONS (21)
========================= */

{
    category: "DSA",
    difficulty: "Easy",
    question: "Which structure follows FIFO?",
    options: ["Stack","Queue","Tree","Graph"],
    answer: 1,
    explanation: "Queue follows FIFO."
},

{
    category: "DSA",
    difficulty: "Easy",
    question: "Which structure follows LIFO?",
    options: ["Queue","Stack","Tree","Graph"],
    answer: 1,
    explanation: "Stack follows LIFO."
},

{
    category: "DSA",
    difficulty: "Easy",
    question: "Which search is fastest on sorted array?",
    options: ["Linear","Binary","Jump","DFS"],
    answer: 1,
    explanation: "Binary search is fastest."
},

{
    category: "DSA",
    difficulty: "Easy",
    question: "Which structure uses nodes?",
    options: ["Array","Linked List","Stack","Queue"],
    answer: 1,
    explanation: "Linked list uses nodes."
},

{
    category: "DSA",
    difficulty: "Easy",
    question: "Which traversal uses recursion mostly?",
    options: ["Tree","Queue","Stack","Array"],
    answer: 0,
    explanation: "Trees use recursion."
},

{
    category: "DSA",
    difficulty: "Easy",
    question: "What is time complexity of linear search?",
    options: ["O(log n)","O(n)","O(n²)","O(1)"],
    answer: 1,
    explanation: "Linear search is O(n)."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which sorting has O(n log n) average complexity?",
    options: ["Bubble","Selection","Quick","Insertion"],
    answer: 2,
    explanation: "Quick sort average is O(n log n)."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which structure stores hierarchical data?",
    options: ["Array","Queue","Tree","Stack"],
    answer: 2,
    explanation: "Tree stores hierarchy."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which traversal visits root first?",
    options: ["Inorder","Preorder","Postorder","Levelorder"],
    answer: 1,
    explanation: "Preorder visits root first."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which graph traversal uses queue?",
    options: ["DFS","BFS","Tree","Sort"],
    answer: 1,
    explanation: "BFS uses queue."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which graph traversal uses stack?",
    options: ["BFS","DFS","Sort","Search"],
    answer: 1,
    explanation: "DFS uses stack."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "What is the worst case complexity of bubble sort?",
    options: ["O(log n)","O(n)","O(n²)","O(1)"],
    answer: 2,
    explanation: "Bubble sort worst case is O(n²)."
},

{
    category: "DSA",
    difficulty: "Medium",
    question: "Which sorting divides array into two parts?",
    options: ["Bubble","Merge","Insertion","Selection"],
    answer: 1,
    explanation: "Merge sort divides array."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "Binary search requires?",
    options: ["Random array","Sorted array","Queue","Graph"],
    answer: 1,
    explanation: "Binary search requires sorting."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "Which sorting is stable?",
    options: ["Quick","Heap","Merge","Selection"],
    answer: 2,
    explanation: "Merge sort is stable."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "Which structure avoids duplicate values?",
    options: ["Set","List","Array","Queue"],
    answer: 0,
    explanation: "Set avoids duplicates."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "What is complexity of binary search?",
    options: ["O(n)","O(log n)","O(n2)","O(1)"],
    answer: 1,
    explanation: "Binary search is O(log n)."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "Which algorithm finds shortest path?",
    options: ["DFS","BFS","Dijkstra","Bubble"],
    answer: 2,
    explanation: "Dijkstra finds shortest path."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "What is a hash table?",
    options: ["Data structure for sorting","Data structure for fast lookup","Tree structure","Queue structure"],
    answer: 1,
    explanation: "Hash table enables fast lookup."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "Which tree is self-balancing?",
    options: ["Binary Tree","AVL Tree","Linear Tree","Array Tree"],
    answer: 1,
    explanation: "AVL tree self-balances."
},

{
    category: "DSA",
    difficulty: "Hard",
    question: "What is recursion?",
    options: ["Loop structure","Function calling itself","Array iteration","Data storage"],
    answer: 1,
    explanation: "Recursion is function calling itself."
},

/* =========================
   GIT QUESTIONS (21)
========================= */

{
    category: "Git",
    difficulty: "Easy",
    question: "Which command initializes repository?",
    options: ["git start","git init","git create","git new"],
    answer: 1,
    explanation: "git init initializes repo."
},

{
    category: "Git",
    difficulty: "Easy",
    question: "Which command checks status?",
    options: ["git check","git status","git info","git state"],
    answer: 1,
    explanation: "git status checks repo status."
},

{
    category: "Git",
    difficulty: "Easy",
    question: "Which command uploads commits?",
    options: ["git upload","git push","git send","git publish"],
    answer: 1,
    explanation: "git push uploads commits."
},

{
    category: "Git",
    difficulty: "Easy",
    question: "Which command downloads repo?",
    options: ["git clone","git fetch","git pull","git copy"],
    answer: 0,
    explanation: "git clone downloads repo."
},

{
    category: "Git",
    difficulty: "Easy",
    question: "Which command saves changes locally?",
    options: ["git save","git push","git commit","git upload"],
    answer: 2,
    explanation: "git commit saves changes."
},

{
    category: "Git",
    difficulty: "Easy",
    question: "What does .gitignore do?",
    options: ["Ignores users","Ignores files","Ignores commits","Ignores branches"],
    answer: 1,
    explanation: ".gitignore excludes files."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which command creates branch?",
    options: ["git branch","git create","git checkout","git new"],
    answer: 0,
    explanation: "git branch creates branch."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which command switches branch?",
    options: ["git switch","git move","git branch","git jump"],
    answer: 0,
    explanation: "git switch changes branch."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which command merges branch?",
    options: ["git combine","git merge","git join","git add"],
    answer: 1,
    explanation: "git merge merges branches."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which command adds files?",
    options: ["git stage","git add","git commit","git include"],
    answer: 1,
    explanation: "git add stages files."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which platform hosts Git repositories?",
    options: ["Google","GitHub","Netflix","Oracle"],
    answer: 1,
    explanation: "GitHub hosts repositories."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "What is a commit?",
    options: ["Branch point","Snapshot of changes","Merge point","Tag point"],
    answer: 1,
    explanation: "Commit is snapshot of changes."
},

{
    category: "Git",
    difficulty: "Medium",
    question: "Which command shows uncommitted changes?",
    options: ["git log","git diff","git show","git status"],
    answer: 1,
    explanation: "git diff shows changes."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command shows commit history?",
    options: ["git log","git history","git commits","git list"],
    answer: 0,
    explanation: "git log shows history."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command pulls latest changes?",
    options: ["git fetch","git pull","git update","git latest"],
    answer: 1,
    explanation: "git pull gets latest changes."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command removes tracked file?",
    options: ["git delete","git remove","git rm","git erase"],
    answer: 2,
    explanation: "git rm removes files."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command creates copy of repo?",
    options: ["git clone","git copy","git fork","git duplicate"],
    answer: 0,
    explanation: "git clone copies repository."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command downloads without merge?",
    options: ["git pull","git clone","git fetch","git merge"],
    answer: 2,
    explanation: "git fetch downloads only."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "What is a pull request?",
    options: ["Request to pull repo","Request to merge code","Request to delete branch","Request to create tag"],
    answer: 1,
    explanation: "Pull request proposes code merge."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "Which command undoes last commit?",
    options: ["git undo","git reset","git revert","git delete"],
    answer: 1,
    explanation: "git reset undoes commits."
},

{
    category: "Git",
    difficulty: "Hard",
    question: "What is HEAD in Git?",
    options: ["Current user","Current branch","Repository head","Server head"],
    answer: 1,
    explanation: "HEAD points to current branch."
},

/* =========================
   COMMUNICATION QUESTIONS (23)
========================= */

{
    category: "Communication",
    difficulty: "Easy",
    question: "Which skill is most important in communication?",
    options: ["Listening","Sleeping","Typing","Coding"],
    answer: 0,
    explanation: "Listening is essential."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "Which communication is spoken?",
    options: ["Written","Visual","Verbal","Digital"],
    answer: 2,
    explanation: "Verbal communication is spoken."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "Which communication uses body language?",
    options: ["Non-verbal","Written","Visual","Formal"],
    answer: 0,
    explanation: "Body language is non-verbal."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "Which skill improves teamwork?",
    options: ["Listening","Sleeping","Ignoring","Silence"],
    answer: 0,
    explanation: "Listening improves teamwork."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "Eye contact improves?",
    options: ["Confidence","Fear","Silence","Typing"],
    answer: 0,
    explanation: "Eye contact improves confidence."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "Which communication uses signs?",
    options: ["Verbal","Written","Visual","Physical"],
    answer: 2,
    explanation: "Visual communication uses signs."
},

{
    category: "Communication",
    difficulty: "Easy",
    question: "What is feedback in communication?",
    options: ["Ignoring message","Acknowledging and responding","Sleeping","Typing"],
    answer: 1,
    explanation: "Feedback is responding to message."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which communication is face-to-face?",
    options: ["Written","Visual","Verbal","Online"],
    answer: 2,
    explanation: "Face-to-face is verbal."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which skill is needed in interviews?",
    options: ["Communication","Sleeping","Gaming","Typing"],
    answer: 0,
    explanation: "Communication is essential."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which communication uses email?",
    options: ["Written","Verbal","Visual","Non-verbal"],
    answer: 0,
    explanation: "Email is written communication."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which factor improves speaking?",
    options: ["Confidence","Fear","Silence","Anger"],
    answer: 0,
    explanation: "Confidence improves speaking."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which communication uses gestures?",
    options: ["Verbal","Written","Non-verbal","Formal"],
    answer: 2,
    explanation: "Gestures are non-verbal."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "What is active listening?",
    options: ["Hearing words","Concentrating fully","Ignoring speaker","Thinking ahead"],
    answer: 1,
    explanation: "Active listening is full concentration."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "Which improves clarity in speech?",
    options: ["Mumbling","Enunciation","Rushing","Silence"],
    answer: 1,
    explanation: "Enunciation improves clarity."
},

{
    category: "Communication",
    difficulty: "Medium",
    question: "What is empathy in communication?",
    options: ["Sympathy only","Understanding others' feelings","Ignoring emotions","Being rude"],
    answer: 1,
    explanation: "Empathy means understanding feelings."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which skill helps solve conflicts?",
    options: ["Communication","Silence","Ignoring","Sleeping"],
    answer: 0,
    explanation: "Communication solves conflicts."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which communication is official?",
    options: ["Formal","Informal","Casual","Friendly"],
    answer: 0,
    explanation: "Formal communication is official."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which barrier affects communication?",
    options: ["Noise","Listening","Confidence","Practice"],
    answer: 0,
    explanation: "Noise affects communication."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which communication is between friends?",
    options: ["Formal","Informal","Official","Business"],
    answer: 1,
    explanation: "Friends use informal communication."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which skill improves presentations?",
    options: ["Confidence","Fear","Silence","Anger"],
    answer: 0,
    explanation: "Confidence improves presentations."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "What is tone in communication?",
    options: ["Voice pitch","Attitude conveyed","Speed of speech","Volume level"],
    answer: 1,
    explanation: "Tone conveys attitude."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "What prevents effective communication?",
    options: ["Listening","Clarity","Distractions","Feedback"],
    answer: 2,
    explanation: "Distractions prevent communication."
},

{
    category: "Communication",
    difficulty: "Hard",
    question: "Which is a communication skill?",
    options: ["Procrastination","Assertiveness","Laziness","Avoidance"],
    answer: 1,
    explanation: "Assertiveness is communication skill."
}

];

let questionBank;

try {
    const storedQuestions = JSON.parse(localStorage.getItem("questions"));

    if (Array.isArray(storedQuestions) && storedQuestions.length > 0) {
        questionBank = storedQuestions;
    } else {
        questionBank = [...defaultQuestions];
        localStorage.setItem("questions", JSON.stringify(questionBank));
    }
} catch (error) {
    questionBank = [...defaultQuestions];
    localStorage.setItem("questions", JSON.stringify(questionBank));
}

window.questions = questionBank;