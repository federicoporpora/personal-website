document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const greetButton = document.getElementById('greetButton');
    const messageArea = document.getElementById('greetingMessage');

    const handleGreeting = () => {
        const name = nameInput.value.trim();
        
        if (name === '') {
            messageArea.textContent = 'Please enter your name!';
            messageArea.style.color = '#e74c3c'; // Error color
        } else {
            messageArea.textContent = `Hello, ${name}! Welcome to my site.`;
            messageArea.style.color = '#3498db'; // Primary color
        }
    };

    greetButton.addEventListener('click', handleGreeting);

    // Support for 'Enter' key
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleGreeting();
        }
    });
});
