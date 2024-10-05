// Fake Terminal Commands
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

// Array of corny programming jokes
const jokes = [
    "Why do programmers prefer dark mode? Because the light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, it's a hardware problem.",
    "Why do Java developers wear glasses? Because they don’t see sharp.",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "Why do programmers hate nature? It has too many bugs.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "What is a programmer's favorite hangout place? Foo Bar.",
    "Why do Python developers prefer snakes over dogs? Because they have fewer references.",
    "Why do C++ developers struggle with relationships? They can’t handle exceptions.",
    "How do functions break up? They stop calling each other!",
    "Why was the developer broke? Because he used up all his cache.",
    "Why was the developer always calm? Because he had async-await.",
    "Why don't programmers like to go outside? The sunlight causes too many runtime exceptions.",
    "Why did the developer go broke? Because he lost his domain in a bet.",
    "What’s a programmer's favorite song? 'Hello World.'",
    "Why do programmers confuse Christmas and Halloween? Because Oct 31 == Dec 25.",
    "What do you call a busy server? Overloaded with requests!",
    "Why do developers make terrible dancers? They always sync in the wrong step.",
    "Why was the developer arrested? He used a get request without permission.",
    "Why did the coder go broke? He couldn't find his keys."
];


// Base commands list
let commands = {
    help: "Available commands: 'hello', 'clear', 'about', 'help', 'date', 'time', 'dice', 'joke', 'math [expression]', 'surprise', 'matrix', 'addcommand [name] [response]'",
    hello: "Hello, user! Welcome to Ailyn's terminal HAVE FUN.",
    about: "This is a interactive terminal for users to explore.",
    clear: "clear",
    date: `Today's date is: ${new Date().toLocaleDateString()}`,
    time: `The current time is: ${new Date().toLocaleTimeString()}`
};

// Function to generate random numbers for dice roll
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to add new user-defined commands
function addUserCommand(input) {
    const splitInput = input.split(' ');
    const newCommand = splitInput[1];
    const commandResponse = splitInput.slice(2).join(' ');
    
    if (newCommand && commandResponse) {
        commands[newCommand] = commandResponse;
        terminalOutput.innerHTML += `<p>New command '${newCommand}' added.</p>`;
    } else {
        terminalOutput.innerHTML += `<p>Usage: addcommand [name] [response]</p>`;
    }
}

// Function to handle the "matrix" effect
function matrixEffect() {
    terminalOutput.innerHTML += `<p>Matrix simulation loading...</p>`;
    let matrixInterval = setInterval(() => {
        terminalOutput.innerHTML += `<p>${Math.random().toString(36).substr(2, 10)}</p>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to the bottom
    }, 100);
    
    // Stop the matrix effect after 5 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        terminalOutput.innerHTML += `<p>Matrix simulation ended.</p>`;
    }, 5000);
}

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Function to handle command input
function handleCommand(input) {
    const command = input.trim().toLowerCase();
    
    // Check for 'math' command (handles basic math operations)
    if (command.startsWith('math ')) {
        try {
            const expression = command.slice(5); // Remove 'math ' part
            const result = eval(expression);
            terminalOutput.innerHTML += `<p>Result: ${result}</p>`;
        } catch (e) {
            terminalOutput.innerHTML += `<p>Invalid math expression</p>`;
        }
    }
    
    // Check for 'addcommand' to let users define their own commands
    else if (command.startsWith('addcommand ')) {
        addUserCommand(command);
    }
    
    // Check for dice roll command
    else if (command === 'dice') {
        const diceResult = rollDice();
        terminalOutput.innerHTML += `<p>You rolled a: ${diceResult}</p>`;
    }
    
    // Handle the matrix effect
    else if (command === 'matrix') {
        matrixEffect();
    }

    // Handle joke command (random joke from array)
    else if (command === 'joke') {
        terminalOutput.innerHTML += `<p>${getRandomJoke()}</p>`;
    }
    
    // Handle clear command
    else if (commands[command]) {
        if (command === 'clear') {
            terminalOutput.innerHTML = ''; // Clears the terminal
        } else {
            terminalOutput.innerHTML += `<p>${commands[command]}</p>`;
        }
    }
    
    // If command is unknown
    else {
        terminalOutput.innerHTML += `<p>Unknown command: ${command}</p>`;
    }
    
    terminalOutput.scrollTop = terminalOutput.scrollHeight; // Scroll to the bottom
}

// Listen for Enter key press
terminalInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = terminalInput.value;
        terminalOutput.innerHTML += `<p><span class="terminal-prompt">></span> ${input}</p>`;
        handleCommand(input);
        terminalInput.value = ''; // Clear the input field
    }
});

// Blinking cursor control
terminalInput.addEventListener('focus', () => {
    terminalInput.classList.add('typing'); // Stops blinking cursor
});

terminalInput.addEventListener('keydown', () => {
    terminalInput.classList.add('typing'); // Stop blinking when typing
});

// Optionally, reset blinking when input loses focus
terminalInput.addEventListener('blur', () => {
    terminalInput.classList.remove('typing'); // Resume blinking when focus is lost
});
