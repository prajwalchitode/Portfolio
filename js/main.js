// ===== Portfolio - Contact Form uses Web3Forms API =====
// Emails are sent directly to prajwalchitode2002@gmail.com

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');
const cursorGlow = document.getElementById('cursorGlow');
const typingText = document.getElementById('typingText');

// ===== Typing Animation =====
class TypeWriter {
    constructor(element, words, wait = 2000) {
        this.element = element;
        this.words = words;
        this.wait = wait;
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.textContent = this.txt;

        let typeSpeed = 80;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 400;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animation
const words = ['Developer', 'Engineer', 'Problem Solver', 'API Architect', 'Tech Enthusiast'];
new TypeWriter(typingText, words, 2000);

// ===== Cursor Glow Effect =====
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (currentScroll > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinkElements = document.querySelectorAll('.nav-link');

function setActiveLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinkElements.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// ===== Mobile Navigation Toggle =====
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Back to Top =====
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to animatable elements
document.querySelectorAll('.skill-category, .timeline-item, .project-card, .education-card, .about-content, .contact-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== Particles Animation =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ===== Contact Form with FormSubmit.co =====
// Sends emails directly to prajwalchitode2002@gmail.com - No signup required
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subjectLine = document.getElementById('subject_line').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subjectLine || !message) {
        showFormStatus('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // FormSubmit sends email directly to prajwalchitode2002@gmail.com
    const formData = new FormData(contactForm);

    try {
        const response = await fetch('https://formsubmit.co/ajax/prajwalchitode2002@gmail.com', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success === "true" || result.success === true) {
            showFormStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            console.error('FormSubmit Error:', result);
            showFormStatus('❌ Failed to send message. Please email me directly at prajwalchitode2002@gmail.com', 'error');
        }
    } catch (error) {
        console.error('Network Error:', error);
        showFormStatus('❌ Network error. Please email me directly at prajwalchitode2002@gmail.com', 'error');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    // Hide after 5 seconds
    setTimeout(() => {
        formStatus.className = 'form-status';
    }, 5000);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== Skill Tags Hover Animation =====
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-greeting, .hero-name, .hero-title-wrapper, .hero-description, .hero-cta, .hero-social');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});

// ===== Console Easter Egg =====
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in my work? Let\'s connect!', 'font-size: 14px; color: #a1a1aa;');
console.log('%c📧 prajwalchitode2002@gmail.com', 'font-size: 12px; color: #8b5cf6;');
