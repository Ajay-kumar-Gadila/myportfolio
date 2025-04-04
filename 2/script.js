// Select all image cards
const cards = document.querySelectorAll('.image-card');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class when in view
        }
    });
}, { threshold: 0.6 }); // Triggers when 20% of the element is visible

// Observe each card
cards.forEach(card => observer.observe(card));
