document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById('contactForm').reset(); // Reset form fields
    } else {
        alert('Please fill out all the fields.');
    }
});
