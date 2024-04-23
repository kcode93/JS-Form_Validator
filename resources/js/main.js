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
function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const result = re.test(String(email).toLowerCase());
	return result;
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequiredFields(inputArray) {
	//check if input values are empty
	inputArray.forEach(function (input) {
		let elementSibling = input.nextElementSibling;
		if (input.value.trim() === '') {
			showErrorMsg(input, elementSibling, `${getFieldName(input)} is required`);
		}else {
			showSuccessMsg(input, elementSibling);
		}
	});
}

// function checkValidEmail(input){
//     let elementSibling = input.nextElementSibling;
//     if (input.value !== '' && !validateEmail(email.value)){
//         showErrorMsg(input, elementSibling, "NOT a Valid email address");
//     }
// }

// function checkMatchingPsw(input, inputConf){
//     let inputConfSibling = inputConf.nextElementSibling;

//     if (inputConf.value !== input.value){
//         showErrorMsg(inputConf, inputConfSibling, "The Password Does NOT Match");
//     }else  {
//         showSuccessMsg(inputConf, inputConfSibling);
//     }
// }

//Event listener
form.addEventListener('submit', function (e) {
	e.preventDefault();

	checkRequiredFields([userName, email, password, passwordConf]);

    // checkValidEmail(email);

    // checkMatchingPsw(password, passwordConf);

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
