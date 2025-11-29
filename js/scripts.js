
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('header, section');

    sections.forEach(section => {
        section.classList.add('fade-in-section');
    });

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100 && rect.bottom >= 100) {
                section.classList.add('is-visible');
            } else {
                section.classList.remove('is-visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
