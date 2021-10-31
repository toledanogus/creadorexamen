let pregunta;
let respuestas;
let aleatorio;
let respuestasok;
let preguntaok=[];
let numpreg;
let npreg =[];

export const traer_datos = async(url1, datos)=>{
    const resp = await fetch(url1, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    pregunta = await resp.json();
    for (let i = 0; i < pregunta.length; i++) {
        preguntaok.push(pregunta[i][0]);     
    }
    console.log(preguntaok);
    console.log('1:traer datos')
    
}

export const pintar =async () => {
    
    while (npreg.length<5) {
        aleatorio = Math.floor(Math.random() * 5);
        npreg.indexOf(aleatorio) === -1 && npreg.push(aleatorio);
        }
    
        
    for (let i = 0; i < 5; i++) {
        const crearp = document.createElement('p');
        const nuevotexto = document.createTextNode(`${i+1}. ${preguntaok[npreg[i]]}`);
        crearp.appendChild(nuevotexto);
        const creardiv= document.createElement('div');
        crearp.appendChild(creardiv);
        let nu= i+1;
        let clase = 'g'+nu;
            

        for (let j = 0; j < 4; j++) {
            const crearradio =document.createElement('input');
            const crearlabel=document.createElement('label');
            const crearbr =document.createElement('br');
            crearlabel.setAttribute('for', nu);
            crearlabel.setAttribute('class', clase);
            crearradio.setAttribute('type', 'radio');
            crearradio.setAttribute('name', nu);
            creardiv.append(crearradio);
            crearradio.parentNode.insertBefore(crearlabel, crearradio.nextSibling);
            crearlabel.parentNode.insertBefore(crearbr, crearlabel.nextSibling);           
        }
        nu++;
        
        const body = document.querySelector('body');
        body.appendChild(crearp);        
    }
    console.log(npreg);
    console.log('2:pintar');
}

export const traer_respuestas = async(url2)=>{
    const resp2 = await fetch(url2, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    respuestas = await resp2.json();
    respuestasok = respuestas.map(x=>x[0]);
    numpreg = respuestas.map(x=>x[1]);
    console.log(respuestasok);
    console.log(numpreg);
    console.log('3:traer respuestas');
    
}

export const pintar_respuestas = async() => {
    console.log(respuestasok);
    console.log(npreg);
    for (let k = 0; k < 4; k++) {
        //Se utiliza el forEach para no convertir el NodeList a un array.
        document.querySelectorAll(`.g${npreg.indexOf(k)+1}`).forEach((x)=>{
            x.innerText=respuestasok[k];
            k++;
        }
        );
    console.log('4 pintar respuestas');
}
}