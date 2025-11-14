document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".banner-image");
    let index = 0;

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(changeImage, 5000); // Change every 5 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("calendar-days");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");


    let currentDate = new Date();
    
    function renderCalendar() {
        let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        let lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        
        monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        daysContainer.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            daysContainer.appendChild(emptyDiv);
        }

        for (let i = 1; i <= lastDate; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.textContent = i;

            if (eventDays.includes(i)) {
                dayDiv.classList.add("event-day");
            }

            daysContainer.appendChild(dayDiv);
        }
    }

    prev.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    next.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        document.body.style.backgroundColor = "#F5F5F5"; // Light background
    } else {
        document.body.style.backgroundColor = "#1E2A38"; // Dark background
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiry
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax"; // Set the cookie
    console.log("Cookie set:", name + "=" + value + expires); // Debugging log
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';'); // Get all cookies
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length); // Return the cookie value
        }
    }
    return null; // Return null if cookie not found
}

// Check if the user has already accepted cookies
window.onload = function () {
    // Check if "cookiesAccepted" key exists in localStorage
    if (!localStorage.getItem("cookiesAccepted")) {
        // Show the cookie banner if not accepted
        document.getElementById("cookie-banner").style.display = "block";
    }
};

// Function to accept cookies and hide the banner
function acceptCookies() {
    // Set the "cookiesAccepted" item in localStorage to "true"
    localStorage.setItem("cookiesAccepted", "true");
    
    // Hide the cookie banner
    document.getElementById("cookie-banner").style.display = "none";
}

function jumpToSection(anchor) {
    const section = document.querySelector(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

// Show the button when the user scrolls down
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.classList.add("show"); // Show button with fade-in
    } else {
      button.classList.remove("show"); // Hide button smoothly
    }
  };
  
  // Scroll to the top with smooth effect
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const dropdown = new Choices('#section-jump', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false
  });

  function jumpToSection(value) {
    if (value) {
      location.href = value;
    }
  }




