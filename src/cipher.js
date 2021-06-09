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

export default cipher;
