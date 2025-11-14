// jQuery
$(document).ready(function () {
  // Get the form and response container
  const eventForm = $('#eventForm');  
  const responseMessage = $('#responseMessage');  

  // Check for form submission
  eventForm.on('submit', function (e) {
      e.preventDefault(); // JavaScript

      // Get field values
      const location = $('#location').val().trim(); 
      const address = $('#address').val().trim();  
      const postcode = $('#postcode').val().trim();  
      const eventName = $('#eventName').val().trim();  
      const date = $('#date').val();  
      const startTime = $('#startTime').val();  
      const duration = $('#duration').val();  
      const price = $('#price').val();  
      const details = $('#details').val().trim();  

      // JavaScript: Basic validation 
      if (!location || !address || !postcode || !eventName || !date || !startTime || !duration || !price || !details) {
          // If validation fails, display error message
          responseMessage.html('<p style="color: red;">Please fill in all required fields.</p>');  
          return; // JavaScript: Exit the function to prevent form submission
      }

      // If validation passes, display success message
      responseMessage.html(`
          <p style="color: green;">Your event has been submitted for review successfully!</p>
          <p><strong>Thank you, have a great day!</strong></p>
      `);  

      // Reset form
      eventForm[0].reset();  // jQuery
  });
});
