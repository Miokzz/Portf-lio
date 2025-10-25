// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.from('.hero h1', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.type-wrap', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 1
});

gsap.from('.hero-cta', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 1.5
});

// Scroll Animations
gsap.utils.toArray('.reveal').forEach(section => {
    gsap.from(section, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Project Cards Animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        delay: i * 0.2
    });
});

// Contact Form Animation
gsap.from('.contact-form', {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});

// Contact Info Animation
gsap.from('.contact-info', {
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    }
});