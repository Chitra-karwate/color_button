const box = document.getElementById("box");

const green_button=document.getElementById("green");
green_button.onclick=function(){
    box.style.backgroundColor="green";
}

const blue_button = document.getElementById("blue");
blue_button.onclick = function(){
    box.style.backgroundColor="blue";
}

const yellow_button = document.getElementById("yellow");
yellow_button.onclick = function(){
    box.style.backgroundColor="yellow";
}

const red_button = document.getElementById("red");
red_button.onclick = function(){
    box.style.backgroundColor="red";
}

const p=document.getElementById("p");
const text= document.getElementById("Click");
text.onclick = function(){
    p.style.color="blue";
    p.innerHTML="I am Pune Campuse Student!"
}

