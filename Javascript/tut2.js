// document.body.childNodes[1].innerText="DOM demo";
// console.log(document.body)
// console.dir(document.log)

//DOM Manipulation

//Accessing elements 
// let heading=document.getElementById("heading");
// console.log(heading);
// console.dir(heading);
// let headingClass=document.getElementsByClassName("heading-class");
// console.log(headingClass)
// let headingTag=document.getElementsByTagName("h1")
// console.log(headingTag)


//using innerText
let h2=document.getElementById("heading4") 
h2.innerText=h2.innerText+" by Apna College";

//using innerHTML 
let box=document.getElementsByClassName("box")
box[0].innerHTML="<p>Anti-Hero Duet </p>"
box[1].innerHTML="<p>Limits</p>"
box[2].innerHTML="<p>A Court of Silver Flames</p>"
