function toggleDarkMode() {
    const body = document.body;
    const switchHandle = document.querySelector('.switch-handle');

    body.classList.toggle('dark-mode');

    // Switch the handle depending on the mode
    if (body.classList.contains('dark-mode')) {
        switchHandle.style.transform = 'translateX(24px)';
    } else {
        switchHandle.style.transform = 'translateX(0)';
    }
}

// <script>
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}
// </script>