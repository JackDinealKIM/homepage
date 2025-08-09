// Scroll effects using ScrollReveal.js

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 100,
        easing: 'ease-out',
        scale: 1,
        cleanup: true,
        mobile: true,
        reset: false
    });

    // Hero section reveals
    sr.reveal('.hero-text', {
        origin: 'left',
        distance: '100px',
        duration: 1200,
        delay: 200,
        interval: 200
    });

    sr.reveal('.hero-image', {
        origin: 'right',
        distance: '100px',
        duration: 1000,
        delay: 600
    });

    sr.reveal('.cta-button', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        delay: 1000,
        interval: 100
    });

    // About section reveals
    sr.reveal('#about h2', {
        origin: 'top',
        distance: '30px',
        duration: 800
    });

    sr.reveal('#about p', {
        origin: 'top',
        distance: '20px',
        duration: 600,
        delay: 200
    });

    sr.reveal('.about-card', {
        origin: 'bottom',
        distance: '60px',
        duration: 800,
        delay: 200,
        interval: 150
    });

    // Programs section reveals
    sr.reveal('#programs h2', {
        origin: 'top',
        distance: '30px',
        duration: 800
    });

    sr.reveal('#programs > div > p', {
        origin: 'top',
        distance: '20px',
        duration: 600,
        delay: 200
    });

    sr.reveal('.program-card', {
        origin: 'bottom',
        distance: '80px',
        duration: 1000,
        delay: 100,
        interval: 200,
        scale: 0.9
    });

    // Testimonials section reveals
    sr.reveal('#reviews h2', {
        origin: 'left',
        distance: '50px',
        duration: 800
    });

    sr.reveal('#reviews > div > p', {
        origin: 'left',
        distance: '30px',
        duration: 600,
        delay: 200
    });

    sr.reveal('.testimonial-card', {
        origin: 'right',
        distance: '50px',
        duration: 700,
        delay: 150,
        interval: 100
    });

    // News section reveals
    sr.reveal('.news-card', {
        origin: 'bottom',
        distance: '40px',
        duration: 600,
        delay: 100,
        interval: 150,
        scale: 0.95
    });

    // Contact section reveals
    sr.reveal('#contact h2', {
        origin: 'top',
        distance: '40px',
        duration: 800
    });

    sr.reveal('#contact h3', {
        origin: 'left',
        distance: '30px',
        duration: 600,
        delay: 200,
        interval: 100
    });

    sr.reveal('#contact .flex.items-center', {
        origin: 'left',
        distance: '40px',
        duration: 500,
        delay: 300,
        interval: 100
    });

    sr.reveal('#contact form', {
        origin: 'right',
        distance: '50px',
        duration: 800,
        delay: 400
    });

    sr.reveal('#contact form > div', {
        origin: 'right',
        distance: '30px',
        duration: 400,
        delay: 600,
        interval: 80
    });

    // Footer reveals
    sr.reveal('footer > div > div', {
        origin: 'bottom',
        distance: '30px',
        duration: 600,
        delay: 100,
        interval: 150
    });

    // Custom scroll-based animations
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    const floatingBtn = document.querySelector('.floating-btn');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

        // Header background opacity based on scroll
        if (scrollTop > 50) {
            header.style.backgroundColor = `rgba(255, 255, 255, ${Math.min(0.95, 0.8 + (scrollTop / 1000))})`;
        }

        // Floating button visibility
        if (floatingBtn) {
            if (scrollTop > 300) {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.visibility = 'visible';
            } else {
                floatingBtn.style.opacity = '0';
                floatingBtn.style.visibility = 'hidden';
            }
        }

        // Parallax effect for hero section
        const heroSection = document.querySelector('#home');
        if (heroSection && scrollTop < heroSection.offsetHeight) {
            heroSection.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }

        lastScrollTop = scrollTop;
    });

    // Smooth scroll enhancement
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                // Custom smooth scroll with easing
                smoothScrollTo(targetPosition, 800);
            }
        });
    });

    // Custom smooth scroll function with easing
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
            
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuart(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t * t + b;
            t -= 2;
            return -c / 2 * (t * t * t * t - 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // Intersection Observer for advanced scroll effects
    const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add visible class for CSS animations
                element.classList.add('visible');
                
                // Trigger specific animations based on element class
                if (element.classList.contains('program-card')) {
                    element.style.animationDelay = `${Array.from(element.parentNode.children).indexOf(element) * 100}ms`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for advanced animations
    const observeElements = document.querySelectorAll('.program-card, .about-card, .testimonial-card, .news-card');
    observeElements.forEach(element => {
        advancedObserver.observe(element);
    });

    // Progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #D97706, #92400E);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
        
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    });

    // Lazy loading enhancement
    const lazyImages = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Fade in effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Resize handler for responsive adjustments
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Recalculate ScrollReveal on resize
            sr.sync();
        }, 250);
    });

    console.log('Scroll effects initialized successfully!');
});

// Export utility functions
window.scrollEffects = {
    reveal: (selector, options = {}) => {
        ScrollReveal().reveal(selector, options);
    },
    
    smoothScrollTo: (element, duration = 800) => {
        const targetElement = typeof element === 'string' ? document.querySelector(element) : element;
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
};