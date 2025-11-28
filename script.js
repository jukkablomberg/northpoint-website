// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// SCROLL ANIMATIONS (FADE UP)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about, .services, .contact, ' +
        '.service-card'
    );
    
    // Handle about cards separately for staggered animation
    const aboutCards = document.querySelectorAll('.about-card');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    aboutCards.forEach(card => {
        aboutObserver.observe(card);
    });
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-up');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

const magneticButtons = document.querySelectorAll('.cta-primary, .nav-cta, .cta-secondary');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) translateY(-2px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO GRID
// ============================================

const animatedGrid = document.querySelector('.animated-grid');

if (animatedGrid) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        animatedGrid.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// ============================================
// HORIZONTAL SCROLL FOR CAROUSELS
// ============================================

function setupCarouselScroll(carousel) {
    if (!carousel) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - carousel.offsetLeft;
        touchScrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - touchStartX) * 2;
        carousel.scrollLeft = touchScrollLeft - walk;
    });
}

// Setup carousels
const aboutCarousel = document.querySelector('.about-carousel');

setupCarouselScroll(aboutCarousel);

// ============================================
// CTA BUTTON CLICK HANDLERS
// ============================================

document.querySelectorAll('.cta-primary, .nav-cta, .cta-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Handle navigation
        if (button.textContent.includes('Get in Touch')) {
            e.preventDefault();
            // Navigate to contact page
            window.location.href = 'contact-us.html';
        } else if (button.textContent.includes('View Services')) {
            e.preventDefault();
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// COMPASS ROTATION (Handled by CSS animation)
// ============================================

// The compass rotation is now handled entirely by CSS animation for smoother performance
// No JavaScript intervention needed

// ============================================
// GLASS MORPHISM EFFECT ON CARDS
// ============================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll-heavy functions
const throttledScroll = throttle(() => {
    // Scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);

// ============================================
// MOBILE MENU
// ============================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const navDropdown = document.querySelector('.nav-dropdown');
const navDropdownToggle = document.querySelector('.nav-dropdown-toggle');

// Toggle mobile menu
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close menu when overlay is clicked
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Handle mobile dropdown toggle
if (navDropdownToggle && navDropdown) {
    navDropdownToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            navDropdown.classList.toggle('active');
        }
    });
}

// Close mobile menu when clicking a link (but not dropdown items)
if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                // Don't close menu if clicking on dropdown toggle
                if (link.classList.contains('nav-dropdown-toggle')) {
                    return;
                }
                // Don't prevent default for service links - let them navigate
                // Close menu for all other links
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
                navDropdown.classList.remove('active');
            }
        });
    });
    
    // Ensure service links in dropdown are always clickable
    const serviceLinks = navMenu.querySelectorAll('.nav-dropdown-menu a');
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Allow the link to work normally - don't prevent default
            // The menu will close via the parent event listener above
        });
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        navDropdown.classList.remove('active');
    }
});

// ============================================
// TOUCH FEEDBACK FOR ABOUT CARDS ON MOBILE
// ============================================

// Add touch feedback for about cards
function initAboutCardTouchFeedback() {
    const aboutCardsForTouch = document.querySelectorAll('.about-card');
    aboutCardsForTouch.forEach(card => {
        // Add touching class on touchstart
        card.addEventListener('touchstart', function(e) {
            this.classList.add('touching');
        }, { passive: true });
        
        // Remove touching class on touchend or touchcancel
        card.addEventListener('touchend', function(e) {
            this.classList.remove('touching');
        }, { passive: true });
        
        card.addEventListener('touchcancel', function(e) {
            this.classList.remove('touching');
        }, { passive: true });
        
        // Also handle mouse events for devices with both touch and mouse
        card.addEventListener('mousedown', function(e) {
            if (window.innerWidth <= 768) {
                this.classList.add('touching');
            }
        });
        
        card.addEventListener('mouseup', function(e) {
            this.classList.remove('touching');
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.classList.remove('touching');
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutCardTouchFeedback);
} else {
    initAboutCardTouchFeedback();
}

