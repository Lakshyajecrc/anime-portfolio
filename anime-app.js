// Anime Portfolio Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initTypingAnimation();
    initSmoothScrolling();
    initSkillsAnimation();
    initContactForm();
    initScrollEffects();
    initAnimeEffects();
    initSakuraAnimation();
    initAnimeInteraction();
    initProjectEffects();
    initScrollAnimations();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add anime transformation to hamburger
            const spans = hamburger.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (hamburger.classList.contains('active')) {
                    span.style.transform = index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                                         index === 1 ? 'opacity(0)' :
                                         'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
}

// Enhanced Typing Animation with Anime Flair
function initTypingAnimation() {
    const textArray = [
        "Anime Enthusiast & Web Developer ✨",
        "Full Stack Developer 🚀",
        "Problem Solver 💜",
        "Tech Otaku 🌸",
        "Future Engineer 💫",
        "Code Ninja 🎌"
    ];
    const typedTextSpan = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typedTextSpan) return;

    let textArrayIndex = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeText() {
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }

        currentText = textArray[textArrayIndex];

        if (!isDeleting && charIndex <= currentText.length) {
            typedTextSpan.textContent = currentText.substring(0, charIndex);
            charIndex++;
            
            // Add sparkle effect while typing
            if (Math.random() > 0.7) {
                createSparkle(typedTextSpan);
            }
            
            setTimeout(typeText, 120);
        } else if (isDeleting && charIndex >= 0) {
            typedTextSpan.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeText, 60);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textArrayIndex++;
                setTimeout(typeText, 1500);
            } else {
                setTimeout(typeText, 1200);
            }
        }
    }

    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Create sparkle effects
function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'anime-sparkle';
    sparkle.style.position = 'absolute';
    sparkle.style.left = Math.random() * element.offsetWidth + 'px';
    sparkle.style.top = Math.random() * element.offsetHeight + 'px';
    
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Smooth Scrolling Navigation - Enhanced
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetSection.offsetTop - headerHeight;

                // Add anime-style bounce effect
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Add visual feedback to clicked link
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });
}

// Enhanced Skills Animation with Anime Effects
function initSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    function animateSkills() {
        if (skillsAnimated) return;
        
        skillBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            
            setTimeout(() => {
                bar.style.width = width;
                
                // Add particle effect when skill bar fills
                setTimeout(() => {
                    createSkillParticles(bar);
                }, 800);
            }, index * 300);
        });
        
        skillsAnimated = true;
    }

    // Use Intersection Observer to trigger animation
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }
}

// Create skill completion particles
function createSkillParticles(skillBar) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #ffb700;
                border-radius: 50%;
                pointer-events: none;
                top: ${Math.random() * 20 - 10}px;
                right: 0;
                animation: particle-burst 1s ease-out forwards;
            `;
            
            skillBar.style.position = 'relative';
            skillBar.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }, i * 100);
    }
}

// Contact Form with Anime Styling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validate form
        if (!name || !email || !subject || !message) {
            showAnimeNotification('Please fill in all fields! (´∩｡• ᵕ •｡∩`)', 'error');
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showAnimeNotification('Please enter a valid email address! (◕‿◕)', 'error');
            return;
        }

        // Simulate form submission with anime flair
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending... ✨';
        submitButton.disabled = true;
        submitButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

        // Simulate API call
        setTimeout(() => {
            showAnimeNotification('Message sent successfully! ヽ(´▽`)/ I\'ll get back to you soon!', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.style.background = '';
            
            // Add success particles
            createSuccessParticles(submitButton);
        }, 2000);
    });
}

// Enhanced Notification System with Anime Style
function showAnimeNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${type === 'success' ? '🌸' : type === 'error' ? '💥' : 'ℹ️'}</span>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'anime-slide-out 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Success particles effect
function createSuccessParticles(element) {
    const colors = ['#7209b7', '#f72585', '#4cc9f0', '#ffb700'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                top: ${element.getBoundingClientRect().top + element.offsetHeight / 2}px;
                left: ${element.getBoundingClientRect().left + element.offsetWidth / 2}px;
                z-index: 10000;
                animation: success-particle 2s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 2000);
        }, i * 50);
    }
}

// Scroll Effects for Anime Theme
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 100) {
                header.style.background = 'rgba(26, 11, 46, 0.98)';
                header.style.boxShadow = '0 4px 20px rgba(114, 9, 183, 0.3)';
            } else {
                header.style.background = 'rgba(26, 11, 46, 0.95)';
                header.style.boxShadow = 'none';
            }
        }

        lastScrollTop = scrollTop;
    });
}

// Anime-specific Effects
function initAnimeEffects() {
    // Add floating elements randomly
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFloatingElement();
        }
    }, 3000);
    
    // Add interactive hover effects to cards
    const cards = document.querySelectorAll('.project-card, .skill-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createCardSparkles(card);
        });
    });
}

// Create floating anime elements
function createFloatingElement() {
    const symbols = ['✨', '🌸', '💫', '⭐', '🎌', '💜'];
    const element = document.createElement('div');
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    element.textContent = symbol;
    element.style.cssText = `
        position: fixed;
        top: 100vh;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 20 + 15}px;
        pointer-events: none;
        z-index: -1;
        animation: float-up 6s linear forwards;
        opacity: 0.7;
    `;
    
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 6000);
}

// Card sparkle effects
function createCardSparkles(card) {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'anime-sparkle';
            sparkle.style.left = Math.random() * card.offsetWidth + 'px';
            sparkle.style.top = Math.random() * card.offsetHeight + 'px';
            
            card.style.position = 'relative';
            card.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 2000);
        }, i * 100);
    }
}

// Sakura Animation
function initSakuraAnimation() {
    const sakuraContainer = document.querySelector('.sakura-petals');
    if (!sakuraContainer) return;
    
    // Create falling sakura petals periodically
    setInterval(() => {
        if (Math.random() > 0.3) {
            createSakuraPetal();
        }
    }, 2000);
}

function createSakuraPetal() {
    const petal = document.createElement('div');
    petal.innerHTML = '🌸';
    petal.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * 100}vw;
        font-size: ${Math.random() * 15 + 10}px;
        pointer-events: none;
        z-index: -1;
        animation: sakura-fall-anim ${Math.random() * 3 + 4}s linear forwards;
        opacity: ${Math.random() * 0.5 + 0.3};
    `;
    
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 7000);
}

// Anime Interaction Effects
function initAnimeInteraction() {
    // Add click ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
    
    // Add hover glow to important elements
    const importantElements = document.querySelectorAll('.logo, .accent, .project-title');
    importantElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.filter = 'drop-shadow(0 0 15px currentColor)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = '';
        });
    });
}

// Ripple effect for buttons
function createRippleEffect(e) {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-anime 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Project Effects
function initProjectEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Stagger animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = 'anime-slide-up 0.6s ease forwards';
                    }, index * 200);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
        
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section-title, .about-text, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'anime-fade-in-up 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
}

// Add CSS animations dynamically
function addAnimeAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-up {
            0% { transform: translateY(0); opacity: 0.7; }
            100% { transform: translateY(-100vh); opacity: 0; }
        }
        
        @keyframes sakura-fall-anim {
            0% { transform: translateY(-50px) rotateZ(0deg); }
            100% { transform: translateY(100vh) rotateZ(360deg); }
        }
        
        @keyframes ripple-anime {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes anime-slide-up {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes anime-fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes anime-slide-out {
            0% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes particle-burst {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); opacity: 0; }
        }
        
        @keyframes success-particle {
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations
addAnimeAnimations();