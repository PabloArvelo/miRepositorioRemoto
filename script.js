let slide = ["imgs/T.E_Banner.png", "imgs/BB1200.png", "imgs/EBW808Hero.png", "imgs/TenorUke.png"];
let currentImageIndex = 0;

let botonSig = document.getElementById("sig");
let botonAnt = document.getElementById("ant");



botonAnt.addEventListener("click", function () {
    if (currentImageIndex == 0) {
        currentImageIndex = 3;
    }
    else {
        currentImageIndex--
    }
    let imgShow = document.getElementById("imgS");
    imgShow.src=slide[currentImageIndex];

});


botonSig.addEventListener("click", function () {
    if (currentImageIndex == 3) {
        currentImageIndex=0;
    }
    else {
        currentImageIndex++;
    };

    let imgShow = document.getElementById("imgS");
    imgShow.src=slide[currentImageIndex];
});

let botonMod = document.getElementById("modBut");
let sliView=document.getElementById("sliCont");
let galView=document.getElementById("galCont");


// acá hace que cuando abre la página no se muestre el slide
// y se muestro la galería
sliCont.style="display:none";
galCont.style="display:flex";


botonMod.addEventListener("click",function(){
    

    if(botonMod.innerText=="Ver vista deslizador de imágenes"){
        sliCont.style="display:flex";
        galCont.style="display:none";

        botonMod.innerText="Ver vista galería de imágenes";
    }else {
        sliCont.style="display:none";
        galCont.style="display:flex";
        
        botonMod.innerText="Ver vista deslizador de imágenes";        
    }
})

