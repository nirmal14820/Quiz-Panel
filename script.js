// LOGIN PAGE
if (window.location.pathname.includes("login.html")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let errorMsg = document.getElementById("errorMsg");

        let emailPattern = /^(2[1-9]|[3-9][0-9])amtics[0-9]{3}@gmail\.com$/;
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

        if (!emailPattern.test(email)) {
            errorMsg.innerText = "Invalid email format!";
            return;
        }
        if (!passwordPattern.test(password)) {
            errorMsg.innerText = "Password must be 6+ characters and contain upper, lower & special character!";
            return;
        }

        localStorage.setItem("user", email);
        window.location.href = "select-quiz.html";
    });
}

// QUIZ SELECTION PAGE
if (window.location.pathname.includes("select-quiz.html")) {
    if (!localStorage.getItem("user")) {
        window.location.href = "login.html";
    }

    document.querySelectorAll(".quiz-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            localStorage.setItem("quizNumber", index + 1);
            window.location.href = "quiz.html";
        });
    });
}

// ALL QUIZZES
const allQuizzes = {
    1: [
        { question: "Which are JavaScript file extensions?", options: ["js", "jsx", "java"], answer: ["js", "jsx"] },
        { question: "Which are loop types?", options: ["for", "while", "repeat"], answer: ["for", "while"] },
        { question: "Select all primitive types:", options: ["Boolean", "Object", "String", "Number"], answer: ["Boolean", "String", "Number"] }
    ],
    2: [
        { question: "Which language is used to add interactivity to a webpage?", options: ["HTML", "CSS", "JavaScript"], answer: "JavaScript" },
        { question: "What keyword is used to define a variable?", options: ["define", "set", "let"], answer: "let" },
        { question: "How to write a single-line comment?", options: ["//", "/*", "<!--"], answer: "//" },
        { question: "Which symbol is used for assignment?", options: ["=", "==", "==="], answer: "=" },
        { question: "What is 2 + 2 in JS?", options: ["22", "4", "'4'"], answer: "4" },
        { question: "Which keyword creates a constant?", options: ["let", "const", "var"], answer: "const" },
        { question: "Which method alerts a message?", options: ["prompt()", "alert()", "console.log()"], answer: "alert()" },
        { question: "What does typeof 5 return?", options: ["number", "string", "object"], answer: "number" },
        { question: "Which is used for logical AND?", options: ["&&", "||", "!="], answer: "&&" },
        { question: "Which keyword skips an iteration in loop?", options: ["skip", "continue", "stop"], answer: "continue" }
    ],
    3: [
        { question: "Which keyword is used to define a function?", options: ["function", "def", "method"], answer: "function" },
        { question: "What is the output of '5' + 3?", options: ["8", "53", "error"], answer: "53" },
        { question: "What is used to declare a block-scoped variable?", options: ["var", "let", "const"], answer: "let" },
        { question: "Which symbol means NOT equal?", options: ["!=", "==", "="], answer: "!=" },
        { question: "typeof 'hello' returns?", options: ["string", "text", "word"], answer: "string" },
        { question: "How to create a comment?", options: ["// comment", "# comment", "<!-- comment -->"], answer: "// comment" },
        { question: "Which is NOT a loop in JS?", options: ["for", "foreach", "repeat"], answer: "repeat" },
        { question: "JS stands for?", options: ["Java Script", "JavaScript", "Just Script"], answer: "JavaScript" },
        { question: "How to display a popup?", options: ["popup()", "console()", "alert()"], answer: "alert()" },
        { question: "Which data type can store true/false?", options: ["Boolean", "String", "Number"], answer: "Boolean" }
    ],
    4: [
        { question: "What does NaN mean?", options: ["Not a Name", "Not a Number", "New and Null"], answer: "Not a Number" },
        { question: "Which operator is used for addition?", options: ["+", "-", "*"], answer: "+" },
        { question: "What does === compare?", options: ["value only", "type only", "value and type"], answer: "value and type" },
        { question: "What is the result of 3 * 2?", options: ["5", "6", "8"], answer: "6" },
        { question: "Which is used to define constant?", options: ["const", "constant", "final"], answer: "const" },
        { question: "How to write a multi-line comment?", options: ["/* */", "//", "<!-- -->"], answer: "/* */" },
        { question: "To get user input in popup?", options: ["prompt()", "alert()", "console.log()"], answer: "prompt()" },
        { question: "Boolean type has values?", options: ["true/false", "yes/no", "1/0"], answer: "true/false" },
        { question: "Which array method adds at the end?", options: ["push()", "pop()", "shift()"], answer: "push()" },
        { question: "Which method removes last item?", options: ["pop()", "push()", "unshift()"], answer: "pop()" }
    ],
    5: [
        { question: "Which keyword creates a variable?", options: ["var", "let", "Both"], answer: "Both" },
        { question: "Which is a string?", options: ["\"hello\"", "5", "true"], answer: "\"hello\"" },
        { question: "To compare values and types use?", options: ["==", "===", "="], answer: "===" },
        { question: "Which is not a JS data type?", options: ["Number", "Character", "Boolean"], answer: "Character" },
        { question: "Which loop is entry-controlled?", options: ["for", "do-while", "Both"], answer: "for" },
        { question: "What returns true if 4 > 2?", options: ["true", "false", "undefined"], answer: "true" },
        { question: "How do you call a function?", options: ["myFunc()", "call myFunc", "run myFunc"], answer: "myFunc()" },
        { question: "What is an object in JS?", options: ["collection of key-values", "single value", "none"], answer: "collection of key-values" },
        { question: "How to convert string to number?", options: ["Number()", "parseNum()", "convert()"], answer: "Number()" },
        { question: "Which array method joins elements?", options: ["join()", "add()", "combine()"], answer: "join()" }
    ],
    6: [
        { question: "JS is a ________ language.", options: ["compiled", "interpreted", "both"], answer: "interpreted" },
        { question: "How to declare a string?", options: ["let s = 'text';", "let s = text;", "let s = \"text\""], answer: "let s = 'text';" },
        { question: "What does 'null' mean?", options: ["nothing", "zero", "undefined"], answer: "nothing" },
        { question: "Which operator is for OR?", options: ["||", "&&", "!="], answer: "||" },
        { question: "What is a function?", options: ["block of code", "variable", "loop"], answer: "block of code" },
        { question: "typeof null returns?", options: ["object", "null", "undefined"], answer: "object" },
        { question: "To combine strings use?", options: ["+", "-", "*"], answer: "+" },
        { question: "What does 'break' do in loop?", options: ["exit loop", "restart loop", "pause loop"], answer: "exit loop" },
        { question: "What is DOM?", options: ["Document Object Model", "Data Object Model", "Design Object Model"], answer: "Document Object Model" },
        { question: "Best place to add script tag?", options: ["before </body>", "in head", "after </html>"], answer: "before </body>" }
    ]
};



