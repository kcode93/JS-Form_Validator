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
function showErrorMsg(input, input_small, message) {
	//adds appropiate classes for displaying error
	input.classList.add('error');
	input_small.classList.add('error');

	input_small.innerHTML = message;
}

//Shows Good Message
function showSuccessMsg(input, input_small) {
	//adds appropiate classes for displaying success
	input.classList.add('success');
	input_small.innerHTML = '';

	//removes error classes
	input.classList.remove('error');
	input_small.classList.remove('error');

	console.log('sho');
}

//validates regular email
function checkEmail(input) {
    let elementSibling = input.nextElementSibling;
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	//const result = re.test(String(input).toLowerCase());
	if(re.test(input.value)){
        showSuccessMsg(input, elementSibling);
    }else if (input.value !== '' && !re.test(input.value)){
        showErrorMsg(input, elementSibling, `${getFieldName(input)} is NOT a Valid email`);
    }
}

function getFieldName(input){
    //capitalizes the first character in string
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequiredFields(inputArray) {
	//check if input values are empty
	inputArray.forEach(function (input) {
		let elementSibling = input.nextElementSibling;
		if (input.value.trim() === '') {
			showErrorMsg(input, elementSibling, `${getFieldName(input)} is required`);
		}else{
            showSuccessMsg(input, elementSibling);
        }
	});
}

function checkLength(input, min_length, max_length){
    //verifies the min and max length of the inputs
    let elementSibling = input.nextElementSibling;
    if(input.value !== '' && input.value.length < min_length){
        showErrorMsg(input, elementSibling, `${getFieldName(input)} must be ${min_length} characters or more`);
    }else if (input.value !== '' && input.value.length > max_length){
        showErrorMsg(input, elementSibling, `${getFieldName(input)} can't be more than ${max_length} characters`);
    }
}

function checkMatchingPsw(psw, pswConfirm){
    //checks for matching passwords
    let elementSibling = passwordConf.nextElementSibling;
    if(pswConfirm.value !== '' && (psw.value === pswConfirm.value)){
        showSuccessMsg(passwordConf, elementSibling);
    }else if (pswConfirm.value !== '' && (psw.value !== pswConfirm.value)){
        showErrorMsg(pswConfirm, elementSibling, `The Password doesn't Match!`);
    }
}


//Event listener
form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkRequiredFields([userName, email, password, passwordConf]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkMatchingPsw(password, passwordConf);

	/*----- NOT very efficient Form Validation

    //check for Username empty values
    if(userName.value === ''){
        showErrorMsg(userName, userNameError, "The Username is required");
    }else{
        showSuccessMsg(userName, userNameError);
    }

    //check for email empty values
     if(email.value === ''){
        showErrorMsg(email, emailError, "The email is required");
    }else if (!validateEmail(email.value)){
        showErrorMsg(email, emailError, "NOT a Valid email address");
    }else{
        showSuccessMsg(email, emailError);
    }

    ////check for password empty values
    if(password.value === ''){
        showErrorMsg(password, passwordError, "The password is required");
    }else{
        showSuccessMsg(password, passwordError);
    }

    ////check for password confirmation empty values
    if(passwordConf.value === ''){
        showErrorMsg(passwordConf, passwordConfError, "Please Confirm your Password");

    ////check for password confirmation values NOT matching
    }else if (passwordConf.value !== '' && passwordConf.value !== password.value){
        showErrorMsg(passwordConf, passwordConfError, "The Password Does NOT Match");
    }else  {
        showSuccessMsg(passwordConf, passwordConfError);
    }
    
    ---------*/
});
