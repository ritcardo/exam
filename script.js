// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.navbar ul li a');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Clicked on ${item.textContent}`);
            // You can add more functionality here based on your requirements
        });
    });
});
