var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".muneco");
var textArea=document.querySelector(".text-input");
var resultado= document.querySelector(".texto2");
var text1= document.querySelector(".text1");
var copy =  document.querySelector(".copiar");
var mensaje= document.querySelector(".mensaje")
botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick= desencriptar;
copy.onclick= btnCopiar;
function encriptar(){
  ocultarAdelante();
  resultado.textContent=encriptarTexto(recuperarTexto());
}
function encriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal ="";
  for(var i=0; i < texto.length ; i++){
    if(texto[i] == "a"){
       textoFinal= textoFinal+"ai";
    }
    else if(texto[i] == "e"){
      textoFinal= textoFinal+"enter";
    }
    else if(texto[i] == "i"){
    textoFinal= textoFinal+"imet";
    }
    else if(texto[i] == "o"){
      textoFinal= textoFinal+"ober";
    }
    else if(texto[i] == "u"){
      textoFinal= textoFinal+"ufat";
    }
    else {textoFinal= textoFinal+ texto[i];}
  }
  return textoFinal;

}
function desencriptar(){
  ocultarAdelante();
  resultado.textContent=desencriptarTexto(recuperarTexto());
}
function desencriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal ="";
  for(var i=0; i < texto.length ; i++){
    if(texto[i]== "a"){
       textoFinal= textoFinal+"a";
       i=i+1;
    }
    else if(texto[i] == "e"){
      textoFinal= textoFinal+"e";
      i= i+4;
    }
    else if(texto[i] == "i"){
    textoFinal= textoFinal+"i";
     i=i+3;
    }
    else if(texto[i] == "o"){
      textoFinal= textoFinal+"o";
      i= i+3;
    }
    else if(texto[i] == "u"){
      textoFinal= textoFinal+"u";
      i= i+3
    }
    else {textoFinal= textoFinal+ texto[i];}
   }
      return textoFinal;

}

function recuperarTexto(){
  return textArea.value;

}
function ocultarAdelante(){
  munieco.classList.add("ocultar");
  text1.classList.add("ocultar")
  copy.classList.add("desocultar")
  mensaje.classList.add("desocultar")

}
function btnCopiar() {
  navigator.clipboard.writeText(resultado.textContent);
  resultado.textContent = "";
  
  /*copy.style.display = "none";*/
  alert("Texto copiado en Clipboard")
}