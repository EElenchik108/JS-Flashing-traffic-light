"use strict";

let red=document.getElementById("red");
let yellow=document.getElementById("yellow");
let green=document.getElementById("green");

let setColor = () => {	
    red.style.backgroundColor ='#FF0000';
    yellow.style.backgroundColor ='#868383';
    green.style.backgroundColor ='#868383';
}		

let setColor1 = () => {
    yellow.style.backgroundColor ='#FDF35B';
    red.style.backgroundColor ='#868383';			
    green.style.backgroundColor ='#868383';
}		

let setColor2 = () => {
    green.style.backgroundColor ='#2DB81B';
    yellow.style.backgroundColor ='#868383';
    red.style.backgroundColor ='#868383';
}

let setColor3 = () => {
    green.style.backgroundColor ='#FDF35B';
    yellow.style.backgroundColor ='#FDF35B';
    red.style.backgroundColor ='#FDF35B';			
}
let setColor4 = () => {
        green.style.backgroundColor ='#868383';
        yellow.style.backgroundColor ='#868383';
        red.style.backgroundColor ='#868383';			
}

let today = new Date();
console.log(today.getHours());

// Работает с задержкой в 18 секунд при первом запуске функции

/* let intervalId = setInterval(()=>{

if (today.getHours()>=5&&today.getHours()<21) {
    let timer = setInterval(setColor,0);		

    let timer1=setTimeout(() => { 			
        clearInterval(timer);
        setColor1()}, 5000);

    let timer2=setTimeout(() => { 			
        clearInterval(timer1);
        setColor2()}, 8000);

    let timer5=setTimeout(() => { 			
        clearInterval(timer2);
        setColor4()}, 13000);

    let timer6=setTimeout(() => { 			
        clearInterval(timer5);
        setColor2()}, 13500);

    let timer7=setTimeout(() => { 			
        clearInterval(timer6);
        setColor4()}, 14000);

    let timer8=setTimeout(() => { 			
        clearInterval(timer7);
        setColor2()}, 14500);

    let timer9=setTimeout(() => { 			
        clearInterval(timer8);
        setColor1()}, 15000);
}
else {
        let intervalId1 = setInterval(()=>{
                let timer3 = setInterval(setColor3,0);
                let timer4=setTimeout(() => { 			
                        clearInterval(timer3);
                        setColor4()}, 500);
        }, 1000);}
}, 18000);*/


/* Работает сразу без задержки */

if (today.getHours()>=5&&today.getHours()<21) {
    let timer = setInterval(setColor,0);		

    let timer1=setTimeout(() => { 			
        clearInterval(timer);
        setColor1()}, 5000);

    let timer2=setTimeout(() => { 			
        clearInterval(timer1);
        setColor2()}, 8000);

    let timer5=setTimeout(() => { 			
        clearInterval(timer2);
        setColor4()}, 13000);

    let timer6=setTimeout(() => { 			
        clearInterval(timer5);
        setColor2()}, 13500);

    let timer7=setTimeout(() => { 			
        clearInterval(timer6);
        setColor4()}, 14000);

    let timer8=setTimeout(() => { 			
        clearInterval(timer7);
        setColor2()}, 14500);

    let timer9=setTimeout(() => { 			
        clearInterval(timer8);
        setColor1()}, 15000);

    let intervalId = setInterval(()=>{

        timer = setInterval(setColor,0);		

        timer1=setTimeout(() => { 			
            clearInterval(timer);
            setColor1()}, 5000);

        timer2=setTimeout(() => { 			
            clearInterval(timer1);
            setColor2()}, 8000);

        timer5=setTimeout(() => { 			
            clearInterval(timer2);
            setColor4()}, 13000);

        timer6=setTimeout(() => { 			
            clearInterval(timer5);
            setColor2()}, 13500);

        timer7=setTimeout(() => { 			
            clearInterval(timer6);
            setColor4()}, 14000);

        timer8=setTimeout(() => { 			
            clearInterval(timer7);
            setColor2()}, 14500);

        timer9=setTimeout(() => { 			
            clearInterval(timer8);
            setColor1()}, 15000);
    }, 18000);
}

if (today.getHours()<5&&today.getHours()>=0||today.getHours()<=23&&today.getHours()>=21) {
    let intervalId1 = setInterval(()=>{
        let timer3 = setInterval(setColor3,0);
        let timer4=setTimeout(() => { 			
            clearInterval(timer3);
            setColor4()}, 500);
    }, 1000);
}


