 // Fonction pour le défilement doux
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fonction pour ouvrir une modale avec des détails
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    openButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('active');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // Fonctionnalité pour le formulaire de contact
    const contactBtn = document.getElementById('contact-btn');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = contactModal.querySelector('.close-modal');

    contactBtn.addEventListener('click', function() {
        contactModal.classList.add('active');
    });

    closeContactModal.addEventListener('click', function() {
        contactModal.classList.remove('active');
    });

    window.addEventListener('click', function(e) {
        if (e.target == contactModal) {
            contactModal.classList.remove('active');
        }
    });
});