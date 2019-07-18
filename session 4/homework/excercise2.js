let prices = {
    banana: 4,
    apple: 2,
    orange: 1.5,
    pear: 3,
}
let stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15,
}
let total = 0;
let food = Object.keys(prices);
food.forEach((number,index) => {
    let y = (`${prices[number]}`*`${stock[number]}`)
    total += y 
    console.log
        (`${number}
        prices:${prices[number]}
        stock:${stock[number]}
        Total cost: ${y}`)
});
console.log(`total:${total}`)
