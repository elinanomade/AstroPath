"use strict";

var form = document.getElementById("subscribe-form");
var emailInput = document.getElementById("email-input");
var confirmationMessage = document.getElementById("confirmation-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the entered email
  var email = emailInput.value;

  // Simulate saving the email to a database (replace with your actual database code)
  // This is a placeholder for demonstration purposes
  saveEmailToDatabase(email);

  // Show the confirmation message
  confirmationMessage.textContent = `Thank you for subscribing with email: ${email}`;
  confirmationMessage.style.display = "block";

  // Clear the email input
  emailInput.value = "";
});

function saveEmailToDatabase(email) {
  // In a real application, you would send the email to your server and save it in a database.
  // Here, we're just logging it to the console as a placeholder.
  console.log(`Saving email to database: ${email}`);
}

// This is a named function named saveEmailToDatabase.
// It takes an email parameter and, in a real application,
// would handle the task of saving the email to a database.In this example,
// it simply logs the email to the console as a placeholder.
