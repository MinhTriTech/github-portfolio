document.getElementById('langToggle').addEventListener('click', function() {
    const currentLang = this.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'vi' : 'en';
    this.setAttribute('data-lang', newLang);
    const langIcon = document.getElementById('langIcon');
    langIcon.src = newLang === 'en' ? './img/flags/united-kingdom.png' : './img/flags/vietnam.png';

    document.querySelectorAll('[data-lang-vi]').forEach(element => {
        const text = newLang === 'vi' ? element.getAttribute('data-lang-vi') : element.getAttribute('data-lang-en');
        element.textContent = text;
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar-custom').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});