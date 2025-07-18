// Navbar mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for in-page nav links only
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
            }
        } // else, let the browser navigate to the other page
    });
}

// Interactive project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        projectCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
}); 