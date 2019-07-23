// let sheep = [5 , 7, 300 , 90 , 24, 50, 75];
// // 4.1
// const o = prompt(" Your name is???");
//     alert(`Hello my name is ${o} and there are my sheep sizes ${sheep}`)
// // 4.2
// const p = prompt("Choose the biggest sheep to shear it Y/N?").toLocaleLowerCase();
// let max = sheep[5];
// if (p === "y"){
//     for(let k = 0; k < sheep.length;k++){
//     if (sheep[k] > max){
//     max = sheep[k];
//     console.log(sheep[k])
//     alert(`Now my biggest sheep has sizes ${max} let's shear it`);
// // 4.3
//     let indexOfsheep = sheep.indexOf(max); 
//     sheep[indexOfsheep] = 8;
//     alert(`After shearing here is my flock ${sheep}`)
//     }
// }
// // 4.4
//     for(let u = 0; u < sheep.length;u++){
//         sheep[u] = sheep[u]+50;
//     }
//     alert(`One month has passed, now here is my flock ${sheep}`)
// // 4.5
//     alert(" Want to see more?")
//     for(let v = 0; v < sheep.length;v++){
//         sheep[v] = sheep[v]+50;
//     }
//     for(let f = 0; f < sheep.length;f++){
//         if (sheep[f] > max){
//         max = sheep[f];
//         console.log(sheep[f])
//         let indexOfsheep = sheep.indexOf(max); 
//         sheep[indexOfsheep] = 8;
//         alert(`
//             Now my biggest sheep has sizes ${max} let's shear it
//             After shearing here is my flock ${sheep}`)
//     }
// }
    
//     let sheepcost=0;
//     for (let i=0;i<sheep.length;i++)
//     {
//         sheepcost=sheepcost+sheep[i];
//     }
//     console.log(`My flock has size in total ${sheepcost}`)
//     sheepcost=sheepcost*2;
//     console.log (`I would get ${sheepcost} $ `);
//     }
// else{
//     alert("Nothing to see here!!!!");
// }