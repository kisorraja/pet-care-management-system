const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLTextAreaElement;
const form = document.querySelector('form') as HTMLFormElement;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        submitForm();
    }
});
function validateForm(): boolean {
    let isValid = true;
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name');
        isValid = false;
    } else {
        showSuccess(nameInput);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput);
    }
    const phoneRegex = /^\d{10}$/; 
    if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Please enter a valid 10-digit phone number');
        isValid = false;
    } else {
        showSuccess(phoneInput);
    }
    if (messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        isValid = false;
    } else {
        showSuccess(messageInput);
    }

    return isValid;
}
function showError(input: HTMLInputElement | HTMLTextAreaElement, message: string) {
    const formGroup = input.parentElement as HTMLElement;
    formGroup.classList.add('has-error');
    const errorMessage = formGroup.querySelector('.error-message') as HTMLElement;
    errorMessage.innerText = message;
}
function showSuccess(input: HTMLInputElement | HTMLTextAreaElement) {
    const formGroup = input.parentElement as HTMLElement;
    formGroup.classList.remove('has-error');
    const errorMessage = formGroup.querySelector('.error-message') as HTMLElement;
    errorMessage.innerText = '';
}
function submitForm() {
    console.log('Form submitted successfully!');
}
