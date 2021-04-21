const email = document.querySelector('.signup__input');
const invaild = document.querySelector('.invaild__email');
const signupBtn = document.querySelector('.btn--signup')
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


signupBtn.addEventListener('click', e => {
    if (!email.value.match(regexPatten)) {
        invaild.style.display = 'block'
    } else {
        invaild.style.display = 'none'
    }
});