// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();
});

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .footer-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 같은 페이지 내 앵커 링크(#로 시작)만 스무스 스크롤 적용
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetSection = document.querySelector(href);

                if (targetSection) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav link
                    updateActiveNavLink(href);
                }
            }
            // 다른 페이지로 이동하는 링크는 기본 동작 유지 (preventDefault 하지 않음)
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class for background effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation based on scroll position
        updateActiveNavOnScroll(scrollTop);

        lastScrollTop = scrollTop;
    });
}

// Update active nav link based on current scroll position
function updateActiveNavOnScroll(scrollTop) {
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
            const sectionId = '#' + section.getAttribute('id');
            updateActiveNavLink(sectionId);
        }
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // Observe all sections except hero
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        observer.observe(card);
    });

    // Observe testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        observer.observe(card);
    });

    // Observe highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        observer.observe(item);
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual submission logic)
            showFormMessage('Thank you for your message! We\'ll get back to you soon.', 'success');

            // Reset form
            this.reset();
        });
    }
}

// Show form message
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    // Add to form
    const form = document.getElementById('contactForm');
    form.appendChild(messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// Add loading animation to body
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
});

// Typing effect for hero subtitle (optional enhancement)
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';

    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Parallax effect for hero background (optional enhancement)
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');

        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.backgroundPosition = `center ${rate}px`;
        }
    });
}

// Add some interactive effects for game cards
function initGameCardEffects() {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });
}

// Mobile menu toggle (for future enhancement)
function initMobileMenu() {
    // This can be expanded if we add a mobile hamburger menu
    const navMenu = document.querySelector('.nav-menu');

    // Add mobile menu button (placeholder for future implementation)
    if (window.innerWidth <= 768) {
        // Could add hamburger menu here
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll for better performance
const debouncedScroll = debounce(function() {
    initNavbarScroll();
}, 10);

// Error handling for missing images
function handleImageErrors() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create placeholder for broken images
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = '<div class="placeholder-content">🎮<br>Game Image</div>';
            this.parentNode.appendChild(placeholder);
        });
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initNavbarScroll();

    // Initialize enhancements
    initTypingEffect();
    initParallaxEffect();
    initGameCardEffects();
    initMobileMenu();
    handleImageErrors();

    // Add CSS for image placeholder
    const style = document.createElement('style');
    style.textContent = `
        .image-placeholder {
            width: 100%;
            height: 200px;
            background: linear-gradient(45deg, #111, #222);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
        }
        .placeholder-content {
            color: #FFE81A;
            text-align: center;
            font-family: 'Orbitron', monospace;
            font-size: 1.2rem;
            text-shadow: 0 0 10px #FFE81A;
        }
        .form-message {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
        }
        .form-message.success {
            background: rgba(46, 204, 113, 0.1);
            color: #2ECC71;
            border: 1px solid #2ECC71;
        }
        .form-message.error {
            background: rgba(231, 76, 60, 0.1);
            color: #E74C3C;
            border: 1px solid #E74C3C;
        }
    `;
    document.head.appendChild(style);
});
