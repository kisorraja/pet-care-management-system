// Get form elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var messageInput = document.getElementById('message');
var form = document.querySelector('form');
// Add submit event listener to the form
form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
    // Validate the form fields
    if (validateForm()) {
        // If all fields are valid, submit the form
        submitForm();
    }
});
// Function to validate form fields
function validateForm() {
    var isValid = true;
    // Validate name field
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name');
        isValid = false;
    }
    else {
        showSuccess(nameInput);
    }
    // Validate email field
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    else {
        showSuccess(emailInput);
    }
    // Validate phone field
    var phoneRegex = /^\d{10}$/; // Assuming 10 digit phone number
    if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    else {
        showSuccess(phoneInput);
    }
    // Validate message field
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        isValid = false;
    }
    else {
        showSuccess(messageInput);
    }
    return isValid;
}
// Function to display error message for invalid input
function showError(input, message) {
    var formGroup = input.parentElement;
    formGroup.classList.add('has-error');
    var errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = message;
}
// Function to show success state for valid input
function showSuccess(input) {
    var formGroup = input.parentElement;
    formGroup.classList.remove('has-error');
    var errorMessage = formGroup.querySelector('.error-message');
    errorMessage.innerText = '';
}
// Function to submit the form
function submitForm() {
    // You can perform further actions here, such as sending the form data to a server
    // For demonstration purposes, I'm just logging the form data to the console
    console.log('Form submitted successfully!');
}
