// function camelize(str){
//     let res = "";
//     let itr=0
//     while(itr<str.length){
//         if(str[itr]==='-' && itr+1<str.length){
//             res+=str[itr+1].toUpperCase()
//             itr+=1
//         }
//         else{
//             res+=str[itr];
//         }
//         itr+=1;
//     }
//     return res;
// }
function camelize(str){
    return str.split('-').map((itm,i)=>{
        return i==0?itm: itm[0].toUpperCase()+itm.slice(1)
    }).join('')
}
alert(camelize("-webkit-transition"))