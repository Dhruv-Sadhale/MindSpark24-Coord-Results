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
