const form = document.getElementById('card__form');
const error = document.getElementById('error');
const emailInput = document.getElementById('email');
const card = document.querySelector('.card');
const cardSuccess = document.querySelector('.success__card');
const emailReceived = document.querySelector('#email-received');
const dismissButton = document.querySelector('#dismissBtn');
const attribution = document.querySelector('.attribution');
error.textContent = '';

const clearError = () => {
    error.textContent = '';
    emailInput.classList.remove('errorMsg');
    emailInput.classList.remove('animate__animated', 'animate__headShake');
    emailInput.removeEventListener('input', clearError);
}

const dismissCard = () => {
    card.classList.remove('hidden');
    cardSuccess.classList.add('hidden');
    emailInput.value = '';
    error.textContent = '';
    emailInput.classList.remove('errorMsg');
    cardSuccess.classList.remove('animate__animated', 'animate__bounceIn');
    card.classList.remove('animate__animated', 'animate__bounceOut');
    card.classList.add('animate__animated', 'animate__bounceInUp');
    dismissButton.removeEventListener('click', dismissCard);
}

window.addEventListener('DOMContentLoaded', () => {
    card.classList.add('animate__animated','animate__bounceInUp');
    attribution.classList.add('animate__animated', 'animate__bounceInUp', 'animate__delay-1s');
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        error.textContent = 'Valid email required';
        emailInput.classList.add('errorMsg');
        emailInput.focus();
        emailInput.classList.add('animate__animated', 'animate__headShake');

        // Remove error message when user starts typing
        emailInput.addEventListener('input', clearError);

        return;
    }
    card.classList.remove('animate__animated', 'animate__bounceInUp');
    card.classList.add('animate__animated', 'animate__bounceOut');
    card.classList.add('hidden');
    cardSuccess.classList.remove('hidden');
    cardSuccess.classList.add('animate__animated', 'animate__bounceIn');
    emailReceived.textContent = email;

    dismissButton.addEventListener('click', dismissCard);
    
})

