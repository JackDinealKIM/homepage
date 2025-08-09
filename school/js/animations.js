// Animation JavaScript using Anime.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Hero section text animation
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    })
    .add({
        targets: '.hero-text',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(200)
    })
    .add({
        targets: '.cta-button',
        translateY: [30, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(100)
    }, '-=500');

    // Hero image animation
    anime({
        targets: '.hero-image',
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 800
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        button.addEventListener('click', function() {
            anime({
                targets: this,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeInOutQuad'
            });
        });
    });

    // Card hover animations
    const cards = document.querySelectorAll('.program-card, .about-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                scale: 1,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });

    // Navigation link animations
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                color: '#D97706',
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        link.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                color: '#451A03',
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });

    // Loading animation for forms
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Create loading spinner
            const spinner = document.createElement('div');
            spinner.className = 'loading-spinner inline-block w-4 h-4 mr-2';
            
            // Add spinner and animate
            submitButton.insertBefore(spinner, submitButton.firstChild);
            
            anime({
                targets: spinner,
                rotate: '1turn',
                duration: 1000,
                loop: true,
                easing: 'linear'
            });
        });
    });

    // Floating button animation
    anime({
        targets: '.floating-btn',
        scale: [0, 1],
        rotate: [180, 0],
        duration: 800,
        delay: 2000,
        easing: 'easeOutBounce'
    });

    // Continuous floating animation for floating button
    anime({
        targets: '.floating-btn',
        translateY: [-5, 5],
        duration: 2000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });

    // Testimonial cards stagger animation
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const testimonials = entry.target.querySelectorAll('.testimonial-card');
                
                anime({
                    targets: testimonials,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: 'easeOutCubic'
                });
            }
        });
    };

    const testimonialObserver = new IntersectionObserver(observerCallback, {
        threshold: 0.2
    });

    const testimonialsSection = document.querySelector('#reviews');
    if (testimonialsSection) {
        testimonialObserver.observe(testimonialsSection);
    }

    // Programs section animation
    const programsCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const programCards = entry.target.querySelectorAll('.program-card');
                
                anime({
                    targets: programCards,
                    translateY: [100, 0],
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    delay: anime.stagger(150),
                    duration: 1000,
                    easing: 'easeOutBack'
                });
            }
        });
    };

    const programsObserver = new IntersectionObserver(programsCallback, {
        threshold: 0.1
    });

    const programsSection = document.querySelector('#programs');
    if (programsSection) {
        programsObserver.observe(programsSection);
    }

    // About section animation
    const aboutCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const aboutCards = entry.target.querySelectorAll('.about-card');
                
                anime({
                    targets: aboutCards,
                    rotateY: [90, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutCubic'
                });
            }
        });
    };

    const aboutObserver = new IntersectionObserver(aboutCallback, {
        threshold: 0.2
    });

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

    // News section animation
    const newsCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newsCards = entry.target.querySelectorAll('.news-card');
                
                anime({
                    targets: newsCards,
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    delay: anime.stagger(100),
                    duration: 600,
                    easing: 'easeOutQuint'
                });
            }
        });
    };

    const newsObserver = new IntersectionObserver(newsCallback, {
        threshold: 0.2
    });

    const newsSection = document.querySelector('.py-20:has(.news-card)');
    if (newsSection) {
        newsObserver.observe(newsSection);
    }

    // Contact form field animations
    const formFields = document.querySelectorAll('input, textarea, select');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });

        field.addEventListener('blur', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });

    // Header logo animation on scroll
    let logoAnimated = false;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset > 50;
        
        if (scrolled && !logoAnimated) {
            const logo = document.querySelector('header .w-12.h-12');
            anime({
                targets: logo,
                rotate: '1turn',
                duration: 500,
                easing: 'easeOutBounce'
            });
            logoAnimated = true;
        } else if (!scrolled) {
            logoAnimated = false;
        }
    });

    // Text reveal animation for section titles
    const titleCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target;
                const text = title.textContent;
                title.innerHTML = '';
                
                text.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.opacity = '0';
                    title.appendChild(span);
                });

                anime({
                    targets: title.querySelectorAll('span'),
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: anime.stagger(50),
                    duration: 300,
                    easing: 'easeOutCubic'
                });
            }
        });
    };

    const titleObserver = new IntersectionObserver(titleCallback, {
        threshold: 0.8
    });

    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });

    console.log('Animations initialized successfully!');
});

// Utility function for custom animations
window.createCustomAnimation = (targets, properties, options = {}) => {
    return anime({
        targets,
        ...properties,
        duration: options.duration || 500,
        easing: options.easing || 'easeOutCubic',
        ...options
    });
};