// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');

    // Animate toggle button
    const spans = this.getElementsByTagName('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // Reset toggle button
        const spans = navToggle.getElementsByTagName('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Reveal elements on scroll
function reveal() {
    const reveals = document.querySelectorAll('.service-card, .about-content, .testimonial-card, .info-card, .gallery-item');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

// Add animation classes
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .about-content, .testimonial-card, .info-card, .gallery-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .service-card.active, .about-content.active, .testimonial-card.active, .info-card.active, .gallery-item.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Trigger reveal on load
    reveal();
});