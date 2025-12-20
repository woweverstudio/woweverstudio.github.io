/**
 * WowEverStudio - Main JavaScript (Simplified & Optimized)
 */

// =============================================================================
// DOM Elements
// =============================================================================
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const techCategoryButtons = document.querySelectorAll('.tech-category-btn');
const techCards = document.querySelectorAll('.tech-card');
const portfolioFilterButtons = document.querySelectorAll('.portfolio-filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// =============================================================================
// Simple Scroll Handler - ONE RAF for all scroll effects
// =============================================================================
let scrollTicking = false;

function handleScroll() {
  const scrollY = window.scrollY;
  
  // Header scroll effect
  if (scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(handleScroll);
    scrollTicking = true;
  }
}, { passive: true });

// =============================================================================
// Mobile Menu
// =============================================================================
function toggleMobileMenu() {
  mobileMenuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  mobileMenuToggle.classList.remove('active');
  nav.classList.remove('active');
  document.body.style.overflow = '';
}

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    closeMobileMenu();
    
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') && 
      !nav.contains(e.target) && 
      !mobileMenuToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

// =============================================================================
// Smooth Scrolling
// =============================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') {
      e.preventDefault();
      return;
    }
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// =============================================================================
// Tech Stack Filter
// =============================================================================
function filterTechCards(category) {
  techCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-tech') === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

techCategoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    techCategoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterTechCards(button.getAttribute('data-category'));
  });
});

// =============================================================================
// Portfolio Filter
// =============================================================================
function filterPortfolioItems(filter) {
  portfolioItems.forEach(item => {
    if (filter === 'all' || item.getAttribute('data-category') === filter) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

portfolioFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    portfolioFilterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterPortfolioItems(button.getAttribute('data-filter'));
  });
});

// =============================================================================
// Intersection Observer - Simple & Efficient
// =============================================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe elements
document.querySelectorAll('.card, .feature-card, .tech-card, .stat-card, .contact-item, .portfolio-item').forEach(el => {
  observer.observe(el);
});

// =============================================================================
// Counter Animation for Stats
// =============================================================================
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumber = entry.target;
      const text = statNumber.textContent;
      const hasPlus = text.includes('+');
      const hasPercent = text.includes('%');
      const number = parseInt(text.replace(/\D/g, ''));
      
      let current = 0;
      const increment = number / 60; // 1 second at 60fps
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        
        let suffix = '';
        if (hasPlus) suffix = '+';
        if (hasPercent) suffix = '%';
        
        statNumber.textContent = Math.floor(current) + suffix;
      }, 1000 / 60);
      
      statObserver.unobserve(statNumber);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
  statObserver.observe(stat);
});

// =============================================================================
// Keyboard Navigation
// =============================================================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('active')) {
    closeMobileMenu();
  }
});

// =============================================================================
// Handle Window Resize
// =============================================================================
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768 && nav.classList.contains('active')) {
      closeMobileMenu();
    }
  }, 250);
});

// =============================================================================
// Initialize
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎨 WowEverStudio loaded!');
  handleScroll();
});
