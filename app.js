let btn = document.querySelector('button');


let box = document.querySelector('.box');
let h2 = document.querySelector('h2');
// console.dir(box);
btn.addEventListener("click",function(){
    // console.log("button clicked!!");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    h2.innerText = `rgb(${r},${g},${b})`;
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
})