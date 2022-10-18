function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}
function checkEmail() {
    var elMsg = document.getElementById('feedback');
    if (thi)
}
var elUsername = document.getElementById('username');

elUsername.addEventListener('blur', checkUsername, false);