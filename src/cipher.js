
window.cipher = {
  encode: (offset, string) => {  //Es independiente desligar responzabilidades

    /*Acá va tu código que cifra*/
    let cifrar="";
    let ubicar=0;

    for (let i = 0; i < string.length; i++){    //El for recorre las letras al texto

      if(string.charCodeAt(i) === 32) //Con el Codigo ASSCI para dar espacios 
      {
        ubicar = string.charCodeAt(i);
      }
      else{
          ubicar=(string.toUpperCase().charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }

      let cifrado = String.fromCharCode(ubicar);

      cifrar += cifrado; //acumular letras
    }
    return cifrar;
  },
  
  decode: (offset, string) =>{ 
    /*Acá va tu código que descifra*/
    let descifrado ="";
    let ubicacionD = 0;
    
    for (let j = 0; j < string.length; j++){    //El for recorre las letras al texto

      if(string.charCodeAt(j) === 32) // Con el Codigo ASSCI para dar espacios
      {
        ubicacionD = string.charCodeAt(j);
      }
      else{
          ubicacionD=(string.toUpperCase().charCodeAt(j) + 65 - parseInt(offset)) % 26 + 65;
      }

      let palabraDescifrada = String.fromCharCode(ubicacionD);

      descifrado += palabraDescifrada; //acumular letras

    }
  
   return descifrado;
  }
};

