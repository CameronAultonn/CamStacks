// Javascript
var map = L.map('map').setView([54.597, -5.930], 10);  // Centering map on Belfast

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Define the event locations and their details
var events = [ 
  {
    lat: 54.590158, lng: -5.688790, name: "Charity Run", description: "Participate in a charity run for a good cause in Newtownards."
  },
  {
    lat: 54.579239, lng: -5.919810, name: "Community Festival", description: "Join us for the annual Community Festival in Belfast."
  },
  {
    lat: 54.599433, lng: -7.305796, name: "Music Night", description: "Get ready for an unforgettable evening of live music and great vibes at Omagh Music Night!"
  },
  {
    lat: 54.859268, lng: -5.8180, name: "Outdoor Movie Night", description: "Bring your blankets, chairs, and snacks for a magical evening under the stars!"
  },
  {
    lat:54.599525, lng:-5.704571, name:"Volunteering at Local Food Bank", description: "Join us in volunteering at our local food bank!"
  },
  {
    lat:54.5977705, lng:-5.9313901, name:"Community Book Club", description: "Join us for an exciting escape into the captivating worlds of books!"
  }
];


// Loop through the events array and add markers for each location
events.forEach(function(event) {
  var marker = L.marker([event.lat, event.lng]).addTo(map);
  marker.bindPopup("<b>" + event.name + "</b><br>" + event.description);
});
