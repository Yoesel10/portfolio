document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('cta-btn');
    
    btn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});