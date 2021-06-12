const cipher = {
  encode: function (offsetChave, caixaTextoValor) {
    let resultado = "";

    for (let i = 0; i < caixaTextoValor.length; i++) {
      console.log(i)

      let codigoASC = caixaTextoValor.charCodeAt(i);

      if (codigoASC >= 65 && codigoASC <= 90) {
        codigoASC = ((codigoASC - 65 + offsetChave) % 26) + 65
        resultado += String.fromCharCode(codigoASC)
        console.log(resultado)
      }
    }
    return resultado;
  },

    decode: function (offsetChave, caixaTextoValor) {
      let resultado = "";

      for (let i = 0; i < caixaTextoValor.length; i++) {
        console.log(i)

        let codigoASC = caixaTextoValor.charCodeAt(i);

        if (codigoASC >= 65 && codigoASC <= 90) {
          codigoASC = ((codigoASC - 90 - offsetChave) % 26) + 90
          resultado += String.fromCharCode(codigoASC)
          console.log(resultado)
        }
      }
      return resultado;
    }
  };

export default cipher;