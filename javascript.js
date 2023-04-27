var nombreClase;
var cajaMId;
var bgcolorcaja;
var nom
var fchildDiv;
var inptpor;
const botonMov=document.getElementById('botonMov')
const Maincaja=document.querySelector('.caja')
botonMov.addEventListener('click',()=>{
    moverCaja(cajaMId,bgcolorcaja);
    porcentajes();
});

const moverCaja=(caja,colorcaja)=>{
    if(window.getComputedStyle(caja).getPropertyValue('width')=="5px"){
        caja.style.width=`${document.querySelector('.itpor').value}%`;
        caja.firstElementChild.style.color='white';
    }
    else{
        caja.style.width='5px';
        caja.style.backgroundColor=colorcaja;
        caja.firstElementChild.style.color=colorcaja;
    }
    
}
function metClick(e){
    nombreClase=e.className;
    CmNomBoton(nombreClase);
    cajaMId=document.querySelector(`.${nombreClase}`);
    bgcolorcaja=window.getComputedStyle(cajaMId).getPropertyValue('background-color');
}

function CmNomBoton(nomClase){
    botonMov.textContent=`mover : ${nomClase}`;
}

function porcentajes(){
    fchildDiv=cajaMId.firstElementChild;
    fchildDiv.textContent=`${document.querySelector('.itpor').value}%`;
}

