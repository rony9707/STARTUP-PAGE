document.addEventListener('DOMContentLoaded', function () {
    // Function to update the date and time
    function updateDateTime() {
        const dateElement = document.getElementById('date');
        const timeElementIST = document.getElementById('timeIST');
        const timeElementCET = document.getElementById('timeCET'); // New element for CET
        const timeElementNewYork = document.getElementById('timeNewYork'); // New element for New York

        const currentDate = new Date();

        // Format the date as "YYYY-MM-DD"
        const formattedDate = currentDate.toISOString().split('T')[0];

        // Format the time as "HH:MM:SS" for IST
        const formattedTime = currentDate.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' });

        // Format the time as "HH:MM:SS" for CET
        const formattedTimeCET = currentDate.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin' });

        // Format the time as "HH:MM:SS" for New York
        const formattedTimeNewYork = currentDate.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });

        // Update the content of the span elements
        dateElement.textContent = formattedDate;
        timeElementIST.textContent = formattedTime;
        timeElementCET.textContent = formattedTimeCET; // Update CET time
        timeElementNewYork.textContent = formattedTimeNewYork; // Update New York time
    }

    // Call the updateDateTime function initially to display the current date and time
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);
});




document.addEventListener("DOMContentLoaded", function() {
  function updateStatus() {
      var statusElement = document.getElementById("onlineStatus");

      if (navigator.onLine) {
          statusElement.textContent = "Online";
          statusElement.classList.add('online');
      } else {
          statusElement.textContent = "Offline";
          statusElement.classList.add('offline');
      }
  }

  // Initial status check
  updateStatus();

  // Listen for online/offline events
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);
});


