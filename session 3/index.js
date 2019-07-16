// // // // // // Array
let menu = ["com","canh","tom","rau","ca"];

// // // // // // // 1.Read
// // // // // // //index -> 0-1-2-3-4-...

// // // // // // //1.1 Read one (lay ra 1 phan tu)
// // // // // // console.log(menu[4])
// // // // // // console.log(menu.length)
// // // // // // // lay phan tu cuoi cung
// // // // // // console.log(menu[menu.leghth - 1])

// // // // // // //1.2 Read all
for(let i = 0; i < menu.length;i++){
    console.log(menu[i]);
// // // // // // }

// // // // // // 2.create
// // // // // let newFood = "thit";
// // // // // menu.push(newFood);
// // // // // console.log(menu);


// // // // 3.Update
// //update by index
// // // menu[1] = "Dau";
// // // console.log(menu)
// // them khi biet gia tri can update, chua biet vi tri (update by value)
// let indexOfFood = menu.indexOf("rau");
// menu[indexOfFood] = "Dau";



// // // 4.Delete
// // let indexFood = menu.indexOf("Tom");
// // menu.splice(indexFood, 1);
// // console.log(menu);


// // menu.splice(2,1);
// // console.log(menu);

// //them bang lenh xoa
// // menu.splice(1,0,"Thit");
// // console.log(menu);

