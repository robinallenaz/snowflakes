document.addEventListener('DOMContentLoaded', () => {
    const snowflakes = document.querySelectorAll('.snowflake');
    const snowflakeArea = document.querySelector('.snowflake-area');
    const areaHeight = snowflakeArea.offsetHeight;

    snowflakes.forEach(snowflake => {
        // Randomize initial position
        const initialLeft = Math.random() * 100;
        snowflake.style.left = `${initialLeft}%`;

        // Animate snowflake
        const animateSnowflake = () => {
            const top = parseFloat(getComputedStyle(snowflake).top);
            if (top < areaHeight) {
                snowflake.style.top = `${top + 0.5}px`;
                requestAnimationFrame(animateSnowflake);
            } else {
                // Reset position to the top
                snowflake.style.top = '0%';
                snowflake.style.left = `${Math.random() * 100}%`; // Randomize horizontal position
                animateSnowflake();
            }
        };

        // Initially set snowflake to top
        snowflake.style.top = '0%';
        animateSnowflake();
    });
});