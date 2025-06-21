        /* --- JAVASCRIPT LOGIC --- */

        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. Mobile Navigation Toggle
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            const navLinks = document.querySelectorAll('.nav-link');

            if (navToggle) {
                navToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }
            
            // Close mobile menu when a link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });

            // 2. FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    const currentlyActive = document.querySelector('.faq-item.active');
                    if (currentlyActive && currentlyActive !== item) {
                        currentlyActive.classList.remove('active');
                    }
                    item.classList.toggle('active');
                });
            });

            // 3. Fade-in on Scroll Animation
            const sections = document.querySelectorAll('.section-fade-in');

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });
            
            sections.forEach(section => {
                observer.observe(section);
            });
        });