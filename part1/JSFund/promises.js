// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);

// function delay(ms) {
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve(),ms)
//     })
// }

// delay(3000).then(() => alert('runs after 3 seconds'));


// async function loadJson(url) {
//     const response = await fetch(url)
//     if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
      
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
    
async function loadJson(url) {
    const response =  fetch(url)
    if (response.status == 200) {
        return response.json();
    } 
    throw new HttpError(response);

}
    
    // Ask for a user name until github returns a valid user
async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    try{
        const user = await loadJson(`https://api.github.com/users/${name}`)
        alert(`Full name: ${user.name}.`);
        return user;
    }
    catch(err){
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            await demoGithubUser();
        } else {
            throw err;
        }
    }
}
    
    demoGithubUser();