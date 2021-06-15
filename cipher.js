const cipher = {
  encode: function (offsetChave, caixaTextoValor) {
    if (typeof offsetChave !== "number" || typeof caixaTextoValor !== "string"){
      throw new TypeError
    }

    let resultado = "";

    for (let i = 0; i < caixaTextoValor.length; i++) {

      let codigoASC = caixaTextoValor.charCodeAt(i);

      if (codigoASC >= 65 && codigoASC <= 90) {
        codigoASC = ((codigoASC - 65 + offsetChave) % 26) + 65
        resultado += String.fromCharCode(codigoASC)
      }
    }
    return resultado;
  },

    decode: function (offsetChave, caixaTextoValor) {
      if (typeof offsetChave !== "number" || typeof caixaTextoValor !== "string"){
        throw new TypeError
      }
      
      let resultado = "";

      for (let i = 0; i < caixaTextoValor.length; i++) {

        let codigoASC = caixaTextoValor.charCodeAt(i);

        if (codigoASC >= 65 && codigoASC <= 90) {
          codigoASC = ((codigoASC - 90 - offsetChave) % 26) + 90
          resultado += String.fromCharCode(codigoASC)
        }
      }
      return resultado;
    }
  };

export default cipher;