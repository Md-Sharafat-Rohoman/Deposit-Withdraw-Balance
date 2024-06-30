// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2:get the address inside the email input field
    const eamilField = document.getElementById('user-email');
    const email = eamilField.value;
    // step-3: get the password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password)

    // step-4: verify email and password
    if(email === 'sharafat@gmail.com' && password === 'Google Account'){
        window.location.href = 'bank.html'
    }
    else{
        // console.log('invalid user')
        alert('Toke ami t aijjo sontan gosona korlam tui password bule gasos')
    }
    
})