document.addEventListener('DOMContentLoaded', function() {
    function adjustDivs() {
        const hfull = document.querySelector('#hfull');
        const divWidth = 100; // Width of each div
        const containerWidth = hfull.clientWidth;
        const numberOfDivs = Math.floor(containerWidth / divWidth);

        hfull.innerHTML = ''; // Clear existing divs

        for (let i = 0; i < numberOfDivs; i++) {
            const div = document.createElement('div');
            hfull.appendChild(div);
        }
    }

    window.addEventListener('resize', adjustDivs);
    adjustDivs();
});