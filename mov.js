var mots=document.querySelectorAll(".corazon");
const s=150;
var c=0;
console.log(c);
mots.forEach(function(producto){
    c=c+s;
    producto.style.marginLeft=`${c}px`
});