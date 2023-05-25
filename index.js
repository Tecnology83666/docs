// Handle form submission
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    var username = document.getElementById("username-input").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;

    // Perform form validation (you can add more validation rules)
    if (username.length < 6 || username.length > 40) {
      showMessage("Username must be between 6 and 40 characters");
      return;
    }

    // Perform email validation (you can add more validation rules)
    if (!isValidEmail(email)) {
      showMessage("Invalid email address");
      return;
    }

    // Perform password validation (you can add more validation rules)
    if (password.length < 8 || password.length > 40) {
      showMessage("Password must be between 8 and 40 characters");
      return;
    }

    // Prepare data for the API request
    var data = {
      username: username,
      email: email,
      password: password,
    };

    // Send the POST request using Axios
    axios
      .post("api/signup", data)
      .then(function (response) {
        // Handle the response from the server
        showMessage(response.data.message);
      })
      .catch(function (error) {
        // Handle any errors that occurred during the request
        showMessage("An error occurred. Please try again later.");
        console.error(error);
      });
  });

// Function to display a message in the message box
function showMessage(message) {
  var messageBox = document.getElementById("message-s");
  messageBox.textContent = message;
}

// Function to validate email using regular expression
function isValidEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
