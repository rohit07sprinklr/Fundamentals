// function unique(arr) {
//     let arrSet = new Set(arr)
//     return Array.from(arrSet)
//   }
  
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
  
// alert( unique(values) );


function aclean(arr){
    let wordMap = {}
    arr.forEach((word)=>{
        let sortedWord = word.toLowerCase().split('').sort().join('')
        wordMap[sortedWord] = word;
    })
    console.log(wordMap)
    return Array.from(Object.values(wordMap))
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); 

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readStatus = new WeakSet();
messages.forEach((message)=>{
    readStatus.set(message,true)
})


