let sizeOfSheep = [ 5,7,300,90,24,50,75]
console.log(" Hello, my name is Duong and these are my sheep sizes : " +sizeOfSheep);

// 4.2:
let max= sizeOfSheep[0];
for ( let i=0; i< sizeOfSheep.length;i++)
{
    if (sizeOfSheep[i]> max )
    {
        max = sizeOfSheep[i];
    }
}
console.log("We got " + sizeOfSheep+ "." + " So, my biggest size of sheep is : "+ max);
// 4.3: biggest size into 8
let indexOfSize = sizeOfSheep.indexOf(max);
sizeOfSheep[indexOfSize] = 8;
console.log("Now, we got " + sizeOfSheep);
// 4.4: Time after time, your sheep is bigger by time :
let time = Number(prompt(" how many month next do u want to see mine sheep ? "));
for ( let i=1;i <= time ; i++)
{
sizeOfSheep.forEach ((size,index ) =>  {
sizeOfSheep[index] += 50 ;
})
console.log( "Now , After " + i + " month, my sheep is like this " +sizeOfSheep);
let max= sizeOfSheep[0];
for ( let i=0; i< sizeOfSheep.length;i++)
{
    if (sizeOfSheep[i]> max )
    {
        max = sizeOfSheep[i];
    }
}
let indexOfSize = sizeOfSheep.indexOf(max);
sizeOfSheep[indexOfSize] = 8;
console.log("Now, we got " + sizeOfSheep);
}


