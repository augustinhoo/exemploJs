// Sistema de abas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initTabs();
    initColorChanger();
    initFontChanger();
    initGalleryShuffler();
    initObjectAnimation();
    initCounter();
    initCalculator();
    initTodoList();
    initDigitalClock();
    initColorGenerator();
    initQuiz();
});

// Sistema de navegação por abas
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos os botões e conteúdos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Adiciona active ao botão clicado
            btn.classList.add('active');

            // Mostra o conteúdo correspondente
            const targetTab = btn.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Aba 1: Mudança de cor de fundo
function initColorChanger() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const currentColorSpan = document.getElementById('currentColor');
    
    const colors = [
        '#667eea', '#764ba2', '#ff6b6b', '#feca57', 
        '#48dbfb', '#0abde3', '#ff9ff3', '#f368e0',
        '#54a0ff', '#2e86de', '#5f27cd', '#341f97',
        '#00d2d3', '#01a3a4', '#ff3838', '#ff4757',
        '#2ed573', '#7bed9f', '#70a1ff', '#5352ed'
    ];

    changeColorBtn.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const secondColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${secondColor} 100%)`;
        currentColorSpan.textContent = randomColor;
        
        // Animação do botão
        changeColorBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            changeColorBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Aba 2: Mudança de fonte
function initFontChanger() {
    const changeFontBtn = document.getElementById('changeFontBtn');
    const currentFontSpan = document.getElementById('currentFont');
    
    const fonts = [
        'Inter', 'Arial', 'Georgia', 'Times New Roman', 
        'Courier New', 'Verdana', 'Helvetica', 'Comic Sans MS',
        'Impact', 'Trebuchet MS', 'Palatino', 'Garamond'
    ];
    
    let currentFontIndex = 0;

    changeFontBtn.addEventListener('click', () => {
        currentFontIndex = (currentFontIndex + 1) % fonts.length;
        const newFont = fonts[currentFontIndex];
        
        document.body.style.fontFamily = `'${newFont}', sans-serif`;
        currentFontSpan.textContent = newFont;
        
        // Animação do botão
        changeFontBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            changeFontBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Aba 3: Embaralhar galeria
function initGalleryShuffler() {
    const shuffleBtn = document.getElementById('shuffleGalleryBtn');
    const gallery = document.getElementById('gallery');

    shuffleBtn.addEventListener('click', () => {
        const items = Array.from(gallery.children);
        
        // Embaralha o array
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
        
        // Remove todos os itens
        gallery.innerHTML = '';
        
        // Adiciona os itens embaralhados com animação
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                gallery.appendChild(item);
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            }, index * 100);
        });
        
        // Animação do botão
        shuffleBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            shuffleBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Aba 4: Animação de objeto
function initObjectAnimation() {
    const changeAnimationBtn = document.getElementById('changeAnimationBtn');
    const animatedObject = document.getElementById('animatedObject');
    const currentAnimationSpan = document.getElementById('currentAnimation');
    
    const animations = ['bounce', 'spin', 'pulse', 'shake'];
    let currentAnimationIndex = 0;

    changeAnimationBtn.addEventListener('click', () => {
        // Remove animação atual
        animatedObject.className = 'animated-object';
        
        // Adiciona nova animação
        currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
        const newAnimation = animations[currentAnimationIndex];
        
        setTimeout(() => {
            animatedObject.classList.add(newAnimation);
            currentAnimationSpan.textContent = newAnimation;
        }, 100);
        
        // Animação do botão
        changeAnimationBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            changeAnimationBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Aba 5: Contador
function initCounter() {
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetCounterBtn');
    const counterValue = document.getElementById('counterValue');
    
    let count = 0;

    incrementBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
        animateCounter();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        counterValue.textContent = count;
        animateCounter();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        counterValue.textContent = count;
        animateCounter();
    });

    function animateCounter() {
        counterValue.style.transform = 'scale(1.2)';
        counterValue.style.color = '#667eea';
        setTimeout(() => {
            counterValue.style.transform = 'scale(1)';
            counterValue.style.color = '#333';
        }, 200);
    }
}

// Aba 6: Calculadora
function initCalculator() {
    const display = document.getElementById('calcDisplay');
    const buttons = document.querySelectorAll('.calc-btn');
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (button.classList.contains('number')) {
                currentInput += value;
                display.value = currentInput;
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    if (previousInput !== '' && operator !== '') {
                        calculate();
                    }
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            } else if (button.classList.contains('equals')) {
                if (currentInput !== '' && previousInput !== '' && operator !== '') {
                    calculate();
                }
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            }
            
            // Animação do botão
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = current !== 0 ? prev / current : 'Erro';
                break;
            default:
                return;
        }

        display.value = result;
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    }
}

// Aba 7: Lista de tarefas
function initTodoList() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <div class="todo-actions">
                <button class="todo-btn complete-btn" onclick="toggleComplete(this)">✓</button>
                <button class="todo-btn delete-btn" onclick="deleteTodo(this)">✗</button>
            </div>
        `;

        todoList.appendChild(todoItem);
        todoInput.value = '';
        
        // Animação de entrada
        todoItem.style.opacity = '0';
        todoItem.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            todoItem.style.opacity = '1';
            todoItem.style.transform = 'translateX(0)';
        }, 100);
    }

    // Funções globais para os botões da lista
    window.toggleComplete = function(btn) {
        const todoItem = btn.closest('.todo-item');
        todoItem.classList.toggle('completed');
    };

    window.deleteTodo = function(btn) {
        const todoItem = btn.closest('.todo-item');
        todoItem.style.opacity = '0';
        todoItem.style.transform = 'translateX(20px)';
        setTimeout(() => {
            todoItem.remove();
        }, 300);
    };
}

