document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const feedbackForm = document.getElementById("feedbackForm");

    // Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm(contactForm)) {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }

    // Feedback Form Submission with AJAX
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm(feedbackForm)) {
                const formData = new FormData(feedbackForm);
                fetch('/feedback', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(data => {
                    showSuccessMessage('Thank you for your feedback!');
                    feedbackForm.reset();
                })
                .catch(error => {
                    showErrorMessage('Error submitting feedback. Please try again.');
                });
            }
        });
    }

    // Form Validation
    function validateForm(form) {
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                showErrorMessage(`${input.previousElementSibling.innerText} is required.`);
                valid = false;
            }
        });
        return valid;
    }

    // Show Success Message
    function showSuccessMessage(message) {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert success';
        successMessage.innerText = message;
        document.body.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
    }

    // Show Error Message
    function showErrorMessage(message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert error';
        errorMessage.innerText = message;
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const liveChat = document.getElementById('live-chat');
    const chatHeader = liveChat.querySelector('header');
    const chatClose = liveChat.querySelector('.chat-close');
    const chatInput = liveChat.querySelector('input[type="text"]');
    const chatHistory = liveChat.querySelector('.chat-history');

    // Feedback Form Submission
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm(feedbackForm)) {
                const formData = new FormData(feedbackForm);
                fetch('/feedback', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(data => {
                    showSuccessMessage('Thank you for your feedback!');
                    feedbackForm.reset();
                })
                .catch(error => {
                    showErrorMessage('Error submitting feedback. Please try again.');
                });
            }
        });
    }

    // Live Chat Toggle
    chatHeader.addEventListener('click', function() {
        liveChat.classList.toggle('open');
        chatInput.focus();
    });

    chatClose.addEventListener('click', function(event) {
        event.preventDefault();
        liveChat.classList.remove('open');
    });

    // Chat Input
    chatInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                appendMessage('You', message);
                chatInput.value = '';
                // Simulate a response from support
                setTimeout(() => appendMessage('Support', 'We have received your message, and we will get back to you shortly.'), 1000);
            }
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message clearfix';
        messageElement.innerHTML = `
            <div class="chat-message-content clearfix">
                <span class="chat-time">${new Date().toLocaleTimeString()}</span>
                <h5>${sender}</h5>
                <p>${message}</p>
            </div>
        `;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function validateForm(form) {
        let valid = true;
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                showErrorMessage(`${input.previousElementSibling.innerText} is required.`);
                valid = false;
            }
        });
        return valid;
    }

    function showSuccessMessage(message) {
        const successMessage = document.createElement('div');
        successMessage.className = 'alert success';
        successMessage.innerText = message;
        document.body.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 3000);
    }

    function showErrorMessage(message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert error';
        errorMessage.innerText = message;
        document.body.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const liveChat = document.getElementById('live-chat');
    const chatHeader = liveChat.querySelector('header');
    const chatClose = liveChat.querySelector('.chat-close');
    const chatInput = liveChat.querySelector('input[type="text"]');
    const chatHistory = liveChat.querySelector('.chat-history');

    // Feedback Form Submission
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm(feedbackForm)) {
                const formData = new FormData(feedbackForm);
                fetch('/feedback', {
                    method: 'POST',
                    body: formData,
                })
                .then(response => response.text())
                .then(data => {
                    showSuccessMessage('Thank you for your feedback!');
                    feedbackForm.reset();
                })
                .catch(error => {
                    showErrorMessage('Error submitting feedback. Please try again.');
                });
            }
        });
    }

    // Live Chat Toggle
    chatHeader.addEventListener('click', function() {
        liveChat.classList.toggle('open');
        chatInput.focus();
    });

    chatClose.addEventListener('click', function(event) {
        event.preventDefault();
        liveChat.classList.remove('open');
    });

    // Chat Input
    chatInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                appendMessage('You', message);
                chatInput.value = '';
                // Simulate a response from support
                setTimeout(() => appendMessage('Support', 'We have received your message, and we will get back to you shortly.'), 1000);
            }
        }
    });

    function append
