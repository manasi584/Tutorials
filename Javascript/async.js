
//Synchronous-each line executed serially 

//Asynchronous
//Using callbacks 
//this is a callback hell kind of programming -> not a good method 
// let store={
//     fruits:["apple","grapes","pineapple","banana"],
//     holder:["cone","cup","stick"],
//     toppings:["chocolate","sprinkles"]
// }
// let order=(fruitCode,call_production)=>{
//     setTimeout(()=>{
//         console.log(`Order placed for ${store.fruits[fruitCode]}, next step is production`);
//         call_production();//production cannot start without an order being placed thus using callback 
//     },2000)  
// }
// let production=()=>{
//     setTimeout(()=>{
//         console.log("Order recieved , Ice cream production started");
//         setTimeout(()=>{
//             console.log("Fruit chopped");
//             setTimeout(()=>{
//                 console.log("Water and ice added");
//                 setTimeout(()=>{
//                     console.log("Machine started");
//                     setTimeout(()=>{
//                         console.log(`${store.holder[2]} selected as holder`)
//                         setTimeout(()=>{
//                             console.log(`${store.toppings[0]} selected as toppings`);
//                             setTimeout(()=>{
//                                 console.log("Order served");
//                             },2000);
//                         },3000);
//                     },2000);
//                 },1000);
//             },1000);
//         },2000);
//     }); 
// }
// order(2,production);

//Using Promises
// let store={
//         fruits:["apple","grapes","pineapple","banana"],
//         holder:["cone","cup","stick"],
//         toppings:["chocolate","sprinkles"]
//     }

// let isShopOpen=true;

// let order=(time,work)=>{
//     return new Promise( (resolve,reject)=>{ 
//     if(isShopOpen) {
//         setTimeout(()=>{
//             resolve(work());
//         },time);
//     }
//     else reject(console.log("Shop is closed!"));
//     } )
// }

// order(2000,()=>{console.log(`Order placed for ${store.fruits[1]} ice cream`)})
// .then(()=>{

//     return order(0,()=>{
//        console.log("Production started");
//     });
// })
// .then(()=>{

//     return order(2000,()=>{console.log("Fruit chopped")});
// })
// .then(()=>{

//     return order(1000,()=>{console.log("Add water and ice")});
// })
// .then(()=>{

//     return order(1000,()=>{console.log("Machine started")});
// })
// .then(()=>{

//     return order(2000,()=>{console.log(`${store.holder[1]} selected as holder`)});
// })
// .then(()=>{

//     return order(3000,()=>{console.log(`${store.toppings[0]} selected as toppings`)});
// })
// .then(()=>{

//     return order(2000,()=>{console.log("Order served !")});
// })
// .catch(()=>{ //works when promise os rejected i.e when isShopOpen is false
//     console.log("Order not served !");
// })
// .finally(()=>{ //runs irrespective of whether promises are resolved or rejected 
//     console.log("Day ended , all orders resolved!")
// })

//Using async await


// let SelectToppings = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve(console.log("Choose topping.")); }, 500);
//     });
// };

// async function kitchen() {
//     //A,B,C,D,E are tasks in the kitchen which have to be done sequentially 
//     //Doing task D resquires topping choice --> thus using await
//     console.log("A");
//     console.log("B");
//     console.log("C");

//     await SelectToppings();
//     console.log("D");
//     console.log("E");
// }

// kitchen();
// //These tasks happen irrespective of what is happening in the kitchen 
// console.log("Taking other orders");
// console.log("Serving other orders");
// console.log("Clearing tables");

let store = {
    fruits: ["apple", "grapes", "pineapple", "banana"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "sprinkles"]
}

let isShopOpen = false;


function time(ms){
return new Promise((resolve,reject)=>{
    if(isShopOpen){
        setTimeout(resolve,ms);
    }
    else {
        reject(console.log("Shop is closed!"));
    }
});
}



async function kitchen(){
    try{
        await time(2000);
       console.log("Order placed");

       await time(0);
       console.log("Start production!")
       await time(2000);
       console.log("Fruit chopped")
       await time(1000);
       console.log("Add cream and ice")
       await time(1000);
       console.log("start machine")
       await time(2000);
       console.log(`holder selected: ${store.holder[0]}`);
       await time(3000);
       console.log(`topping selected: ${store.toppings[0]}`);
       await time(2000);
       console.log("Serve the order!");
       
    }
    catch(error){
        console.log("Customer left");
    }
    finally{
        console.log("Day ended,all orders resolved!");

    }
}
kitchen();




/*
1.Place order-2 secs
1.a Production-0 secs 
2.Cut fruit-2 secs
3.add cream and ice - 1 sec
4.start machine - 1 sec
5.select holder - 2 secs 
6.select toppings- 3sec
7.serve ice cream-2 secs
*/

