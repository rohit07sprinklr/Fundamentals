
'use strict';
// alert("I'm Javascript")

// let admin,name;
// name = "John";
// admin = name;
// alert(admin);

// let name = prompt("What is your name",[])
// alert(name);

// let value = prompt('What is the "official" name of JavaScript?', '');

// if (value == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You don't know? ECMAScript!");
// }

// let value = prompt('What is the number');
// value = Number(value)
// if(value === 0){
//     alert(value)
// }else{
//     alert(value/Math.abs(value))
// }

let login = 'Employee'
let message = (login =='Employee')?'Hello':(login == 'Director')?'Greetings':(login == '')?'No login':''
alert(message)