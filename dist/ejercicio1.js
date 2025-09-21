"use strict";
//*Ejercicio 1
Object.defineProperty(exports, "__esModule", { value: true });
var EstadoProducto;
(function (EstadoProducto) {
    EstadoProducto[EstadoProducto["Disponible"] = 1] = "Disponible";
    EstadoProducto[EstadoProducto["Agotado"] = 2] = "Agotado";
    EstadoProducto[EstadoProducto["Descontinuado"] = 3] = "Descontinuado";
})(EstadoProducto || (EstadoProducto = {}));
function mostrarDetallesProducto(producto) {
    console.log("**********Mostrando producto******************");
    console.log(`Nombre:      ${producto.nombre}`);
    console.log(`Precio:      ${producto.precio}`);
    console.log(`Estado:      ${producto.estado}`);
    if (!producto.descripcion === undefined)
        console.log(`Descripción: ${producto.descripcion}`);
}
const p1 = {
    id: 1153,
    nombre: "Leche entera",
    precio: 23.50,
    estado: EstadoProducto.Disponible,
    descripcion: "Leche entera Sula 1L en bolsa"
};
const p2 = {
    id: "L-513",
    nombre: "Detergente líuqido Zix",
    precio: 45.00,
    estado: EstadoProducto.Agotado
};
mostrarDetallesProducto(p1);
mostrarDetallesProducto(p2);
//# sourceMappingURL=ejercicio1.js.map