var motsa=document.querySelectorAll(".corazon");
const gifb=document.querySelector("#gif");
const audios=document.getElementById("audioc");
const plays=document.querySelector("#play");
const divimagen=document.getElementById("midiv");
var cambf=0;
function actualizar(){
    var i=0;
    motsa.forEach(function(producto){
        i=i+1;
        producto.style.transitionDuration = "0s";
        if(i==1||i==3 ||i==8){
            producto.style.bottom="-400px"
        }
        if(i==2||i==5){
            producto.style.bottom="-1000px"
        }
        if(i==4||i==7){
            producto.style.bottom="-800px"
        }
        if(i==8){
            producto.style.bottom="-2000px"
        }
        console.log(cambf);
        if(cambf==2 ||cambf==4 ||cambf==6){
            let suma=cambf/2;
            divimagen.style.backgroundImage = `url('img/${suma}.jpeg')`;
            gifb.style.width= "300px";
            gifb.style.top= "200px";
        }else{
            divimagen.style.backgroundImage = 'none';
            gifb.style.width= "500px";
            gifb.style.top= "20px";
        }
        if(cambf==7){
            cambf=1;
        }
        });
}
function mover(){
    cambf=cambf+1;
motsa.forEach(function(producto){
    producto.style.transitionDuration = "5s";
    producto.style.bottom="800px"
    setTimeout(actualizar,4000);
});
}
function chumuelo(){
    gifb.style.width= "500px";
}
function quitar(){
    plays.style.opacity-=1; 
}
plays.addEventListener('click',function(){
    if(k==2){
    quitar();
    setInterval(mover, 4100);
    chumuelo();
    audios.play();
    audios.volume -= 0.8;
    }
});