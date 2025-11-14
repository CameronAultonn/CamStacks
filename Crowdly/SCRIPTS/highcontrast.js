
 // Javascript

 //Enable High Contrast Mode
function enableHighContrast() {
    document.body.classList.add('high-contrast');
    localStorage.setItem('highContrast', 'enabled');
  }
  
  //Disable High Contrast Mode
  function disableHighContrast() {
    document.body.classList.remove('high-contrast');
    localStorage.setItem('highContrast', 'disabled');
  }
  
  //Logic for user pressing moon to turn High Contrast Mode on and off 
  function toggleHighContrast() {
    if (localStorage.getItem('highContrast') === 'enabled') {
      disableHighContrast();
    } else {
      enableHighContrast();
    }
  }
  
  // Check the stored preference on page load
  window.onload = function() {
    if (localStorage.getItem('highContrast') === 'enabled') {
      document.body.classList.add('high-contrast');
    }
  };
