let button1=document.querySelector(".btn1");
let button2=document.querySelector(".btn2");
let paragraph=document.querySelector(".result")
count=0;
button1.addEventListener("click", ()=>{
    count++;
paragraph.textContent=count+1;
button1.style.backgroundColor='green';
button1.style.padding='20px';


})
button2.addEventListener("click", ()=>{
    count--;
paragraph.textContent=count-1;
button2.style.backgroundColor='red';
button2.style.padding='20px';
})
