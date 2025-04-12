// Smooth scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent.`);
});

