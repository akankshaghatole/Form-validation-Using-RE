// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('mobile').addEventListener('blur', validatePhone);
document.getElementById('dob').addEventListener('blur', validateDOB);
document.getElementById('password').addEventListener('blur', validatepassword);
document.getElementById('confirmpassword').addEventListener('blur', matchpassword);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{3,20}[ ][a-zA-Z]{3,20}$/;
    
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-z0-9_\.\-]+)@([a-z0-9_\.\-]+)\.([a-z]{2,5})$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}
function validatePhone() {
    const phone = document.getElementById('mobile');
    const re = /^([+]\d{2})?[6+7+8+9+]{1}[0-9]{9}$/;

    if(!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}

function validateDOB() {
    const phone = document.getElementById('dob');
    const re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

    if(!re.test(phone.value)) {
        dob.classList.add('is-invalid');
    } else {
        dob.classList.remove('is-invalid');
        dob.classList.add('is-valid');
    }
}



function validatepassword() {
    const password = document.getElementById('password');
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-zA-Z]).{8,}$/;

    
    
    if(!re.test(password.value)) {
        password.classList.add('is-invalid');
    }
    else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    
            
}



