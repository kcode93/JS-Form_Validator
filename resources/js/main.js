/*Target HTML Elements */
const form = document.querySelector('#registration_form');
const userName = document.querySelector('#username');
const userNameError = document.querySelector('#usernameErr');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailErr');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordErr');
const passwordConf = document.querySelector('#confirmpassword');
const passwordConfError = document.querySelector('#passwordErr2');
const submitBtn = document.querySelector('#submit-btn');

//Show input Error Message
function showErrorMsg(input, input_small, message){
    //adds appropiate classes for displaying error
    input.classList.add('error');
    input_small.classList.add('error');

    input_small.innerHTML= message;
}

function showSuccessMsg(input, input_small){
    //adds appropiate classes for displaying success
    input.classList.add('success');
   
    //removes error classes
     input.classList.remove('error');
     input_small.classList.remove('error');

    console.log('sho');
}

//Event listener
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //check for empty values
    if(userName.value === ''){
        showErrorMsg(userName, userNameError, "The Username is required");
    }else{
        showSuccessMsg(userName, userNameError);
    }

     if(email.value === ''){
        showErrorMsg(email, emailError, "The email is required");
    }else{
        showSuccessMsg(email, userNameError);
    }

    if(password.value === ''){
        showErrorMsg(password, passwordError, "The password is required");
    }else{
        showSuccessMsg(password, passwordError);
    }

    if(passwordConf.value === ''){
        showErrorMsg(passwordConf, passwordConfError, "Please Confirm your Password");
    }else if (passwordConf !== password){
        showErrorMsg(passwordConf, passwordConfError, "The Password Does NOT Match");
    }else{
        showSuccessMsg(passwordConf, passwordConfError);
    }
});