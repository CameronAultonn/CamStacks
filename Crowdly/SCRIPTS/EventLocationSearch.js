//Javascript
//Check for events when page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("myInput");

    // Checls for a key press in the input field and prepares to compare it to all elements with the .event2-card class
    input.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".event2-card");

        //Displays the event that matches the input within its my div element
        cards.forEach(card => {
            const locationText = card.querySelector(".myDIV").textContent.toLowerCase().trim();
            if (locationText.startsWith("📍 " + value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
