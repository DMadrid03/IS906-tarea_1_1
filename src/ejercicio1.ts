//*Ejercicio 1

enum EstadoProducto{
    Disponible = 1,
    Agotado = 2,
    Descontinuado = 3
}

//union type IDProducto que puede ser string o number
type IDProducto = string | number;

//interfaz Producto
interface Producto{
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion ?: string
}

function mostrarDetallesProducto (producto: Producto){
    console.log("**********Mostrando producto******************")
    console.log(`Nombre:      ${producto.nombre}`)
    console.log(`Precio:      ${producto.precio}`)
    console.log(`Estado:      ${producto.estado}`)
    if(producto.descripcion != undefined)
        console.log(`Descripción: ${producto.descripcion}`)
    console.log("**********************************************")
}


 const p1: Producto= {
    id: 1153,
    nombre: "Leche entera",
    precio: 23.50,
    estado: EstadoProducto.Disponible,
    descripcion: "Leche entera Sula 1L en bolsa"
 }

const p2: Producto= {
    id: "L-513",
    nombre: "Detergente líuqido Zix",
    precio: 45.00,
    estado: EstadoProducto.Agotado
 }

 mostrarDetallesProducto(p1);
 mostrarDetallesProducto(p2); 