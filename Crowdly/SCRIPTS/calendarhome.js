document.addEventListener("DOMContentLoaded", function () {
    // The event data 
    const events = [
        { "name": "Community Festival", "location": "Belfast", "description": "Join us for the annual Community Festival in Belfast.", "date": "2025-04-15", "image": "IMAGES/communityfestival.jpg" },
        { "name": "Charity Run", "location": "Newtownards", "description": "Participate in a charity run for a good cause in Newtownards.", "date": "2025-05-10", "image": "IMAGES/charityrun.jpg" },
        { "name": "Music Night", "location": "Omagh", "description": "Enjoy a night of live music in Omagh.", "date": "2025-06-05", "image": "IMAGES/communitymusic.jpg" },
        { "name": "Outdoor Movie Night", "location": "Larne", "description": "Bring your blankets, chairs, and snacks for a magical evening under the stars!", "date": "2025-07-16", "image": "IMAGES/Movie Night.jpg"},
        {"name": "Volunteering at Local Food Bank", "location": "Newtownards", "description": "Join us in volunteering at our local food bank!", "date": "2025-04-21", "image": "IMAGES/foodbank.jpg"},
        {"name": "Community Book Club", "location": "Belfast", "description": "Join us for an exciting escape into the captivating worlds of books!", "date": "2025-05-31", "image": "IMAGES/bookclubevent.jpg"}
    ];
    let currentMonth = 4; 
    let currentYear = 2025;

    // Function to render the calendar for the selected month
    function renderCalendar(month, year) {
        const daysContainer = document.getElementById("calendar-days");
        daysContainer.innerHTML = ""; // Clear the previous calendar
        const monthYearLabel = document.getElementById("month-year");
        monthYearLabel.textContent = `${getMonthName(month)} ${year}`;

        // Get the first day of the month and the number of days in the month
        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        // Render the empty days leading up to the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("empty-day"); 
            daysContainer.appendChild(emptyCell);
        }

        // Render the days of the month
        for (let i = 1; i <= totalDays; i++) {
            const dayCell = document.createElement("div");
            dayCell.textContent = i;
            dayCell.classList.add("day");

            // Check if there are any events on this day
            events.forEach(event => {
                const eventDate = new Date(event.date);
                if (eventDate.getDate() === i && eventDate.getMonth() === month && eventDate.getFullYear() === year) {
                    dayCell.classList.add("event-day");
                    dayCell.addEventListener("click", function () {
                        showEventPopup(event);
                    });
                }
            });

            daysContainer.appendChild(dayCell);
        }
    }

    function showEventPopup(event) {
        document.getElementById("event-title").textContent = event.name;
        document.getElementById("event-location").textContent = `Location: ${event.location}`;
        document.getElementById("event-description").textContent = event.description;
    
        // Set event image
        const eventImage = document.getElementById("event-image");
        if (event.image) {
            eventImage.src = event.image;
            eventImage.style.display = "block"; // Show image
        } else {
            eventImage.style.display = "none"; // Hide if no image
        }
    
        // Show the modal
        document.getElementById("event-modal").style.display = "block";
    }
    

    // Function to get the month name from the month number
    function getMonthName(month) {
        const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        return months[month];
    }

    // Initial render of the calendar
    renderCalendar(currentMonth, currentYear);

    // Logic for navigating to the previous month
    document.getElementById("prev").addEventListener("click", function () {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    // Logic for navigating to the next month
    document.getElementById("next").addEventListener("click", function () {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    // Close the modal when the close button is clicked
    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("event-modal").style.display = "none";
    });

    // Close the modal if the user clicks outside of the modal content
    window.onclick = function (event) {
        if (event.target === document.getElementById("event-modal")) {
            document.getElementById("event-modal").style.display = "none";
        }
    };
});