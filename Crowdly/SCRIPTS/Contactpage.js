document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const modal = document.getElementById('contactModal');
    const openButton = document.getElementById('openFormButton');
    const closeButton = document.getElementById('closeModal');

    // Form submission
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission

            const messageField = form.querySelector('textarea[name="message"]');
            const message = messageField ? messageField.value.trim() : '';

            if (message) {
                responseMessage.innerHTML = `
                    <p>Your message has been submitted successfully!</p>
                    <p><strong>Thank you, have a good day!</strong></p>
                `;
                responseMessage.style.color = "green";

                form.reset();

                // Close modal after short delay
                setTimeout(() => {
                    modal.style.display = 'none';
                    responseMessage.innerHTML = ''; // Clear response for next open
                }, 1500); // 1.5 seconds
            } else {
                responseMessage.innerHTML = `<p>Please enter a message before submitting.</p>`;
                responseMessage.style.color = "red";
            }
        });
    }

    // Modal open
    openButton?.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Modal close (button)
    closeButton?.addEventListener('click', () => {
        modal.style.display = 'none';
        responseMessage.innerHTML = ''; // Clear response message when closing
    });

    // Modal close (outside click)
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            responseMessage.innerHTML = '';
        }
    });
});
