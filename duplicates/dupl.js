// let arr=[1,2,2,4,4,5,3];
// let unqarr=[];

// for(let i=0; i<arr.length; i++){
//     let isFound=false;

//     for(let j=0; j<unqarr.length ;j++){
//         if(arr[i]===unqarr[j]){
//             isFound=true;
//         break;
//     }
// }
// if(!isFound){
//     unqarr[unqarr.length]=arr[i]
// }}
// unqarr.sort((a, b) => a - b);
//  console.log(unqarr)



//  let arr=[1,2,2,4,4,5,3];
//  let unqarr=[...new Set(arr)];


let arr = ["bannanna", "mango", "mango", "jamun", "kala", "mango"];
let unqarr=[];

for(let i=0; i<arr.length; i++){
    let isFound=false;

    for(let j=0;j<unqarr.length;j++){
       if(arr[i]===unqarr[j]){
       isFound=true;
        break
   }
    }
    if(!isFound){
    unqarr[unqarr.length]=arr[i]
    }
}

console.log(unqarr)