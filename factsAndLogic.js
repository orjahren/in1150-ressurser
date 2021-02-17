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
/*

TODO

const paskeUke = 13
if(ukeNaa == paskeUke) {
  offset++
}
*/

const ukeMaal = Number(ukeNaa-offset)
let target = concatUrl(urlArr, ukeMaal)

console.log("\"Venter\"")

//bruk litt tid så det virker som at programmet faktisk gjør noe(lol)
for(let i = 0; i < 1000000000; i++) {
    
}

console.log("VIDERESNEDER")
location.replace(target)
