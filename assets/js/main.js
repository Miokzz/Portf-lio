// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navList.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Ajuste para o header fixo
                behavior: 'smooth'
            });
        }

        // Fechar menu mobile após clicar
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
            navList.classList.remove('active');
        }
    });
});

// Typed.js
const typed = new Typed('.typed-text', {
    strings: [
        'Desenvolvedor Full Stack em formação',
        'CEO do Crack Crew',
        'Apaixonado por tecnologia'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Form Submission
const form = document.getElementById('contato-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Aqui você pode adicionar a lógica para enviar o formulário
    // Por exemplo, usando fetch para enviar para um backend
    
    // Simulação de envio
    try {
        // Simulando delay de envio
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Limpar formulário
        form.reset();
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso!');
    } catch (error) {
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
});

// Active Navigation Link
function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);