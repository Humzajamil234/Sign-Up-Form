const form = document.getElementById('emailForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation for email and password
  if (!email || !password) {
    alert('Both email and password are required!');
  } else {
    alert('Form Submitted Successfully!');
    // Normally here you'd send the data to the server.
  }
});