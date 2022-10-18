var elUsername = document.getElementById('username');
var elMsg      = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {

        elMsg.innerText = 'Username must be ' + minLength + 'charaters of more';
    } else {
        elMsg.innerText = '';
    }
}
    elUsername.addEventListener('blur', function () {
        checkUsername(5);
        }, false);

    
