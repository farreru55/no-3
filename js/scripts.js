
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

    // Add glowing effect to active accordion items
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('show.bs.collapse', function () {
            this.classList.add('accordion-glowing');
        });
        item.addEventListener('hide.bs.collapse', function () {
            this.classList.remove('accordion-glowing');
        });
    });
});

