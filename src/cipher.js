
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

      else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90) {

        ubicar=(string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }

      else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122){

        ubicar=(string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }

      /*else{
          
        ubicar=(string.toUpperCase().charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
    
      }*/

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

      else if(string.charCodeAt(j) >= 65 && string.charCodeAt(j) <=90) {
 
        ubicacionD= 90 - ((90 - string.charCodeAt(j) + parseInt(offset)) % 26);
      }

      else if(string.charCodeAt(j) >= 97 && string.charCodeAt(j) <=122){

        ubicacionD= 122 -((122 - string.charCodeAt(j)+parseInt(offset) % 26));
      }

      /*else{
          ubicacionD=(string.toUpperCase().charCodeAt(j) + 65 - parseInt(offset)) % 26 + 65;
      }*/

      let palabraDescifrada = String.fromCharCode(ubicacionD);

      descifrado += palabraDescifrada; //acumular letras

    }
  
   return descifrado;
  }
};

