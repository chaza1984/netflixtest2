

//que espere a que la pagina este cargada y luego ejecutar inicio

document.addEventListener('DOMContentLoaded', inicio);




function inicio() {

    registrarSW()
    }




function registrarSW(){
    //in devuelve tru si service esta dentro de navigator. Sirve para verificar si el navegador lo soporta.
    //2) Registrar dicho worker en el archivo JS principal
    
    if('serviceWorker' in navigator){
    
    navigator.serviceWorker.register('../serviceWorker.js') //ruta relativa donde esta el archivo js
    .then(registracion => {
    console.log("SW registrado correctamente", registracion)
    
    })
    .catch(error=>console.log(error));
    }
    }

