function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    event.target.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('nav a');
    const navMenu = document.getElementById('nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Scroll-in animations
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .project-card, .skill-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
