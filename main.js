document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show')
})

document.documentElement.style.setProperty('--animate-duration', '10s');


const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastName')
const inputEmail = document.getElementById('email')
const inputMessage = document.getElementById('message')

const form = document.getElementById('validate')
form.addEventListener('click', validate)

function validate(){

    let existsError = false;
    const errorName = document.getElementById('errorName')
    let result = validateName(inputName.value)
    errorName.hidden = result
    existsError = existsError || !result
    if(!existsError) {
        inputName.setCustomValidity('');
    } else {
        inputName.setCustomValidity('¡Error! Cambo inválido');
        inputName.reportValidity();
        return;
    }

    const errorLastName = document.getElementById('errorLastName')
    result = validateName(inputLastName.value)
    errorLastName.hidden = result
    existsError = existsError || !result
    if(!existsError) {
        inputLastName.setCustomValidity('');
    } else {
        inputLastName.setCustomValidity('¡Error! Cambo inválido');
        inputLastName.reportValidity();
        return;
    }

    const errorEmail = document.getElementById('errorEmail')
    result = validateEmail(inputEmail.value)
    errorEmail.hidden = result
    existsError = existsError || !result
    if(!existsError) {
        inputEmail.setCustomValidity('');
    } else {
        inputEmail.setCustomValidity('¡Error! Cambo inválido');
        inputEmail.reportValidity();
        return;
    }

    const errorMessage = document.getElementById('errorMessage')
    result = validateEmail(inputMessage.value)
    errorMessage.hidden = result
    existsError = existsError || !result
    if(!existsError) {
        inputMessage.setCustomValidity('');
    } else {
        inputMessage.setCustomValidity('¡Error! Cambo inválido');
        inputMessage.reportValidity();
        return;
    }

    if(!existsError) {
        inputName.value = ''
        inputLastName.value = ''
        inputEmail.value = ''
        inputMessage.value = ''
    }
}

function validateMessage(message) {
    return message.length > 0 && message.length <= 500
}

function validateEmail(email){
    const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    return regExp.test(email)
}

function validateName(name){
    const regExp = /^[a-zA-Z]{3,20}$/

    return regExp.test(name)
}