/* Función del loader */
/*window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(()=>{
        hideLoader();
    },2000);
})*/


/* Funcion de ingreso a la página principal */
const knowMe = document.getElementById("btn-conoceme")
knowMe.addEventListener("click", function() {
    showLoader();
    document.getElementById("loader-page").style.display="none";
    setTimeout(()=>{
        hideLoader();
    },1500);
    }
)
const loader = document.getElementById("loader");
const showLoader = () => {
    loader.classList.add("show_loader")
}
const hideLoader = () => {
    loader.classList.remove("show_loader");
}

/* Funcion cambio de tema black */
const themeBlack = document.getElementById("toggle-label")
themeBlack.addEventListener("click", function() {
    transicionStar();
    setTimeout(()=>{
        transicionStarOff();
    },1000);
    }
)

/* Funcion cambio de tema white */
const themeWhite = document.getElementById("toggle-label")
themeWhite.addEventListener("click", function() {
    transicionMoon();
    setTimeout(()=>{
        transicionMoonOff();
    },1000);
    }
)

/* Función para alternar el cambio de tema black en la pantalla inicial */
function transicionStar () {
    if (document.getElementById('circle-moon').classList.contains("circle-star")){
        document.getElementById('loader-page').classList.replace("loader-page", "loader-page-black");
        document.getElementById('circle-moon').classList.replace("circle-star", "circle-star-off");
        document.getElementById('moon').classList.replace("star", "star-off");
        document.getElementById('plane').classList.replace("plane", "hide-plane");
        document.getElementById('rocket').classList.replace("rocket", "show-rocket");
        document.getElementById('toggle-theme').style.background=("white");
        document.getElementById('btn-conoceme').classList.replace("btn-ingreso", "btn-ingreso-black")
    }
}
function transicionStarOff () {
    if(document.getElementById('circle-moon').classList.contains("circle-star-off")){
        document.getElementById('circle-moon').classList.replace("circle-star-off","circle-moon");
        document.getElementById('moon').classList.replace("star-off", "moon");
    }
}
/* Función para alternar el cambio de tema white en la pantalla inicial */
function transicionMoon () {
    if(document.getElementById('circle-moon').classList.contains("circle-moon")){
        document.getElementById('loader-page').classList.replace("loader-page-black", "loader-page");
        document.getElementById('circle-moon').classList.replace("circle-moon","circle-moon-off");
        document.getElementById('moon').classList.replace("moon", "moon-off");
        document.getElementById('plane').classList.replace("hide-plane", "plane");
        document.getElementById('rocket').classList.replace("show-rocket", "rocket");
        document.getElementById('toggle-theme').style.background=("black");
        document.getElementById('btn-conoceme').classList.replace("btn-ingreso-black", "btn-ingreso")
    }
}
function transicionMoonOff () {
    if(document.getElementById('circle-moon').classList.contains("circle-moon-off")){
        document.getElementById('circle-moon').classList.replace("circle-moon-off","circle-star");
        document.getElementById('moon').classList.replace("moon-off", "star");
    }
}

/* Función para volver al inicio de la pagina*/
const backBoton = document.getElementById("back-boton");
backBoton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

/* Funcion de aparición del boton para volver al inicio de la pagina*/
window.addEventListener('scroll', function(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            setTimeout(function(){
            document.getElementById('back-boton').style.opacity=1;},10);
    }else {
        setTimeout(function(){
            document.getElementById('back-boton').style.opacity=0;},10);
    }
})
