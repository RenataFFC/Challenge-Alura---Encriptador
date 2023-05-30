let textInput = document.querySelector("#input-texto")
let outInput = document.querySelector("#output");


function criptografar(){
let texto = textInput.value;
let resultCripto = texto.replace(/e/g, "ima").replace(/i/g, "oll").replace(/a/g, "sia").replace(/o/g, "mol").replace(/u/g, "tip")
   document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
     let texto = textInput.value;
   let resultDescripto = texto.replace(/ima/g, "e").replace(/oll/g, "i").replace(/sia/g, "a").replace(/mol/g, "o").replace(/tip/g, "u");  

 document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}
function copiar() {
    let textoCop = document.getElementById('input-texto');  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  

