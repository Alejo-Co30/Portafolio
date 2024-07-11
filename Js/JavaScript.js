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