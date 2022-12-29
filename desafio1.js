//E-commerce de entrenamiento "MP-Training"

alert ("Bienvenido a MP-Training")
alert("En compras superiores a los $10000 tenes $1000 de descuento y en cuotas sin interés")
alert("Realizamos envíos GRATIS a todo el PAIS!!!")

//Funciones

function carritoTotalDeCompras (producto1=0, producto2=0, producto3=0){
    return producto1 + producto2 + producto3
}

function descuentoTotalDeCompras(producto1=0, producto2=0){
    return producto1 - producto2
}

//Variables

let producto1 = Number(prompt("Primer producto"))
console.log (producto1)
let producto2 = Number(prompt("Segundo producto"))
console.log (producto2)
let producto3 = Number(prompt("Tercer producto"))
console.log (producto3)

let productosFinales = carritoTotalDeCompras(producto1,producto2,producto3)
alert(productosFinales)
// let descuentosFinales = descuentoTotalDeCompras (producto1,producto2)
// alert(descuentosFinales)

//Condicionales

if(productosFinales >= 10000){
   alert("Recibiste $1000 de descuento")
} 
if (productosFinales <=9000){
    alert("No recibiste el descuento")
}

//Datos del usuario para envíos

alert("A continuación debe ingresar sus datos para el envío")

let formasDePago = prompt("Ingresa tu forma de pago \n 1 pago con transferencia o debito \n2 pago con tarjeta")
let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let provincia = prompt ("Ingrese provincia")
let ciudad = prompt ("Ingrese ciudad")
let domicilio = prompt ("Ingrese su domicilio")

alert("Muchas gracias por su compra, vuelva pronto!!!")

