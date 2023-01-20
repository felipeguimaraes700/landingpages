
let password = document.getElementById('password')
let eyePasswordOpen = document.getElementById('eyePasswordOpen')
let eyePasswordClose = document.getElementById('eyePasswordClose')


function eyePassword(){
    let inputIsTypePassword = password.type =='password'

    if(inputIsTypePassword){
        showPassword()
    }else{
        hidePasssword()
    }
}

function showPassword(){
    password.setAttribute('type', 'text')
    eyePasswordOpen.style.display = 'none'
    eyePasswordClose.style.display = 'block'
}

function hidePasssword(){
    password.setAttribute('type', 'password')
    eyePasswordOpen.style.display = 'block'
    eyePasswordClose.style.display = 'none'
}
// CONFIRM PASSWORD //////////////////////////////////////////

let confirmPassword = document.getElementById('confirm-password')
let eyeConfirmPasswordOpen = document.getElementById('eyeConfirmPasswordOpen')
let eyeConfirmPasswordClose = document.getElementById('eyeConfirmPasswordClose')

function eyeConfirmPassword(){
    let inputIsTypePassword = confirmPassword.type == 'password'

    if(inputIsTypePassword){
        showConfirmPassword()
    }else{
        hideConfirmPassword()
    }
}

function showConfirmPassword(){
    confirmPassword.setAttribute('type', 'text')
    eyeConfirmPasswordOpen.style.display = 'none'
    eyeConfirmPasswordClose.style.display = 'block'
}

function hideConfirmPassword(){
    confirmPassword.setAttribute('type', 'password')
    eyeConfirmPasswordOpen.style.display = 'block'
    eyeConfirmPasswordClose.style.display = 'none'
}