// Aba 8: Relógio digital
function initDigitalClock() {
    const digitalClock = document.getElementById('digitalClock');
    const dateDisplay = document.getElementById('dateDisplay');

    function updateClock() {
        const now = new Date();
        
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
        
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        dateDisplay.textContent = now.toLocaleDateString('pt-BR', options);
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// Aba 9: Gerador de cores
function initColorGenerator() {
    const generateColorBtn = document.getElementById('generateColorBtn');
    const colorPreview = document.getElementById('colorPreview');
    const hexCode = document.getElementById('hexCode');
    const rgbCode = document.getElementById('rgbCode');

    generateColorBtn.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        const rgb = `rgb(${r}, ${g}, ${b})`;
        
        colorPreview.style.background = hex;
        hexCode.textContent = hex;
        rgbCode.textContent = rgb;
        
        // Animação
        colorPreview.style.transform = 'scale(0.9)';
        setTimeout(() => {
            colorPreview.style.transform = 'scale(1)';
        }, 200);
        
        // Animação do botão
        generateColorBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateColorBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Aba 10: Quiz interativo
function initQuiz() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizScore = document.getElementById('quizScore');
    const questionNumber = document.getElementById('questionNumber');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    const restartQuizBtn = document.getElementById('restartQuizBtn');

    const questions = [
        {
            question: "Qual é a forma correta de declarar uma variável em JavaScript?",
            options: ["var minhaVariavel;", "variable minhaVariavel;", "v minhaVariavel;", "declare minhaVariavel;"],
            correct: 0
        },
        {
            question: "Qual método é usado para adicionar um elemento ao final de um array?",
            options: ["add()", "append()", "push()", "insert()"],
            correct: 2
        },
        {
            question: "Como você escreve um comentário de uma linha em JavaScript?",
            options: ["/* comentário */", "// comentário", "<!-- comentário -->", "# comentário"],
            correct: 1
        },
        {
            question: "Qual é o resultado de '2' + 2 em JavaScript?",
            options: ["4", "'22'", "22", "Erro"],
            correct: 1
        },
        {
            question: "Qual função é usada para converter uma string em número?",
            options: ["parseInt()", "toString()", "valueOf()", "convert()"],
            correct: 0
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function loadQuestion() {
        const question = questions[currentQuestion];
        quizQuestion.textContent = question.question;
        questionNumber.textContent = currentQuestion + 1;
        
        quizOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            quizOptions.appendChild(optionElement);
        });
        
        answered = false;
        nextQuestionBtn.style.display = 'none';
    }

    function selectOption(selectedIndex) {
        if (answered) return;
        
        answered = true;
        const question = questions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            score++;
            quizScore.textContent = score;
        }
        
        if (currentQuestion < questions.length - 1) {
            nextQuestionBtn.style.display = 'inline-block';
        } else {
            // Quiz terminado
            setTimeout(() => {
                quizQuestion.textContent = `Quiz concluído! Sua pontuação: ${score}/${questions.length}`;
                quizOptions.innerHTML = '';
                restartQuizBtn.style.display = 'inline-block';
            }, 2000);
        }
    }

    nextQuestionBtn.addEventListener('click', () => {
        currentQuestion++;
        loadQuestion();
    });

    restartQuizBtn.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        quizScore.textContent = score;
        restartQuizBtn.style.display = 'none';
        loadQuestion();
    });

    // Inicializar quiz
    loadQuestion();
}