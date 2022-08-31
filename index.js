
alert ("Bienvenidx. Completá la información solicitada para ver cuando deberas volver a suscribirse a nuestro servicio")

let nombre = prompt("Ingresá tu Nombre y Apellido")
const SEPARADOR = " "
let anio_actual = parseInt(prompt("Ingresá el año actual"))
let anio_suscripcion = parseInt(prompt("Ingresá el año en que te suscribiste"))
let anios_actualizacion = parseInt(anio_actual - anio_suscripcion)

if (anios_actualizacion <= 2) {
    alert (`${nombre}, aun no venció tu documentación. Pasaron ${anios_actualizacion} años desde que te suscribiste, podés seguir utilizando nuestro servicio`)
} else {
    alert (`${nombre}, tu documentación esta vencida. Pasaron ${anios_actualizacion} años desde que te suscribiste.`)
    let seleccionUsuario = parseInt(prompt ("1. Para mas información \n 2. Para salir"))
    switch (seleccionUsuario) {
        case 1:
            alert ("Escribinos un mail a info@suscripcion.com.ar")
            console.log(nombre + SEPARADOR + typeof anio_actual + SEPARADOR + anio_actual + SEPARADOR + typeof + SEPARADOR + typeof anios_actualizacion)

        case 2: 
        console.log(nombre + SEPARADOR + typeof anio_actual + SEPRRADOR + anio_actual + SEPARADOR + typeof + SEPARADOR + typeof anios_actualizacion)
    }}
