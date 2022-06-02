document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show')
})

document.documentElement.style.setProperty('--animate-duration', '5s');


const inputName = document.getElementById('name')
const inputLastName = document.getElementById('lastName')
const inputEmail = document.getElementById('email')
const inputMessage = document.getElementById('message')

const form = document.getElementById('validate')
form.addEventListener('click', validate)

function validate(){

    console.log('Entre')

    let existsError = false;
    const errorName = document.getElementById('errorName')
    let result = validateName(inputName.value)
    errorName.hidden = result
    existsError = existsError || !result

    const errorLastName = document.getElementById('errorLastName')
    result = validateName(inputLastName.value)
    errorLastName.hidden = result
    existsError = existsError || !result

    const errorEmail = document.getElementById('errorEmail')
    result = validateEmail(inputEmail.value)
    errorEmail.hidden = result
    existsError = existsError || !result

    if(!existsError) {
        inputName.value = ''
        inputLastName.value = ''
        inputEmail.value = ''
        inputMessage.value = ''
    }
}

function validateEmail(email){
    const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    return regExp.test(email)
}

function validateName(name){
    const regExp = /^[a-zA-Z]{3,20}$/

    return regExp.test(name)
}