document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll-based reveal animations
    const revealElements = document.querySelectorAll('.section-header, .about-content, .skills-category, .education-item, .project-card, .experience-item, .research-item, .certification-item, .contact-text, .contact-form');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Add active class for reveal animation
    window.addEventListener('scroll', revealOnScroll);
    // Trigger on load for elements already in view
    revealOnScroll();

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Reset status
        formStatus.style.display = 'none';
        formStatus.className = 'form-status';

        // Validate
        if (name === '' || email === '' || subject === '' || message === '') {
            showFormStatus('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showFormStatus('Please enter a valid email address', 'error');
            return;
        }

        // Message length validation
        if (message.length < 10) {
            showFormStatus('Please enter a message with at least 10 characters', 'error');
            return;
        }

        // If we got here, form is valid
        // Since there's no backend, we'll show a success message
        showFormStatus('Thank you! Your message has been submitted.', 'success');

        // Reset form
        contactForm.reset();
    });

    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.classList.add(type);
        formStatus.style.display = 'block';
    }

    // Current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add active class to elements for reveal animation (initial check)
    // We'll keep the scroll-based approach as it's more universally compatible
});

// Intersection Observer alternative for reveal animations (more performant)
/*
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: uncomment to stop observing once revealed
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .about-content, .skills-category, .project-card, .experience-item, .education-item, .research-item, .certification-item, .contact-form, .contact-text').forEach(el => {
    observer.observe(el);
});
*/