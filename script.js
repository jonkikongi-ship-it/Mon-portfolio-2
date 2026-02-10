// script.js - Portfolio Jonathan KIKONGI DIMWINSA

// ==================== MENU MOBILE ====================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ==================== ANIMATION DES COMPÉTENCES ====================
function animateSkills() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    
    skillProgresses.forEach(progress => {
        const width = progress.getAttribute('data-width');
        if (width) {
            progress.style.width = `${width}%`;
        }
    });
}

// ==================== TÉLÉCHARGEMENT DU CV ====================
const downloadBtn = document.getElementById('downloadCV');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        // Laissez le lien faire son travail naturellement
        // Le href="./CV-jonathan-Kikongi.pdf" s'occupe du téléchargement
        console.log('Téléchargement du CV initié');
    });
}

// ==================== FORMULAIRE DE CONTACT ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const subject = this.querySelector('input[name="subject"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Simulation d'envoi
        alert(`Merci ${name} !\nVotre message a été envoyé avec succès.\n\nJe vous répondrai à l'adresse ${email} dans les plus brefs délais.`);
        
        // Réinitialisation du formulaire
        this.reset();
    });
}

// ==================== ANIMATION AU DÉFILEMENT ====================
function checkScroll() {
    const skillsSection = document.querySelector('.skills-section');
    if (!skillsSection) return;
    
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (skillsPosition < screenPosition) {
        animateSkills();
        window.removeEventListener('scroll', checkScroll);
    }
}

// ==================== SCROLL SMOOTH ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== RETOUR EN HAUT ====================
document.querySelectorAll('.back-to-top').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio Jonathan - Chargé avec succès!');
    
    // Animation du texte de la hero section
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        const textElements = animatedText.querySelectorAll('span');
        textElements.forEach((span, index) => {
            span.style.animationDelay = `${0.5 + (index * 1)}s`;
        });
    }
    
    // Vérifier si on est déjà dans la section compétences
    checkScroll();
    
    // Ajouter l'événement de défilement
    window.addEventListener('scroll', checkScroll);
    
    // Animer les barres immédiatement (pour test)
    // animateSkills(); // Décommentez pour voir tout de suite
});