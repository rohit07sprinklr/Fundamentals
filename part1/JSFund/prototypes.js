// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     __proto__: head,
//     pen: 3
//   };
  
//   let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     __proto__: bed,
//     money: 2000
//   };

Function.prototype.defer = function(ms){
    setTimeout(this
    ,ms)
}
function f() {
    alert("Hello!");
}


f.defer(1000);

function f(a, b) {
    alert( a + b );
  }
Function.prototype.defer = function(ms){
    let fn = this;
    return function (){
        setTimeout(()=>fn.apply(this,arguments),ms)
    }
    // return wrapper
}
f.defer(1000)(1, 2); 