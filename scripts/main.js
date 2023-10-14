const myheading= document.querySelector("h1");
myheading.textContent="Hello World";

const myPara= document.querySelector("#para1");
myPara.textContent="My hobbies are as follows";


const myImg= document.querySelector("img");

myImg.onclick=()=>{
    const imgsrc=myImg.getAttribute("src");
    if(imgsrc==="images/mustang1.jpg"){
        myImg.setAttribute("src","images/mustang2.webp");
    }else{
        myImg.setAttribute("src","images/mustang1.jpg");
    }
}

const myButtton= document.querySelector("button");


function setupName(){
    const myName=prompt("Type your name here");
    if(!myName){
        setupName();
    }
    
    localStorage.setItem("name",myName);
    myheading.textContent=`Hello, this is ${myName}`;
}

if(!localStorage.getItem("name")){
    setupName();
}else{
    const localName= localStorage.getItem("name");
    myheading.textContent=`Hello, this is ${localName}`;
}

myButtton.onclick=()=>{
    setupName();
}