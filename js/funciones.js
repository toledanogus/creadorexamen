let pregunta;
let respuestas;
let aleatorio;
let respuestasok;
let preguntaok=[];

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
    
}

export const pintar =() => {
    let npreg =[];
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
    
}

export const traer_respuestas = async(url2, datos)=>{
    const resp2 = await fetch(url2, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    respuestas = await resp2.json();
    respuestasok = respuestas.map(x=>x[0])
    console.log(respuestasok);
    
}

export const pintar_respuestas = () => {
    const label = document.querySelectorAll('.g1');
    for (let k = 0; k < 4; k++) {
       label[k].innerText=respuestasok[k];
    }
}