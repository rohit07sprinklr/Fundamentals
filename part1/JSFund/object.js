// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum=0;
// for (let key in salaries) {
//     sum += salaries[key];
//   }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
// const multiplyNumeric = function(menu){
//     menu.width*=2;
//     menu.height*=2;
// }
// multiplyNumeric(menu);
// alert(menu.width)

// function makeUser() {
//     return {
//       name: "John",
//       ref(){
//         return this
//       }
//     };
//   }
  
// let user = makeUser();
  
// alert( user.ref().name ); 

// let calculator = {
//     a: 1,
//     b: 1,
//     read(){
//         let nums = prompt("Enter the numbers spaced","")
//         console.log(nums)
//         let arr = nums.split(' ').map((itm)=>Number(itm))
//         this.a = arr[0]
//         this.b = arr[1]
//     },
//     sum(){
//         return this.a + this.b
//     },
//     mul(){
//         return this.a * this.b
//     }
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { 
//       alert( this.step );
//       return this;
//     }
//   };
//   ladder.up().up().down().showStep().down().showStep();

// function Calculator(){
//     this.read = function(){
//         let nums = prompt("Enter the numbers spaced","")
//         console.log(nums)
//         let arr = nums.split(' ').map((itm)=>Number(itm))
//         this.a = arr[0]
//         this.b = arr[1]
//     };
//     this.sum= function(){
//         return this.a + this.b
//     };
//     this.mul = function(){
//         return this.a * this.b
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(initVal){
//     this.value = initVal;
//     this.read = function(){
//         let cur = prompt('Enter value')
//         this.value += cur
//     }
// }

// alert(accumulator.value); 

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

// const sumSalaries = (salaries)=>{
//     return Object.entries(salaries).reduce((sum,key)=>{
//         return sum+key[1]
//     },0)
// }
// alert( sumSalaries(salaries) );

// let user = { name: "John", years: 30, isAdmin: true};
// let {name, years:age, isAdmin = false} = user
// console.log(name)
// console.log(age)
// console.log(isAdmin)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 50
  };

  function topSalary(salaries){
    let curMax = 0;
    return Object.entries(salaries).reduce((res,salary)=>{
        let [name,inc] = salary;
        if(inc>curMax){
            console.log(inc,name)
            res = name
            curMax = inc
        }
        return res
    },"")
  }
  alert(topSalary(salaries))