const passwordOptions = ['password', 'text'];
let htmlPassword;
function handleFloatingLabel() {

}

function handlePasswordSwitcher() {
    document.querySelector('.js-password-switcher').addEventListener('click', function () {
        htmlPassword.type = passwordOptions[+this.checked];
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    htmlPassword = document.querySelector('.js_input_password');
    handleFloatingLabel();
    handlePasswordSwitcher();
});