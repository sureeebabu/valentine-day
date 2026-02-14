/* ============================================
   VALENTINE'S DAY WEBSITE - JAVASCRIPT
   Interactive features and animations
   ============================================ */

// ============================================
// FLOATING HEARTS BACKGROUND ANIMATION
// ============================================

/**
 * Creates and animates floating hearts in the background
 */
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    // Create 15 floating hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';

        // Random animation delay
        heart.style.animationDelay = Math.random() * 15 + 's';

        // Random animation duration (between 10-20 seconds)
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';

        heartsContainer.appendChild(heart);
    }
}

// ============================================
// BACKGROUND MUSIC CONTROL
// ============================================

/**
 * Handles background music play/pause functionality
 */
function initMusicControl() {
    const musicControl = document.getElementById('musicControl');
    const bgMusic = document.getElementById('bgMusic');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    let isPlaying = false;

    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            // Pause music
            bgMusic.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            isPlaying = false;
        } else {
            // Play music
            bgMusic.play().catch(error => {
                console.log('Audio playback failed:', error);
                // Handle autoplay restrictions
                alert('Please click the music button to enable background music');
            });
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            isPlaying = true;
        }
    });
}

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================

/**
 * Enables smooth scrolling for all anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

/**
 * Adds animation effects when elements come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and gallery items
    const animatedElements = document.querySelectorAll('.reason-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// PROPOSAL BUTTONS INTERACTION
// ============================================

/**
 * Handles the Valentine proposal button clicks
 */
function initProposalButtons() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');
    const proposalButtons = document.querySelector('.proposal-buttons');

    // Function to show response
    function showResponse() {
        // Hide buttons
        proposalButtons.style.display = 'none';

        // Show response message
        responseMessage.classList.remove('hidden');

        // Create celebration hearts
        createCelebrationHearts();

        // Play a celebratory animation
        celebrateResponse();
    }

    // Both buttons lead to the same happy response
    yesBtn.addEventListener('click', showResponse);
    noBtn.addEventListener('click', showResponse);
}

/**
 * Creates a burst of hearts for celebration
 */
function createCelebrationHearts() {
    const proposalSection = document.querySelector('.proposal-section');
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '50%';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = `celebrationFloat ${Math.random() * 2 + 2}s ease-out forwards`;

        proposalSection.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

/**
 * Adds celebration animation to the response message
 */
function celebrateResponse() {
    const responseMessage = document.getElementById('responseMessage');

    // Add a special celebration class
    responseMessage.style.animation = 'celebrationPulse 0.5s ease';

    // Remove animation class after it completes
    setTimeout(() => {
        responseMessage.style.animation = '';
    }, 500);
}

// Add celebration animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrationFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-500px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes celebrationPulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// GALLERY IMAGE PLACEHOLDER GENERATION
// ============================================

/**
 * Generates placeholder images for the gallery
 * Uses a gradient background with heart icons
 * NOTE: This function is disabled when using real images
 */
function generatePlaceholderImages() {
    const galleryImages = document.querySelectorAll('.gallery-image img');

    // Only generate placeholders if images don't have a valid src
    galleryImages.forEach((img, index) => {
        // Check if image has a real source (not a placeholder filename)
        const src = img.getAttribute('src');
        if (!src || src.startsWith('placeholder')) {
            const gradients = [
                'linear-gradient(135deg, #ff6b9d 0%, #ffc2d1 100%)',
                'linear-gradient(135deg, #ffc2d1 0%, #ff8fab 100%)',
                'linear-gradient(135deg, #ff8fab 0%, #ff6b9d 100%)',
                'linear-gradient(135deg, #ffb3d9 0%, #ff6b9d 100%)',
                'linear-gradient(135deg, #ff6b9d 0%, #c9184a 100%)',
                'linear-gradient(135deg, #ffc2d1 0%, #ffb3d9 100%)'
            ];

            // Create a canvas for the placeholder
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 400;
            const ctx = canvas.getContext('2d');

            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, 400, 400);

            // Parse gradient colors (simplified)
            if (index % 2 === 0) {
                gradient.addColorStop(0, '#ff6b9d');
                gradient.addColorStop(1, '#ffc2d1');
            } else {
                gradient.addColorStop(0, '#ffc2d1');
                gradient.addColorStop(1, '#ff8fab');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 400, 400);

            // Add heart icon
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = 'bold 120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('❤️', 200, 200);

            // Add text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = 'bold 24px Arial';
            ctx.fillText(`Our Memory #${index + 1}`, 200, 320);

            // Set the canvas as image source
            img.src = canvas.toDataURL();
            img.alt = `Our beautiful moment together - Memory ${index + 1}`;
        }
    });
}

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

/**
 * Adds subtle parallax effect to decorative elements
 */
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        // Parallax for decorative hearts
        const decoHearts = document.querySelectorAll('.deco-heart');
        decoHearts.forEach((heart, index) => {
            const speed = 0.3 + (index * 0.1);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Parallax for proposal decorative hearts
        const propHearts = document.querySelectorAll('.prop-heart');
        propHearts.forEach((heart, index) => {
            const speed = 0.2 + (index * 0.05);
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ============================================
// LOADING ANIMATION
// ============================================

/**
 * Adds a fade-in effect when the page loads
 */
function initPageLoadAnimation() {
    document.body.style.opacity = '0';

    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================

/**
 * Main initialization function
 * Runs when DOM is fully loaded
 */
function init() {
    // Create floating hearts background
    createFloatingHearts();

    // Initialize music control
    initMusicControl();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize proposal buttons
    initProposalButtons();

    // Generate placeholder images
    generatePlaceholderImages();

    // Initialize parallax effect
    initParallaxEffect();

    // Initialize page load animation
    initPageLoadAnimation();

    console.log('💖 Valentine\'s Day website loaded successfully! 💖');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

/**
 * Secret easter egg - Konami code triggers extra hearts
 */
(function () {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Trigger easter egg
                triggerHeartExplosion();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function triggerHeartExplosion() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '💖';
                heart.style.position = 'fixed';
                heart.style.fontSize = Math.random() * 40 + 20 + 'px';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = Math.random() * window.innerHeight + 'px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '10000';
                heart.style.animation = 'celebrationFloat 3s ease-out forwards';
                document.body.appendChild(heart);

                setTimeout(() => heart.remove(), 3000);
            }, i * 50);
        }
    }
})();
