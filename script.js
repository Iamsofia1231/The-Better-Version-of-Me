/* ===================================
   JAVASCRIPT FUNCTIONALITY
   =================================== */

// SMOOTH SCROLLING - When you click a nav link, page smoothly scrolls to that section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// HANDLE CONTACT FORM SUBMISSION
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Show success message (In a real website, this would send to a server)
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
    
    // Clear the form
    form.reset();
}

// ADD SCROLL ANIMATION - Cards fade in as you scroll down the page
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all cards
document.querySelectorAll('.interest-card, .project-card, .journal-entry').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// NAVBAR HIGHLIGHT - Highlights which section you're currently viewing
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '0.6';
        } else {
            link.style.opacity = '1';
        }
    });
});

// ADD RIPPLE EFFECT TO BUTTONS - Creates a cool ripple when you click buttons
document.querySelectorAll('.cta-button, .submit-button, .social-link').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// PAGE LOAD ANIMATION - Fade in the whole page when it loads
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

console.log("✨ Welcome to Sofia's Personal Website! ✨");
console.log("This website was built with passion, curiosity, and code!");
console.log("Feel free to explore and learn more about Sofia's amazing projects.");
