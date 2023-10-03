<script>
    // Get DOM elements
    const prevDayBtn = document.getElementById('prevDay');
    const nextDayBtn = document.getElementById('nextDay');
    const selectedDate = document.getElementById('selectedDate');
    const dateInput = document.getElementById('dateInput');
    // Initial date (September 24)
    const currentDate = new Date(2023, 8, 24); // Month is 0-based, so 8 represents September
    // Function to update the displayed date
    function updateDisplayedDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      selectedDate.textContent = date.toLocaleDateString('en-US', options);
    }
    // Function to navigate to the previous day
    function navigateToPreviousDay() {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDisplayedDate(currentDate);
      dateInput._flatpickr.setDate(currentDate);
    }
    // Function to navigate to the next day
    function navigateToNextDay() {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDisplayedDate(currentDate);
      dateInput._flatpickr.setDate(currentDate);
    }
    // Initialize Flatpickr
    flatpickr(dateInput, {
      enable: [{
        from: "today",
        to: new Date().fp_incr(30), // Allow selection for the next 30 days
      }],
      dateFormat: "F j", // Display format
      defaultDate: currentDate,
      onChange: function(selectedDates, dateStr) {
        const selectedDate = new Date(dateStr);
        currentDate.setDate(selectedDate.getDate());
        updateDisplayedDate(currentDate);
      },
    });
    // Add event listeners for navigation
    prevDayBtn.addEventListener('click', navigateToPreviousDay);
    nextDayBtn.addEventListener('click', navigateToNextDay);
    // Initialize the displayed date
    updateDisplayedDate(currentDate);
  </script>
