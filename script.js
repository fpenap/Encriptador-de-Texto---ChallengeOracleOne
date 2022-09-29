
var btnEncriptar=document.getElementById("btn-encriptar").addEventListener("click", encriptar);
var btnDesencriptar=document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
var btnCopy=document.getElementById("btn-copy").addEventListener("click",copy);

function encriptar(){
    var palabra = document.getElementById("input-texto").value.toLowerCase() ;   
    var palabraCodificada = palabra.replace (/e/g,'hfi').replace(/i/g,'ace').replace(/a/g,'eti').replace(/o/g,'call').replace(/u/g,'tu');
    document.getElementById("input-resultado").value=palabraCodificada  
}

function desencriptar(){
    var palabraEncriptada = document.getElementById("input-texto").value.toLowerCase();
    var palabraDecodificada = palabraEncriptada.replace (/hfi/g,'e').replace(/ace/g,'i').replace(/eti/g,'a').replace(/call/g,'o').replace(/tu/g,'u');
    document.getElementById("input-resultado").value= palabraDecodificada
}

function copy(){

    var resultado = document.getElementById("input-resultado").select();
    document.execCommand('copy');
    alert("copiado");
}

