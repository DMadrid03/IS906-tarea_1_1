//Ejercicio 3 

function repetirNombre(nombre:String, n:number): String[]{
    let arreglo :String[] = [];
    for(let i = 0; i<n; i++){
        arreglo.push(nombre);
    }
    return arreglo;
}

console.log(repetirNombre("Daniel", 5));
console.log(repetirNombre("Pedro", 1));
console.log(repetirNombre("Daniel", 0));