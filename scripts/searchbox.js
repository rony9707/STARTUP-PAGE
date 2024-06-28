//search icon code
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchIcon").addEventListener("click", function () {
    // Get the input field value
    var inputValue = document.querySelector(".searchBoxInputField").value;

    // Construct the search URL with the input value
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);

    // Open the search URL in a new tab/window
    window.open(searchUrl, "_blank");
  });


  document.getElementById("searchInput").addEventListener("enter", function () {
    // Get the input field value
    var inputValue = document.querySelector(".searchBoxInputField").value;

    // Construct the search URL with the input value
    var searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);

    // Open the search URL in a new tab/window
    window.open(searchUrl, "_blank");
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById('searchInput');
  const placeholderText = document.getElementById('placeholderText');

  // Add an event listener for the "focus" event on the input field
  inputField.addEventListener('focus', () => {
    if (inputField.value.trim() === '') {
      placeholderText.classList.add('empty-focused');
    }
  });

  // Remove the CSS class when the input field loses focus
  inputField.addEventListener('blur', () => {
    if (inputField.value.trim() != '') {
      placeholderText.classList.add('empty-focused');
    }
    else{
      placeholderText.classList.remove('empty-focused');
    }
    
  });
});







