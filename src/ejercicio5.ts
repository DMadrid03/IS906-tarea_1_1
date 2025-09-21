//?Ejercicio 5

enum DiaSemana{
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

function esFinDeSemana(dia: DiaSemana): boolean{
    switch(dia){
        case DiaSemana.Sabado :
            return true;
        case  DiaSemana.Domingo:
            return true;
        default:
            return false;
    }
}

console.log("Lunes " + esFinDeSemana(DiaSemana.Lunes));
console.log("Martes " + esFinDeSemana(DiaSemana.Martes));
console.log("Miercoles " + esFinDeSemana(DiaSemana.Miercoles));
console.log("Jueves " + esFinDeSemana(DiaSemana.Jueves));
console.log("Viernes " + esFinDeSemana(DiaSemana.Viernes));
console.log("Sabado " + esFinDeSemana(DiaSemana.Sabado));
console.log("Domingo " + esFinDeSemana(DiaSemana.Domingo));