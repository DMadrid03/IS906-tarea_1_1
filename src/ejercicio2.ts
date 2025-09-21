interface Usuario{
    nombre: string;
    edad: number;
    email?: string;
}

const user: Usuario = {
    nombre: "Ana",
    edad: 28
}
const user2: Usuario={
    nombre: "Daniel Sánchez",
    edad: 22,
    email: "daniel123@unah.hn"
}
function imprimirUsuario(usuario: Usuario){
    console.log("**********Mostrando usuario******************")
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad:   ${usuario.edad}`);
    if(usuario.email != undefined)
        console.log(`Email:  ${usuario.email}`);
}

imprimirUsuario(user);
imprimirUsuario(user2);