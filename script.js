document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');

    function handleScroll() {
        contents.forEach(content => {
            const rect = content.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                content.classList.add('fade-in');
                content.classList.remove('fade-out');
            } else {
                content.classList.add('fade-out');
                content.classList.remove('fade-in');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check to apply fade-in on load if elements are in view
    handleScroll();
});
document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');

    function toggleNames(event) {
        const content = event.currentTarget;
        content.classList.toggle('clicked');
        const names = content.querySelector('.names');

        if (content.classList.contains('clicked')) {
            const nameParagraphs = names.querySelectorAll('p');
            nameParagraphs.forEach((name, index) => {
                setTimeout(() => {
                    name.style.animationDelay = `${(index + 1) * 0.2}s`;
                    name.style.opacity = '1';
                }, 200 * index); // Adjust the delay time as needed
            });
        } else {
            names.style.opacity = '0';
        }
    }

    contents.forEach(content => {
        content.addEventListener('click', toggleNames);
    });
});
