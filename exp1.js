//set internal
//1st process
let timer=0;
let stoptime=setInterval(function(){
    timer+=3;
    console.log("Loading..");
    if(timer>20){
        clearInterval(stoptime);
    }
},3000);
//2nd
console.log("Hai");