// function work(a, b) {
//     alert( a + b ); // work is an arbitrary function or method
//   }
  
// function spy(func){
//     function wrapper(){
//         wrapper.calls.push([...arguments])
//         return func.apply(this, arguments)
//     }
//     wrapper.calls = []
//     return wrapper
// }


// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
// alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


// function f(x) {
//     alert(x);
// }

// function delay(func, delay){
//     function wrapper(){
//         setTimeout(()=>{
//             func.apply(this, arguments)
//         },delay)
//     }
//     return wrapper
// }
// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 2000);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms

// function debounce(func, delay){
    
//      function wrapper(){
//     clearTimeout(wrapper.timeout)
//        wrapper.timeout = setTimeout(()=>{
//             func.apply(this, arguments)
//         }, delay)
//      }
//     return wrapper
// }

// function f(a){alert(a)}
// f = debounce(f, 1000)
// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);



// function f(a) {
//     console.log(a);
//   }

// function throttle(func, delay){
//     function wrapper(){
//         if(wrapper.queue.length === 0){
//             wrapper.queue.push(func)
//             wrapper.queue[0].apply(this,arguments)
//             wrapper.queue.pop();
//         }
//         else{
//             setTimeout(()=>{
//                 wrapper.queue.push(func)
//             },delay)
//         }
        
//     }
//     wrapper.queue = []
//     return wrapper
// }

// // f1000 passes calls to f at maximum once per 1000 ms
// let f1000 = throttle(f, 1000);

// f1000(1); // shows 1
// f1000(2); // (throttling, 1000ms not out yet)
// f1000(3); 

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }
  
// let user = {
//     name: 'John',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))


function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user.login.bind(user,true), user.login.bind(user,false))