

// selection of html element // variable def 

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password2');
const submit = document.getElementById('submit');
console.log(password);
console.log(password);

submit.onclick = function(){
    // e.preventDefault();

    let nameUser = username.value;
    let mail = email.value;
    let pass = password.value;
    let passTwo = passwordTwo.value;

    console.log(mail,nameUser);
    
};


    