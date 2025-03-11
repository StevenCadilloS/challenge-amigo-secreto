// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo==""){
        alert('Por favor, inserte un nombre');
    }
    else{
        listaAmigos.push(nombreAmigo);
        actualizarListaAmigos();
    }
    document.getElementById('amigo').value="";
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';
    
    for(let i=0; i<listaAmigos.length; i++){
        let amigo=listaAmigos[i];
        let elementoLista=document.createElement('li');
        elementoLista.textContent=amigo;
        lista.appendChild(elementoLista);
    }
}

function sortearAmigo(){
    if(listaAmigos.length==0){
        alert('No hay amigos para sortear');
    }
    else{
        let indice = Math.floor(Math.random()*listaAmigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML=listaAmigos[indice];
    }
}