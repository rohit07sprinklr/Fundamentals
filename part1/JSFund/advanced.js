// function sumTo(n) {
//     if(n==1){
//         return 1;
//     }
//     return n + sumTo(n-1);
// }

// alert( sumTo(100) ); 

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// function printList(list){
//     if(!list.next){
//         return;
//     }
//     console.log(list.value)
//     printList(list.next)
// }
// function printListRev(list){
//     if(!list.next){
//         return;
//     }
//     printListRev(list.next)
//     console.log(list.value)
// }
// printListRev(list)

// function sum(a){
//     return function sum(b){
//         return a+b;
//     }
// }
// alert(sum(2)(3))

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a,b){
//     return function(x){
//         return x>=a && x<=b;
//     }
// }
// function inArray(arr){
//     return function(x){
//         return arr.includes(x)
//     }
// }

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(feild){
    return function(a,b){
        return a[feild]>b[feild]?1:-1;
    }
}


users.sort(byField('name'));
// users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(users)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
users.sort(byField('age'));
console.log(users)

function makeCounter() {
    // let counter;

    function counter() {
      return counter.count++;
    };

    counter.set = value => count = value
  
    counter.count = 0;
  
    return counter;
  }
  
let counter = makeCounter();

function sum(a){
  
}
sum(1)