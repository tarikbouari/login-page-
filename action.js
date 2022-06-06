


let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordTwo = document.getElementById('password2');
let submit = document.getElementById('submit');
let visible = document.getElementById('blanke')


function check(e){
   
}

function clicked(e){

    
    error();

}

function error(){

    let nameUser = username.value;
    let mail = email.value;
    let pass = password.value;
    let passTwo = passwordTwo.value;

        
    if (mail == "" ){
        visible.style.visibility='visible';
        email.style.border ="2px solid red";
    }
    if( pass !== passTwo ){

        // alert('your password doesnt match');
    }
}
