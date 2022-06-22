


let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordTwo = document.getElementById('password2');
let submit = document.getElementById('button');
let visible = document.getElementById('blanke')


submit.addEventListener( 'click', (e) =>{
e.preventDefault();

let userValue = username.value;
let mail = email.value;
let pass = password.value;
let secondPass = passwordTwo.value;


console.log(userValue);
console.log(mail);
console.log(pass);
console.log(secondPass);

if( mail == ""){

    setError(email);
    setsucessClear(email);
}else{

    setSucess(email);
    setErrorClear(email);
}

if(userValue == ""){
    setError(username);
    setsucessClear(username);
}else{
    setSucess(username);
    setErrorClear(username);
}

if(pass == ""){
    setError(password);
    setsucessClear(password);
}else{
    setSucess(password);
     setErrorClear(password);
}

if(secondPass == ""){
    setError(passwordTwo);
    setsucessClear(passwordTwo);
}else{
    setSucess(passwordTwo);
    setErrorClear(passwordTwo);
}

if(pass !== secondPass){
    alert('passwords do not match');
    setError(password);
    setError(passwordTwo);
    setsucessClear(password);
    setsucessClear(passwordTwo);
   
}else{
//     setSucess(password);
//     setErrorClear(password);
//     setSucess(passwordTwo);
//   setErrorClear(passwordTwo);
}

  
});




function setSucess(input){

    //select parent element of every input // control-form
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    let red = formControl.querySelector('.red');
    let green = formControl.querySelector('.green');

    input.style.border ="2px solid green";
    green.style.color="green";
    green.style.visibility="visible";
}

function  setError(input){

     //select parent element of every input // control-form
     let formControl = input.parentElement;
     let small = formControl.querySelector('small');
     let red = formControl.querySelector('.red');
     let green = formControl.querySelector('.green');
 
    
     small.style.visibility='visible';
     input.style.border ="2px solid red";
     red.style.color="red";
     red.style.visibility="visible";
     small.style.color="red";
     
}

function setErrorClear(input){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    let red = formControl.querySelector('.red');
    let green = formControl.querySelector('.green');

   
    small.style.visibility='hidden';
    red.style.visibility="hidden";
    
}

function setsucessClear(input){
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    let red = formControl.querySelector('.red');
    let green = formControl.querySelector('.green');

   
    small.style.visibility='hidden';
    green.style.visibility="hidden";
    

}



