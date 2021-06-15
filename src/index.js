import cipher from './cipher.js';

function encrypt() {
  let texto = document.getElementById("inputCaixaTexto").value;
  let chave = Number(document.getElementById("chaveOffset").value);
  document.getElementById("code").value = cipher.encode(chave, texto);
}

function decrypt() {
  let texto = document.getElementById("inputCaixaTexto").value;
  let chave = Number(document.getElementById("chaveOffset").value);
  document.getElementById("code").value = cipher.decode(chave, texto);
}

let btnEncrypt = document.getElementById("encrypt");
btnEncrypt.addEventListener("click", encrypt);

let btnDecrypt = document.getElementById("decrypt");
btnDecrypt.addEventListener("click", decrypt);