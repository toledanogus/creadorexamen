import { pintar, pintar_respuestas, traer_datos, traer_respuestas } from "./js/funciones.js";

const url = 'php/traer.php';
const url2= 'php/traer_respuestas.php'
//const tema = prompt();

let datosJson = new Object();
    datosJson["tema"]= 'matematicas';

traer_datos(url, datosJson).then(()=>{
    traer_respuestas(url2, datosJson).then(()=>{
        pintar();
        pintar_respuestas();
    })
    
})

    
