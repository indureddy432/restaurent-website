// Smooth Scroll for Navigation
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight Contact Info
window.onload = function () {
    const contact = document.querySelector('.contact');
    setInterval(() => {
        contact.style.color = contact.style.color === 'red' ? '#444' : 'red';
    }, 1000);
};
