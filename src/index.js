/* Acá va tu código */
const clave = document.getElementById("capturarContraseña");
let mensaje = document.getElementById("incorrecto");
let contraseña=document.getElementById("contraseña");

const Bienvenida=document.getElementById("Bienvenida");
const formulario=document.getElementById("formulario");
formulario.classList.add("hide");
let contar = 0;
const final = 3;

const elemento = document.getElementById("Bienvenida");
const pagdos = document.getElementById("formulario");
pagdos.classList.add("hide");

clave.addEventListener("click", () => {
 const nombre= document.getElementById("contraseña").value;

    if(nombre === "LABORATORIA"){
       
        elemento.classList.add("hide");
        pagdos.classList.remove("hide");
    
    }
    if(nombre !== "LABORATORIA"){
        contar++;

        contraseña.value="";

        if(contar < final){

            contraseña.focus();
            mensaje.innerHTML="Contraseña Incorrecta. Vuelva a Intentarlo";

        }
        else{
            mensaje.innerHTML="Ya utilizastes todos tus intentos";
            contraseña.disabled=true;
        }   
    }
else{
    mensaje.innerHTML="Ingrese Contraseña"; 
    contraseña.focus();
    
}
});

/*Cifrando*/
const cifra = document.getElementById("cifrando");
cifra.addEventListener('click',() => {

    let letras = document.getElementById('letras');
    let number = document.getElementById('number');
    let result = document.getElementById('result');
    //debugger Comprobar cuando vas ejecutando
    let respuestas=cipher.encode(number.value, letras.value);
    result.value=respuestas;
})

/*Descifrando*/
const descifra = document.getElementById("descifrando");
descifra.addEventListener('click',()=>{
    
    let letras = document.getElementById('letras');
    let number = document.getElementById('number');
    let result = document.getElementById('result');
    
    let respuest=cipher.decode(number.value, letras.value);
    result.value=respuest;
})

/*Limpiar*/
const limpia = document.getElementById("limpiar");
limpia.addEventListener("click",()=>{
    document.getElementById("number").value="";
    document.getElementById("letras").value="";
    document.getElementById("result").value="";

 
})

/*Salir*/

const casa = document.getElementById("salir");
casa.addEventListener("click", ()=>{

    
    Bienvenida.classList.remove("hide");
    formulario.classList.add("hide");
    number.value="";
    letras.value="";
    result.value="";
    contraseña.value="";
})
   
  