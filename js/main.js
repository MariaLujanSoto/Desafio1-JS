alert("Bienvenido a la calculadora de condicion academica")
let alumno = prompt("ingrese el nombre del alumno: ")
let nota1 = parseInt (prompt("ingrese la primer nota: "));
let nota2 = parseInt (prompt("ingrese la segunda nota: "));
let nota3 = parseInt (prompt("ingrese la tercera nota: "));
let nota4 = parseInt (prompt("ingrese la cuarta nota: "));

let listaNotas = [nota1, nota2, nota3, nota4]

let sumatoria = 0

for (let i = 0; i < 4 ; i++){
    sumatoria += listaNotas[i]
}

let promedioNotas = sumatoria/4

if (promedioNotas >= 8){
    alert("el alumno: "+alumno+" tiene la condicion de PROMOCIONADO")
}else if (promedioNotas >= 6){
    alert("el alumno: "+alumno+" tiene la condicion de REGULAR")

}else{
    alert("el alumno: "+alumno+" tiene la condicion de LIBRE")

}
