// Function to toggle password visibility
document.getElementById('togglePassword').addEventListener('click',
    function () {
        const passwordInput = document.getElementById('password');
        const icon = document.getElementById('eye');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });

function validatePassword(password) {
    const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errorMessage = document.getElementById('errorMessage');

    // Check each condition and update the corresponding label
    document.getElementById('minLength').innerHTML =
        password.length >= 8 ?
            '<i class="fas fa-check text-success"></i> Minimum 8 characters' :
            '<i class="fas fa-times text-danger"></i> Minimum 8 characters';
    document.getElementById('uppercase').innerHTML =
        /[A-Z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one uppercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one uppercase letter';
    document.getElementById('lowercase').innerHTML =
        /[a-z]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one lowercase letter' :
            '<i class="fas fa-times text-danger"></i> At least one lowercase letter';
    document.getElementById('symbol').innerHTML =
        /[@$!%*?&]/.test(password) ?
            '<i class="fas fa-check text-success"></i> At least one symbol (@$!%*?&)' :
            '<i class="fas fa-times text-danger"></i> At least one symbol (@$!%*?&)';

    // Check overall validity and update the error message
    if (strongPasswordRegex.test(password)) {
        errorMessage.textContent = 'Strong Password';
        errorMessage.classList.remove('text-danger');
        errorMessage.classList.add('text-success');
    } else {
        errorMessage.textContent = 'Weak Password';
        errorMessage.classList.remove('text-success');
        errorMessage.classList.add('text-danger');
    }
}