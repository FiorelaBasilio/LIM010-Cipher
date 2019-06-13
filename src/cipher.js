
window.cipher = {
  encode: (offset, string) => {  //Es independiente desligar responzabilidades

    /*Acá va tu código que cifra*/
    let cifrar="";
    let ubicar=0;

    for (let i = 0; i < string.length; i++){    //El for recorre las letras al texto

     if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90) { //mayuscula ASSCI

        ubicar=(string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }

      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122){ //minuscula ASSCI

        ubicar=(string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }

      //PRUEBA CARACTERES
      else if(string.charCodeAt(i) >= 33 && string.charCodeAt(i) <=64){  

        ubicar=(string.charCodeAt(i) - 33 + parseInt(offset)) % 32 + 33;
      }
      else  
      {
        ubicar = string.charCodeAt(i);
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

      if(string.charCodeAt(j) >= 65 && string.charCodeAt(j) <=90) {
 
        ubicacionD= 90 - ((90 - string.charCodeAt(j) + parseInt(offset)) % 26);
      }

      else if(string.charCodeAt(j) >= 97 && string.charCodeAt(j) <=122){

        ubicacionD = 122-((122- string.charCodeAt(j)+parseInt(offset)) % 26);
      }

      //PRUEBA CARACTERES
      else 
      if(string.charCodeAt(j) >= 33 && string.charCodeAt(j) <=64){

        ubicacionD = 64-((64- string.charCodeAt(j)+parseInt(offset)) % 32);
      }

      else  
      {
        ubicacionD = string.charCodeAt(j);
      }

      let palabraDescifrada = String.fromCharCode(ubicacionD);

      descifrado += palabraDescifrada; //acumular letras

    }
  
   return descifrado;
  }
};

