document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var service = document.getElementById("service").value;

  // Perform form validation
  if (name.trim() === "" || email.trim() === "" || service === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Perform booking submission (AJAX request or form submission to a server)

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("service").value = "";

  alert("Thank you for booking!");

  // Additional logic (e.g., show confirmation message, redirect to a new page)
});