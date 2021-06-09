const cipher = { 
  encode: function (offset, string){
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","W","Y","Z"]
    const inputOriginal = document.getElementById('inputCaixaTexto')
    const cifrador = document.getElementById('caixaDeTexto')
    let resultado = document.getElementById('resultado')
    const chave = document.getElementById('chaveOffset')

    alfabeto.map(letra => {
      console.log(`A letra: ${letra} tem o código: ${letra.charCodeAt(0)}`)
    })

    cifrador.addEventListener("submit", function(e){
      e.preventDefault()
      //console.log(inputOriginal.value)
      resultado.innerHTML = inputOriginal.value
      resultado = [...inputOriginal.value]
    })
  }
};


/*

A  B  C  D  E  F  G  H  I  J  K  L  M
0  1  2  3  4  5  6  7  8  9  10 11 12

N  O  P  Q  R  S  T  U  V  X  W  X  Y  Z 
13 14 15 16 17 18 19 20 21 22 23 24 25 26 

*/

export default cipher;
