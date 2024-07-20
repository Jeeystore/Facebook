const correctEmail = 'cintaputa22@gmail.com';
const correctPassword = 'JEEYSTOREE5050';

function checkLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (email === correctEmail && password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect email or password. Please try again.';
    }
}