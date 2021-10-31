let pregunta;
let respuestas;
let aleatorio;
let respuestasok;
let preguntaok=[];
let numpreg;
let npreg =[];
let respuestas_correctas;
let respuestasCorrectasOk;

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
    const seleccionDelInput = document.querySelectorAll('div');
        console.log(seleccionDelInput);
        seleccionDelInput.forEach((y)=>{
            y.firstChild.required =true; 
        })
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

    for (let k = 0, m = 0; k < 20; k++) {
        //Se utiliza el forEach para no convertir el NodeList a un array.
         document.querySelectorAll(`.g${npreg.indexOf(k)+1}`).forEach((x)=>{
            x.innerText=respuestasok[m];
            m++;
            }
        );
    }
    console.log('4 pintar respuestas');
}

export const marcar_rc = async()=>{
    respuestas_correctas = respuestas.map(x=>x[2]);
    console.log(respuestas_correctas);
    respuestasCorrectasOk = respuestas_correctas.map((x)=>{
        x=='0' ? x='no': x='rc';
        return x;
    });
    console.log(respuestasCorrectasOk);
    for (let i = 0, n = 0; i < 20; i++) {
        //Se utiliza el forEach para no convertir el NodeList a un array.
         document.querySelectorAll(`.g${npreg.indexOf(i)+1}`).forEach((x)=>{
            x.setAttribute('value', respuestasCorrectasOk[n]);
            n++;
            }
        );
    
    }
    console.log('5 marcar rc');
}