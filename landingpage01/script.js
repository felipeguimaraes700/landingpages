// menu ////////////////////////////////////////////////
function openMenu(){
    document.getElementById('open').style.display='none'
    document.getElementById('close').style.display='block'
    document.getElementById('navigationMobile').style.height = '100vh'
}
function closeMenu(){
    document.getElementById('open').style.display='block'
    document.getElementById('close').style.display='none'
    document.getElementById('navigationMobile').style.height = '0'
}


// compare password //////////////////////////////////////////////

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

// VALIDATION ////////////////////////////////////
    const form = document.getElementById('form')
    const inputs = document.querySelectorAll('.input')
    const spans = document.querySelectorAll('.span-required')
    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
    const sucess = document.getElementById('cadastrado')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        

        nameValidate()
        passwordValidate()
        comparePassword()
        
        
    })

    function setError(index){
        inputs[index].style.border = '2px solid red'
        spans[index].style.display = 'block'
    }

    function removeError(index){
        inputs[index].style.border = ''
        spans[index].style.display = 'none'
    }

    function nameValidate(){
        if(inputs[0].value.length < 3){
            setError(0)
        }else{
            removeError(0)
        }
    }

    function emailValidate(){
        if(!emailRegex.test(inputs[1].value)){
            setError(1)
        }else{
            removeError(1)
        }
    }

    function passwordValidate(){
        if(inputs[2].value.length  < 6){
            setError(2)
        } else{
            removeError(2)
            comparePassword()
        }
    }

    function comparePassword(){
        if(inputs[2].value == inputs[3].value && inputs[3].value.length >= 6){
            removeError(3)
        }else{
            setError(3)
        }
    } 