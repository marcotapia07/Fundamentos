//Tomando de ejemplo base la pagina de Steam, podemos observar que se utilizan funciones, fundamentos de JS 
//para construir el sitio web, en este caso realizaremos ejemplos de eso y como funcionan para crear funcionalidad
//en la pagina. 


// Utiliza la variable "var" para crear variables y asignarles valores como almacenar 
// referencias a elementos DOM. Un ejemplo de estas son: 
// var $Header = $J('#store_header');   -  

//Declaracion de variables var
var titulojuego = "GTA VI";
var precio = "80.0";
var plataforma = "PS5"
var fechaLan = "12-01-2025"

// Al declarar variables utilizando let y const, el sitio web de Steam busca generar interactividad y dinamismo a sus paginas web. 
// Ejemplos donde podriamos encontrar el uso de estas variables serian: 
//      LET
//          let loggedInUser = getUser(); // Declaración de una variable para almacenar al usuario conectado
//          let gameTitle = "Counter-Strike: Global Offensive"; // Declaración de una variable para almacenar el título de un juego
//      CONST
//          const API_KEY = "1234567890"; // Declaración de una constante para almacenar una clave de API
//          const MAX_PLAYERS = 64; // Declaración de una constante para definir el número máximo de jugadores en un juego


//Declaracion de variables con let
let logeo = false;
let saldo = 100.00;

//Declaracion de variables con const 
const nombrePlataforma = "Steam";
const descuentoMaxi = 92;

//Funcion 
function comprarJuego() {
    if (logeo){
        if(saldo >= precio){
            saldo -= precio;
            console.log("Compro el juego" + titulojuego + "por" + precio);
        } else{
            console.log("Dinero insuficiente para comprar el juego" + titulojuego);

        }
    }else{
        console.log("Inicia sesion para comprar juegos")
    }
}

function informacionJuego(){
    console.log("Titulo: " + titulojuego);
    console.log("Plataforma: " + plataforma);
    console.log("Precio: " + precio);
    console.log("Fecha de lanzamiento: " + fechaLan);
}

console.log("Bienvenido a " + nombrePlataforma);

if(!logeo){
    console.log("Inicie sesion para acceder a todos las funciones del sistema");

}

informacionJuego();


if (logeo){
    comprarJuego();
}
    