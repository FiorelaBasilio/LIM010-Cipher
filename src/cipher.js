
window.cipher = {
  encode: (number, letras) => {
    
    /*Acá va tu código que cifra*/
    let cifrar="";

    for (let i = 0; i < letras.length; i++){

        if(parseInt(letras[i]) % i === 0)

        letras=prompt("Por favor ingrese un numero");

        let ubicar = (letras.toUpperCase().charCodeAt(i) - 65 + number) % 26 + 65;

        let cifrado=String.fromCharCode(ubicar);
        cifrar += cifrado;
    }
    return cifrar;
  },

  decode: (offset, string) => {
    /*Acá va tu código que descifra*/

  }
};

