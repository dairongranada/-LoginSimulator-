
// INPUT TEXT DEL REGISTRO USUARIO
const inputRegisterNameUsuario = document.getElementById('inputRegisterNameUsuario');
// BOTON DE REGISTRO
const buttonRegister = document.getElementById('buttonRegister');
// CONTADOR DE LOS CARACTERES
const numCaracteres = document.getElementById('NumCaracteres');
// CONTENEDOR DEL MENSAJE CARACTER ESPECIAL
const messageCharacter = document.getElementById('messageCharacter');

//  INPUT PASSWORD DEL REGISTRO USUARIO
const contraseñaRegistro = document.getElementById('Password');
const contraseñaRegistroConfirm = document.getElementById('PasswordConfirm');


//   E  V  E  N  T  O   S
inputRegisterNameUsuario.addEventListener("keyup", validateTypes);
contraseñaRegistro.addEventListener('keyup',verificationPasswordOne);
contraseñaRegistroConfirm.addEventListener('keyup',verificationPassword);
// buttonRegister.addEventListener('click',saveData);


function validateTypes(event) {
    const regex = /^[a-zA-Z\s 1-9]*$/;     // expresion regular para validar caracteres especiales
    if (regex.test(event.target.value)){
        messageCharacter.textContent =  " ";
        messageCharacter.style.backgroundColor = "transparent";
        messageCharacter.style.boxShadow = "none";
        inputRegisterNameUsuario.style.borderBottom = "1px solid #00FF0B";
        inputRegisterNameUsuario.style.borderBottom = "1px solid #00FF0B";

        //  CONTADOR DE LOS CARACTERES
        let cantidad = inputRegisterNameUsuario.value.length;
        if (cantidad <=3) {
            let valor = 3;
            numCaracteres.textContent =  "Caracteres necesarios:"+(valor - cantidad);
            //ICONOS
            mostrarTrueIcon1.style.visibility = 'hidden';
            mostrarbadIcon1.style.visibility = 'visible';
            inputRegisterNameUsuario.style.borderBottom = "1px solid #FF0000";
        }else if (cantidad >=3) {
            numCaracteres.textContent = " ";
            //ICONOS
            mostrarTrueIcon1.style.visibility = 'visible';
            mostrarbadIcon1.style.visibility = 'hidden';
            inputRegisterNameUsuario.style.borderBottom = "1px solid #00FF0B";

        }
        
    }else{
        messageCharacter.textContent =  "Haz introducido un caracter invalido";
        messageCharacter.style.backgroundColor = "#626567";
        messageCharacter.style.color = "#fff";
        inputRegisterNameUsuario.style.borderBottom = "1px solid #FF0000";
        numCaracteres.textContent = " "; // Aca se Borra El contador para que no interfiera con la alerta

        //ICONOS
        mostrarbadIcon1.style.visibility = 'visible';
        mostrarTrueIcon1.style.visibility = 'hidden';
    }
}
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

function verificationPasswordOne(eventPass) {
    if (contraseñaRegistro.value.length >=4 ) {
        Password.style.borderBottom = "1px solid #00FF0B";
        mostrarTrueIcon2.style.visibility = 'visible';
        console.log(eventPass.preventDefault())

    }else {
        Password.style.borderBottom = "1px solid #fff";
        mostrarTrueIcon2.style.visibility = 'hidden';
    }
}


function verificationPassword(eventPass) {
    if (contraseñaRegistro.value == contraseñaRegistroConfirm.value ) {

        Password.style.borderBottom = "1px solid #00FF0B";
        PasswordConfirm.style.borderBottom = '1px solid #00FF0B';

        //ICONOS
        mostrarTrueIcon2.style.visibility = 'visible';
        mostrarTrueIcon3.style.visibility = 'visible';
        mostrarbadIcon2.style.visibility = 'hidden';
        mostrarbadIcon3.style.visibility = 'hidden';


    }else if (contraseñaRegistro.value != contraseñaRegistroConfirm.value ) {
        PasswordConfirm.style.borderBottom = '1px solid #FF0000';

        //ICONOS
        mostrarbadIcon3.style.visibility = 'visible';
        mostrarTrueIcon3.style.visibility = 'hidden';
    }
}





/*
const inputLoginNameUsuario = document.getElementById('inputLoginNameUsuario');
inputLoginNameUsuario.addEventListener('keyup', userValidation )


/// A R R A Y
let arrayUserName = {};
let arrayPassword = {};

function saveData(eventData) {

}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                          INPUT TEXT DEL LOGIN USUARIO




