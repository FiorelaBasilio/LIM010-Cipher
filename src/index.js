/* Acá va tu código */
const clave = document.getElementById("capturarContraseña");
let mensaje = document.getElementById("incorrecto");
let contar = 0;
const final = 3;


clave.addEventListener("click",function(){
 const nombre= document.getElementById("contraseña").value;

    if(nombre === "LABORATORIA"){
        document.getElementById("Bienvenida").style.display="none";
        document.getElementById("formulario").style.display="block";
    
        alertify.alert("Contraseña Correcta")
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
            
        }   
    }
else{
    mensaje.innerHTML="Ingrese Contraseña"; contraseña.focus();
}
});

const cifra = document.getElementById("cifrando");
cifra.addEventListener('click',() => {

    let number = document.getElementById('letras').value;
    let letras = document.getElementById('number').value;
    let result = document.getElementById('result');
    debugger;
    let respuestas=cipher.encode(number, letras);
    result.innerHTML=(respuestas);
})

  