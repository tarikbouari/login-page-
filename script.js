

// selection of html element // variable def 

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwordTwo = document.getElementById('password2');
let submit = document.getElementById('submit');


submit.addEventListener('click', ()=>console.log("sddd"))

function check(e){
  let variables = [];

  variables.push(e.value);

    return variables;
}

function clicked(){
    console.log("s");
    console.log(username.value);
}


    