// function Calculator(){
//     this.methods = new Map();
//     this.calculate = function(str){
//         const operateArr = str.split(' ');
//         let operandOne = Number(operateArr[0]);
//         let operandTwo = Number(operateArr[2]);
//         let operator = operateArr[1];
//         let func = this.methods.get(operator);
//         return func(operandOne,operandTwo)
//     }
//     this.addMethod = function(name, callback){
//         this.methods.set(name,callback)
//     }
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("9 ** 3");
// alert( result ); 


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map((user)=>user.name)

// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user)=>{
//     let fullName = user.name + user.surname;
//     return {fullName: fullName, id: user.id}
// })

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// const sortByAge = (arr)=>{
//     arr.sort((a,b)=>{
//         return a.age - b.age;
//     })
// }
// sortByAge(arr);
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


let arr = [1, 2, 3];

const shuffle = (arr)=>{

}

shuffle(arr);

shuffle(arr);

shuffle(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//     return arr.reduce((accum, curVal)=>{
//         return accum+curVal.age;
//     },0)/arr.length
// }

// alert( getAverageAge(arr) ); 

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
// const groupById = (users)=>{
//     return users.reduce((accum, user)=>{
//         accum.set(user.id,user)
//         return accum
//     },new Map())
// }
// let usersById = groupById(users);
// console.log(usersById)
