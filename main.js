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
    const eter_text = document.getElementById("Enter")
    const eye = document.getElementById("eye")
    const border = document.getElementById("border_input")

    // Check overall validity and update the error message
    if (strongPasswordRegex.test(password)) {
        errorMessage.textContent = 'Good :D';
        errorMessage.classList.remove('text-danger');
        errorMessage.classList.add('text-success');

        eter_text.classList.remove("text-danger")
        eter_text.classList.add("text-success")

        eye.classList.remove("text-danger")
        eye.classList.add("text-success")

        border.classList.remove("border-danger")
        border.classList.add("border-success")

    }else if(password.length == 0){
        errorMessage.textContent = 'Password input is empty';
        errorMessage.classList.remove('text-danger');
        errorMessage.classList.add('text-muted');

        eter_text.classList.remove("text-danger")
        eter_text.classList.remove("text-success")
        eter_text.classList.add("text-primary")

        eye.classList.remove("text-danger")
        eye.classList.remove("text-success")
        eye.classList.add("text-primary")

        border.classList.remove("border-danger")
        border.classList.remove("border-success")
        border.classList.add("border-primary")
    }else {
        errorMessage.textContent = 'Min 8 characters with at insert one capital letter, a number and a special character.';
        errorMessage.classList.remove('text-muted');
        errorMessage.classList.add('text-danger');

        eter_text.classList.remove("text-primary")
        eter_text.classList.add("text-danger")

        eye.classList.remove("text-primary")
        eye.classList.add("text-danger")

        border.classList.remove("border-primary")
        border.classList.add("border-danger")
    }
}