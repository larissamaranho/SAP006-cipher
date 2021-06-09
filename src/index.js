import cipher from './cipher.js'
window.addEventListener("load", function () {

    cipher.encode();
})

let caixaTexto = document.getElementById("inputCaixaTexto");
caixaTexto.addEventListener("keypress", event => {
let caixaTextoValor = caixaTexto.value
console.log(caixaTextoValor);
})

let offset = document.getElementById("chaveOffset");
offset.addEventListener("click", event => {
let offsetChave = offset.value
console.log(offsetChave);
})

let caixaResultado = document.getElementById("code");
caixaResultado.addEventListener("keypress" , event => {
let caixaTexotoResultado = caixaResultado.value
console.log(caixaTexotoResultado);
})

let buttonEncrypty = document.getElementById("encrypt");
buttonEncrypty.addEventListener("click", event => {
let codificarBotao = buttonEncrypty.value
console.log(codificarBotao);
})

let buttonDecrypt = document.getElementById("decrypt");
buttonDecrypt.addEventListener("click", event => {
let descodificarBotao = buttonDecrypt.value
console.log(descodificarBotao);
})