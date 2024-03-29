"use strict";
let concatUrl = (urlArr, ukeArg) => {
  return urlArr[0] + ukeArg + urlArr[1];
};

//https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
 function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
}

const urlArr = ["https://www.uio.no/studier/emner/matnat/ifi/IN1150/v21/innleveringer/Innleveringsoppgave_", "_IN1150.pdf"];
const ukeNaa = getWeekNumber(new Date());
let offset = 2

//Påskeferie-edge-case
const paskeUke = 13
if(ukeNaa >= paskeUke) {
  offset += 2;
}


let ukeMaal = ukeNaa-offset;

//helg
let d = new Date();
if(d.getDay() == 0 || d.getDay() == 6) {
  ukeMaal++; 
}else if(d.getDay() == 5) {
  if(d.getHours() > 16) { //antar ny oblig er ute innen kl 17
      ukeMaal++;
  }
}

let target = concatUrl(urlArr, ukeMaal);



const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");

canvas.width = 440;
canvas.height = 20;

let s = canvas.height;

let i = 0
const margin = 5;

let faktor = canvas.width / s;

let tegnProgress = () => {
    ctx.fillStyle = 'rgb(' + (i*faktor)  + ', '+ (i*faktor)  + ',' + i*faktor + ')';
    
    console.log((i*faktor) )
    ctx.fillRect(i * faktor, 0, s, s);


    if(faktor * i > canvas.width) {
        document.body.style.backgroundColor = "black"
        document.getElementsByTagName("h1")[0].style.color = "white"
        
        clearInterval(t)
        location.replace(target)
    }
    i++
}

let t = setInterval(tegnProgress, 20);
