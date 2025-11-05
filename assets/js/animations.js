// Reveal on Scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Adicionar classe reveal aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const sections = [
        '.sobre-content',
        '.projetos-grid',
        '.contato-content'
    ];
    
    sections.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('reveal');
        });
    });
});

// Parallax Effect
const hero = document.querySelector('.hero');
let lastScrollY = window.scrollY;

function updateParallax() {
    const scrollY = window.scrollY;
    const delta = scrollY - lastScrollY;
    
    if (scrollY <= window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    }
    
    lastScrollY = scrollY;
}

window.addEventListener('scroll', updateParallax);

// Glitch Effect Toggle
const glitchText = document.querySelector('.glitch-text');
let glitchInterval;

function startGlitch() {
    clearInterval(glitchInterval);
    glitchText.classList.add('glitch');
    
    setTimeout(() => {
        glitchText.classList.remove('glitch');
    }, 1000);
    
    glitchInterval = setInterval(() => {
        glitchText.classList.add('glitch');
        
        setTimeout(() => {
            glitchText.classList.remove('glitch');
        }, 1000);
    }, 5000);
}

glitchText.addEventListener('mouseover', startGlitch);
window.addEventListener('load', startGlitch);

// Skill Icons Animation
const skillIcons = document.querySelectorAll('.skill-icons i');

skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2) translateY(-5px)';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1) translateY(0)';
    });
});

// Projeto Cards Hover Effect
const projetoCards = document.querySelectorAll('.projeto-card');

projetoCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Social Links Animation
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2) translateY(-3px)';
    });
    
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1) translateY(0)';
    });
});