// QUIZ PAGE
if (window.location.pathname.includes("quiz.html")) {
    if (!localStorage.getItem("user")) {
        window.location.href = "login.html";
    }

    const quizNumber = localStorage.getItem("quizNumber");
    if (!quizNumber || !allQuizzes[quizNumber]) {
        alert("Please select a quiz first.");
        window.location.href = "select-quiz.html";
    }

    const quizData = allQuizzes[quizNumber];
    let score = 0;
    let progress = 0;
    const totalQuestions = quizData.length;

    function* questionGenerator() {
        for (let i = 0; i < quizData.length; i++) {
            yield quizData[i];
        }
    }

    const quizIterator = questionGenerator();
    let currentAnswer = [];

    function loadNextQuestion() {
        let next = quizIterator.next();
        if (!next.done) {
            const q = next.value;
            document.getElementById("question").innerText = q.question;

            let optionsDiv = document.getElementById("options");
            optionsDiv.innerHTML = "";
            currentAnswer = [];

            q.options.forEach(option => {
                let label = document.createElement("label");
                label.style.display = "block";

                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = option;
                checkbox.onchange = (e) => {
                    if (e.target.checked) {
                        currentAnswer.push(option);
                    } else {
                        currentAnswer = currentAnswer.filter(item => item !== option);
                    }
                };

                label.appendChild(checkbox);
                label.append(" " + option);
                optionsDiv.appendChild(label);
            });

            document.getElementById("nextBtn").disabled = false;
            document.getElementById("nextBtn").onclick = () => {
                checkAnswer(currentAnswer, q.answer);
            };

            progress++;
            updateProgressBar(progress, totalQuestions);
        } else {
            localStorage.setItem("score", score);
            window.location.href = "result.html";
        }
    }

    function checkAnswer(selected, correct) {
        selected.sort();
        correct.sort();
        if (JSON.stringify(selected) === JSON.stringify(correct)) {
            score++;
        }
        loadNextQuestion();
    }

    function updateProgressBar(current, total) {
        const progressBar = document.getElementById("progress");
        progressBar.style.width = `${(current / total) * 100}%`;
    }

    loadNextQuestion();
}

// RESULT PAGE
if (window.location.pathname.includes("result.html")) {
    const finalScore = localStorage.getItem("score");
    const quizNumber = localStorage.getItem("quizNumber");

    document.getElementById("finalScore").innerText = `You scored ${finalScore}/${allQuizzes[quizNumber].length}`;

    window.restartQuiz = () => {
        localStorage.removeItem("score");
        localStorage.removeItem("quizNumber");
        window.location.href = "select-quiz.html";
    };
}
