
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

    // Scroll Reveal Animation
    const scrollRevealSection = document.getElementById('scroll-reveal');
    if (scrollRevealSection) {
        window.addEventListener('scroll', () => {
            const rect = scrollRevealSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress
            // 0 when the top of the section is at the bottom of the viewport
            // 1 when the bottom of the section is at the bottom of the viewport (fully entered)
            // Adjusting the range to control when the fill happens

            // Let's make it fill as it centers in the screen
            // Start filling when top is at 80% of viewport height
            // Finish filling when top is at 40% of viewport height

            const start = windowHeight * 0.8;
            const end = windowHeight * 0.4;

            let progress = (start - rect.top) / (start - end);
            progress = Math.min(Math.max(progress, 0), 1);

            scrollRevealSection.style.setProperty('--scroll-progress', progress);
        });

        // Initial check
        const rect = scrollRevealSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.8;
        const end = windowHeight * 0.4;
        let progress = (start - rect.top) / (start - end);
        progress = Math.min(Math.max(progress, 0), 1);
        scrollRevealSection.style.setProperty('--scroll-progress', progress);
    }
});

