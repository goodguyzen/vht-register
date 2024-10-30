document.addEventListener('DOMContentLoaded', function() {
    const snow2Element = document.querySelector('.snow2');
    const containerElement = document.querySelector('.container');

    if (snow2Element && containerElement) {
        const containerHeight = containerElement.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate the required height for snow2 to fill the remaining space
        const requiredHeight = windowHeight - containerHeight;

        // Set the height of snow2
        snow2Element.style.height = `${requiredHeight}px`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    
    // Ensure the music element exists before adding the event listener
    if (music) {
        window.addEventListener('click', () => {
            music.muted = false; // Unmute when user interacts with the page
        });
    }
    
    // Existing code or other initialization logic can go here
});


function fadeOutAndNavigate(url) {
    
    const container = document.querySelector('.container');
    const snowContainer = document.getElementById('snow-container');

    // Add fade-out class for animation
    container.classList.add('fade-out');

    // Use setTimeout to wait for the fade-out animation to complete
    setTimeout(() => {
        // Fetch the new content
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Temporarily hide the container
                container.style.opacity = 0;

                // Replace the content of the container
                container.innerHTML = data;

                // Adjust the snow container height
                adjustSnowHeight();

                // Wait for a short moment to ensure styles are applied
                setTimeout(() => {
                    // Fade in the new content
                    container.style.opacity = 1;
                    container.classList.remove('fade-out');
                }, 50); // Adjust this delay if necessary
            })
            .catch(error => console.error('Error loading content:', error));
    }, 800); // Adjust the timeout to match your fade-out duration
}


