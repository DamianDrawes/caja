const tapa=document.querySelector("#top");
const caja=document.querySelector("#bot");
var k=0;
function bajarcaja(){
    caja.style.transitionDuration = "3s";
    caja.style.bottom="-500px"
    k=k+1;
}
function tapamover(){
    var gradosRotacion = 180;
    tapa.style.top="-500px"
    tapa.style.transform = 'rotate(' + gradosRotacion + 'deg)';
    k=k+1;
}
tapa.addEventListener('click',function(){
    tapamover();
});
caja.addEventListener('click',function(){
    bajarcaja();
});