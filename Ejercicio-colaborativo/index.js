/*Ejercicio
vamos a pedir al usuario que ingrese la cantidad alumnos a los cuales les asignará una nota, luego de que ingrese la catidad de notas de cada alumnos, se va a desplegar un menú.
las opciones del menú serán la siguentes:
1.- mostrar el promedio de notas
2.- mostrar si la nota es aprobatoria o reprobatoria
3.- mostrar si la nota está por sobre o por debajo del promedio del curso

*/

/*
¿Qué es lo que tenemos que hacer?
1.- definir array *
2.- pedir la cantidad de alumnos *
3.- solicitar las notas de cada alumnos y guardarlas en un array *
4.- saber cual es la nota aprobatoria * 
5.- validar la cantidad de notas sea la correcta (limites de notas)* y definir notas válidas*
6.- hacer una funcion por cada opcion del menú 
7.- crear el menú 
8.- definir cuando termina el menú 
9.- definir el promedio del curso
*/
//definimos nuestro array
const notas = [];
//definimos la nota aprobatoria
const notaAprobatoria = 4.0;

//le pedimos la cantidad de alumnos al usuario
let cantAlumnos = parseInt(prompt("Ingrese numero de Alumnos: "));

//vamos a pedir una nota por cada alumno
for (let i = 1; i <= cantAlumnos; i++) {
  //definimos la variable en donde guardaremos la nota
  let notaAlumno = 0;
  //se declara un do...while para verificar que el valor de la nota está entre 1 y 7 y es correcto
  do {
    notaAlumno = parseFloat(prompt("Ingrese nota de Alumno " + i + ": "));
  } while (notaAlumno > 7 || notaAlumno < 1);
  //Se ingresa la nota en nuestro arreglo predefinido
  notas.push(notaAlumno);
}
/*Funciones del menú */

//declaramos una funcion para la primera opción del menú
//se declara con el nombre de promedioNotas y se le entrega un parametro el cual será reemplazado cuando la función sea llamada
function promedioNotas(arregloNotas) {
  //declaramos una variables acumuladora llamda suma, la cual estará encarga de guardar la suma total de todas las notas en nuestro arreglo
  let suma = 0;
  //para recorrer nuestro arreglo ocupamos la funcion for la cual parte en 0 hasta la cantidad de elementos que tenga el arreglo (.length)
  for (let i = 0; i < arregloNotas.length; i++) {
    //vamos a sumar todas las notas entre si para obtener la suma total
    //ejemplo de como funciona una variable acumulativa
    //dado el arreglo [4.2 , 5.3 , 1.3]
    /* 0 = 0 + 4.2
      4.2= 4.2 + 5.3
      9.5 = 9.5 + 1.3
      suma finalmente quedaría como 10.8*/
    suma = suma + arregloNotas[i];
  }
  //retornamos el promedio el cual consiste en la suma de todas las notas dividido por la cantidad de notas que tenía el arreglo
  return suma / arregloNotas.length;
}

//vamos a crear una funcion la cual nos muestre si la nota est aprobatoria o reprobatoria
function aprobado(notaAprobatoria, arregloNotas) {
  //recorremos todas las notas una por una
  for (let i = 0; i < arregloNotas.length; i++) {
    //revisamos si es una nota con la que aprueba o reprueba 
    if (arregloNotas[i] >= notaAprobatoria) {
      //se le muestra al usuario la respuesta según sea el caso
      console.log("la nota del alumno " + (i + 1) + " fue de: " + arregloNotas[i] + ", por lo que aprueba");
    } else {
      console.log("la nota del alumno " + (i + 1) + " fue de: " + arregloNotas[i] + ", por lo que reprueba");
    }
  }
}

//funcion que nos va a decir si la nota está por debajo o por sobre el promedio
function sobrePromedio(arregloNotas, promedioNotas) {
  //recorremos todas las notas una por una
  for (let i = 0; i < arregloNotas.length; i++) {
    //verificamos si está por sobre o por debajo del promedio
    if (arregloNotas[i] > promedioNotas) {
      //se le dice al usuario si la nota del alumno está por sobre o por debajo del promedio según sea el caso
      console.log("La nota del alumno " + (i + 1) + " fue de: " + arregloNotas[i] + ", la cual está por sobre el promedio del curso, que fue de: " + promedioNotas);
    } else if (arregloNotas[i] == promedioNotas) {
      console.log("La nota del alumno " + (i + 1) + " fue de: " + arregloNotas[i] + ", la cual es igual al promedio del curso, que fue de: " + promedioNotas);
    } else {
      console.log("La nota del alumno " + (i + 1) + " fue de: " + arregloNotas[i] + ", la cual está por debajo el promedio del curso, que fue de: " + promedioNotas);
    }
  }
}

/** *********************** */
console.log("**************Comienzo de Menú***************");
//definimos la variable que va a guardar la opcion del usuario
let opcion = 1;
//definimos un while el cual estará encargado de dar término al menú si el usuario ingresa 0
while (opcion != 0) {
  //creamos un do...while para verificar que la opcion que ingrese le usuario sea válida (osea que esté entre 0 y 3 inclusive)
  do {
    //dibujamos el menú
    console.log("**************Comienzo de Menú***************");
    console.log("Bienvenido/a");
    console.log("Seleccione 1 si quiere obtener el promedio de las notas.");
    console.log("Seleccione 2 si quiere ver si la nota es aprobatoria o reprobatoria");
    console.log("Seleccione 3 para ver si la nota está sobre o por debajo del promedio");
    console.log("Seleccione 0 para salir del menú");
    //pedimos que el usuario ingrese la opción
    opcion = parseInt(prompt("Ingrese opción: "));
    //cerramos do...while
  } while (opcion < 0 || opcion > 3);
  //revisamos que opcion ingresó el usuario y según eso mostramos la funcion correspondiente
  if (opcion == 1) {
    console.log("El promedio de notas fue: " + promedioNotas(notas));
  } else if (opcion == 2) {
    aprobado(notaAprobatoria, notas);
  } else if (opcion == 3) {
    let promedio = promedioNotas(notas);
    sobrePromedio(notas, promedio);
  } else {
    console.log("Hasta luego :D");
  }
}



