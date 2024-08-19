
    function toggleDarkMode() {
        const body = document.body;
        const darkModeIcon = document.getElementById('darkModeIcon');

        body.classList.toggle('dark-mode');

        // Switch the icon depending on the mode
        if (body.classList.contains('dark-mode')) {
            darkModeIcon.src = "{% static 'pngwing.com__1_-removebg-preview.png' %}";
        } else {
            darkModeIcon.src = "{% static 'pngwing.com__1_-removebg-preview.png' %}";
        }
    }
    // <script>
        function toggleMenu() {
        document.querySelector('.navbar').classList.toggle('active');
    }
    {/* </script> */}