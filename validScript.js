document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const zip = document.getElementById('zip');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');

    // Helper function to validate fields
    function validateField(field, errorField, errorMessage) {
        if (!field.validity.valid) {
            field.classList.add('invalid');
            errorField.textContent = errorMessage || field.validationMessage;
        } else {
            field.classList.remove('invalid');
            field.classList.add('valid');
            errorField.textContent = '';
        }
    }

    // Event listeners for real-time validation
    email.addEventListener('input', () => validateField(email, document.getElementById('emailError')));
    country.addEventListener('input', () => validateField(country, document.getElementById('countryError')));
    zip.addEventListener('input', () => validateField(zip, document.getElementById('zipError'), 'Zip code should be 5 digits'));
    password.addEventListener('input', () => validateField(password, document.getElementById('passwordError'), 'Password must be at least 6 characters'));
    passwordConfirm.addEventListener('input', () => {
        const errorField = document.getElementById('passwordConfirmError');
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.setCustomValidity("Passwords do not match");
        } else {
            passwordConfirm.setCustomValidity('');
        }
        validateField(passwordConfirm, errorField, 'Passwords do not match');
    });

    // Prevent form submission if there are errors
    form.addEventListener('submit', function (event) {
        [email, country, zip, password, passwordConfirm].forEach(field => {
            validateField(field, document.getElementById(`${field.id}Error`));
        });
        if (!form.checkValidity()) {
            event.preventDefault();
        }
    });
});