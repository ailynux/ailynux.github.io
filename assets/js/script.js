// Typing Effect for Header
document.addEventListener("DOMContentLoaded", function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["HELLO WORLD"];
    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Loop back to first string
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
});

// Auto-calculate years of experience and footer year
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;
    const yearsOfExperience = currentYear - startYear;
    
    // Animate years of experience counter
    const experienceStat = document.getElementById('years-exp');
    if (experienceStat) {
        let current = 0;
        const target = yearsOfExperience;
        const duration = 1500;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                experienceStat.textContent = target + '+';
                clearInterval(timer);
            } else {
                experienceStat.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    // Update footer year
    const footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = currentYear;
    }
    
    // Add stagger animation to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Add interactive effects to name letters
    const nameLetters = document.querySelectorAll('.name-letter');
    nameLetters.forEach((letter, index) => {
        letter.style.setProperty('--index', index);
        
        // Add random glitch effect on hover
        letter.addEventListener('mouseenter', function() {
            this.style.animation = 'letter-pop 0.5s ease, glitch-letter 0.3s ease';
        });
        
        letter.addEventListener('mouseleave', function() {
            this.style.animation = 'letter-glow 2s ease-in-out infinite';
        });
    });
    
    // Add pulse effect to title words
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.addEventListener('mouseenter', function() {
            this.style.animation = 'gradient-shift 1.5s ease infinite';
        });
    });
});
