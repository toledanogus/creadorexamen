import { marcar_rc, pintar, pintar_respuestas, traer_datos, traer_respuestas } from "./js/funciones.js";

const url = 'php/traer.php';
const url2= 'php/traer_respuestas.php'
//const tema = prompt();

let datosJson = new Object();
    datosJson["tema"]= 'matematicas';

/* traer_datos(url, datosJson)
    .then(()=>{
        traer_respuestas(url2, datosJson).then(()=>{
            pintar().then(()=>{
                pintar_respuestas().then(()=>{
                    marcar_rc();
                });
            })
        })
    }) */
//Para encadenar las promesas, no lleva llaves después de la flecha
traer_datos(url, datosJson)
    .then(()=>traer_respuestas(url2, datosJson))
    .then(()=>pintar())
    .then(()=>pintar_respuestas())
    .then(()=>marcar_rc())
    