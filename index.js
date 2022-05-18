// Tipos de datos

// variables

var miVariable = "freeCodecamp";

    console.log(miVariable);  

    miVariable=16;
    console.log(miVariable);

// asignacion a vartiable
var a;
var b = 2;
console.log(a); //undefined 
//console.log(b); //si tiene valor

a = 10;  
// = valor de asignancion 

console.log(a)

// asifgnar el valor d euna variable a otra

var a = 5;
var b;
b=a;

console.log(a);
console.log(b);

// Inicializar variables

var x = 9; 

var miIdioma =  "Español"
console.log(x);
console.log(miIdioma);

// variable no inicalizada

var a2;
console.log(a2);
a2 = 234;
console.log(a2);

// Mayusculas y Minusculas 
    // no son lo mismo javascript es sencible a esto

var miVariable2 = 5;
// console.log(MIVARIABLE2);// error 

console.log(miVariable2);

//Operaciones aritmeticas
    //suma
    var suma = 4 + 32; //numero positivo
    console.log(suma);

    // resta
    var resta = 20 - 12; //numero positivo
    console.log(resta);
    
    resta = 12 - 20;    //numero negativo
    console.log(resta);

    resta = 12 - 12;
    console.log(resta);


    var multiplicacion = 5 * 3;
    console.log(multiplicacion);

    multiplicacion = 9 * 0;
    console.log(multiplicacion);

    // Divison
    var division = 20 / 2;
    console.log(division);
    
    division = 30 / 30;
    console.log(division)
    
    // Numeros decimales 
    var miNumeroDecimal = 23.23;
    
    // multiplicacion decimales 

    var multiplicacionDecimales = 3.4 * 12.3;
    console.log(multiplicacionDecimales)

    multiplicacionDecimales= 6 * 8.9;
    console.log(multiplicacionDecimales);

    // divison numeros decimales 
    var divisionDecimales = 2.3 / 6.7;
    console.log(divisionDecimales)

    // Como obtener el porcentaje de una division
        
    var porcentajeDivision = 5 % 5;
    console.log(porcentajeDivision);

    // Incrementar el valor de una variable el javascript 

    var librosComprados = 105;
    console.log(librosComprados); // Inicialmente

        //opcion 1
        
        librosComprados = librosComprados + 1;
        console.log(librosComprados);

        //opccion 2
        librosComprados++; //es mas concisa, sirve para incrementar el valor en 1 
        console.log(librosComprados) 

    //Reducir el valor de una variable 
    var numeroEstudiantes = 256;
    console.log(numeroEstudiantes);

        numeroEstudiantes = numeroEstudiantes - 1;
        console.log(numeroEstudiantes);

        numeroEstudiantes--;
        console.log(numeroEstudiantes);

    // Asignacion de suma
    var a = 23;

    a += 5; // agrega cinco y lo suma al valor de "a"
    console.log(a);

        // ejemplo ventas
        var totalVentas = 12345.34;
        console.log(totalVentas);

        totalVentas += 345.67;

        console.log(totalVentas);


    //Asignacion de resta
    var b = 25;

    b -= 5;
    console.log(b);
        
        //ejemplo Deudas
        var totalDeuda = 2000;
        
        console.log(totalDeuda);

        totalDeuda-= 500;
        console.log(totalDeuda)

    // Asignacion de multiplicacion
    var c = 3;
    console.log(c)

    c *= 3;
    
    console.log(c)

        //ejemplo salario
         var salario = 4500;
        console.log(salario);

         salario *= 5;

         console.log(salario);

    //Asignacion de division 
     var d = 3000;
     console.log(d)

     d /= 10;
     console.log(d);

        //ejemplo saleario
        var salario = 45000;

        salario /= 2;
         
        console.log(salario);

// DEFINIR Cadenas de caracteres 

var nombre = 'Alan';
var apellido = 'Turing';

//ESCAPAR COMILLAS dentro de una cadena
var miCadena = "Soy una cadena de caracteres \"con comillas\"";
console.log(miCadena);

//Cadenas de Caracteres con Comillas Simples
var miMeta;
miMeta = "Aprender a programar con 'freeCodeCamp'";
console.log(miMeta);


    // Secuencias de Escape 

    //  Codigo | Resultado
    // --------------------
    //  \' Comilla Simple
    //  \" Comilla Doble
    //  \\ Barra invertida 
    //  \n Linea Nueva
    //  \r Retorno de Carro 
    //  \t Tabulaciom
    //  \b Retroceso
    //  \f Salto de pagina
    // ... 

    // Ejemplo
    console.log("Estoy aprendiendo \"JavaScript\"");
    console.log("Estoy aprendiendo \\JavaScript");
    console.log("Estoy aprendiendo: \nJavaScript");
    console.log("Estoy aprendiendo \n\tJavaScript");

//CONCATENAR CADENAS DE CARACTERES 
var nombreCompleto = "Alan" + " " + "Turing";
console.log(nombreCompleto);

//CONSTRUIR CADENAS CON VARIABLES
var verbo = "programar";

var mensaje = "Estoy aprendiendo a " + verbo + " con freeCodeCamp";
console.log(mensaje);

//AGREGAR VARIABLES A CADENAS DE CARACTERES
 var mensajeCompleto = "Estoy aprendiendo a programar "
 var parteFinal = "con freeCodeCamp";

 console.log(mensajeCompleto);

 mensajeCompleto += parteFinal;

 console.log(mensajeCompleto)

// LONGITUD DE CADENA DE CARACTERES

var miCadena;

miCadena = "Jose ";

console.log(miCadena.length);

//NOTACION DE CORCHETES: PRIMER CARACTER
var lenguajeProgramacion = "JaavaScript";

    // cadena:  J a v a S c r i p t
    // Indices: 0 1 2 3 4 5 6 7 8 9

    console.log(lenguajeProgramacion[0]);

//INMUTABILIDAD DE LAS CADENAS DE CARACTERES 
var miCadena = "Jola, Mundo "

console.log(miCadena);
 
// miCadena[0] = "H"; // error
// console.log(miCadena)

    //Solo se puede cambiar el valor completo de la cadena
miCadena = "Hola, Mundo";
console.log(miCadena);

//NOTACION DE CORCHETES: ENESIMO CARACTERES 
var miCadena = "MongoDB"

    // cadena:  M o n g o D B
    // Indices: 0 1 2 3 4 5 6 
  console.log(miCadena[0]);
  console.log(miCadena[1]);
  console.log(miCadena[2]);
  console.log(miCadena[3]);
  console.log(miCadena[4]);
  console.log(miCadena[5]);
  console.log(miCadena[6]);

//NOTACION DE CORCHETES: ULTIMO CARACTER
    //Automatizado

    var miCadena;

    // el ultimo indice simepre es la longitusd de la cadena -1, porque siempre comenzamos a contar desde 0

    miCadena = "REACT"
    console.log(miCadena[miCadena.length-1])
//NOTACION DE CORCHETES DE DERECHA A IZQUIERDA
 var miCadena
 var n;
    // el penultimo indice es longitud - 2 porque comenzamos a contar desde 0
    // miCadena,length es 5. el penultimo caracter es 3. 

    // Cadena: R E A C T 
    // Indice: 0 1 2 3 4

  miCadena = "React";
  n = 3;
  console.log(miCadena[miCadena.length-n]);

//ARREGLOS ARRAYS: Son estructuras de datos que nos permiten alamacenar multiples valores en una misma estructura  

var miArreglo = ["John", 24];
console.log(miArreglo);

var Estudiantes = ["Nora", "Pedro", "Juan", "Maria"];
console.log(Estudiantes);

var notas = [93, 42, 65, 67];
console.log(notas);

//ARREGLOS ANIDADOS
 var Estudiantes = [["Nora", 97 ], ["Gino", 87]];

 console.log(Estudiantes);

    // Ejemplo precios
    var listaProductos = [["Camisa", 5.67, "S134"], ["Celulares", 250, "S2332"], ["Zapatos", 290, "Z125"]];
    console.log(listaProductos);

    var datos = [[3.4, 4.5, 2.3], [12.2, 12,5, 9.4], [2.4, 54, 3.4]];
    console.log(datos);

//ACCEDER A LOS ELEMENTOS DE UN ARREGLO  
var miArreglo = [ 100, 200, 300];

    // Arreglo: [100, 200, 300] 
    // Indices:   0    1    2

    console.log(miArreglo[0]); // si escribimos el indice 0, tendremos el elemento 100
    console.log(miArreglo[1])  // si escribimos el indice 1, tendremos el elemento 200
    console.log(miArreglo[2])  // si escribimos el indice 2, tendremos el elemento 300

    //ejemplo suma
    var sumaArray = miArreglo[0] + miArreglo[1] + miArreglo[2];

    console.log(sumaArray);
//MODIFICAR LOS DATOS DE UN ARREGLO 
var miArreglo  = [10, 20, 30];

miArreglo[0] = [1, 2, 3];

console.log(miArreglo);

//ACCDER A ELEMENTOS DE UN ARREGLOS MULTIDIMENCIONALES
var miArreglo = [[1,2,3],[4,5,6],[7,8,9]];

//   Arreglo:           [[1,2,3],[4,5,6],[7,8,9]]
//   Indice:                0       1       2
//   Indices Internos:    0 1 2   0 1 2   0 1 2

             // Indice  Sub-Indice
console.log(miArreglo[0][0]); //1
console.log(miArreglo[0][1]); //2
console.log(miArreglo[0][2]); //3

console.log(miArreglo[1][0]); //4
console.log(miArreglo[1][1]); //5
console.log(miArreglo[1][2]); //6

console.log(miArreglo[2][0]); //7
console.log(miArreglo[2][1]); //8
console.log(miArreglo[2][2]); //9

//AGREGAR ELEEMENTOS A UN ARREGLO
    //Metodos
    // .push() Agrega un elemento al final del arreglo

    var estaciones = ["Invierno", "Otoño", "Primavera"];

    estaciones.push("Verano");

    console.log(estaciones);

    //Pop Remueve el ultimo elemento de un arreglo
    //     tambien remueve y lo retorna el elemento 
    
    var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
    var estacion;

    // estaciones.pop("Verano"); solo elimina
    estacion = estaciones.pop(); //eleminia el ultimo elemento de estacionesS y lo agrega a la var estacion

    console.log(estaciones);
    console.log(estacion);

    //.shift()  remueve el primer elemento del array
    var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];

    estaciones.shift();

    console.log(estaciones);

    //.unshift() agrega un elemento al principio del array

    estaciones.unshift("Verano");

    console.log(estaciones);

//FUNCIONES

function mostrarMensaje() {
    console.log("Hola Mundo!");
}

//llamado de funcion
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

    //ARGUMENTOS: son los valores que asignamos a los parametros    //parametros, sumaremos los valores a + b
    function sumar(a, b) {
        //cuerpo de la funcion
        var suma = a + b;
        console.log("el resultado de " + a + " + " + b + " es: " + suma)
    }

    //se puede trabajar con variables cuyo valor es tomado por los parametros a, b

    var x = 20;
    var y = 20;

    // sumar(10, 20);
    // sumar(23, 39);
    // sumar(12, 12);
    // sumar(30, 20);

    //llamar a la funcion con el valor actual de la variable
    sumar(x, y);

    function concatenarTresCadenas(c1, c2, c3) {
        console.log(c1 + " " + c2 + " " + c3);
    }

    concatenarTresCadenas("Estoy", "aprendiendo", "a programar");

    //VARIABLE DE AMBITO GLOBAL: Se puede usar en cualquier parte del programa, esta definida en el programa pricipal
    var miVariableGlobal = 5;

    console.log(miVariableGlobal);

    function miFuncion() {
        console.log(miVariableGlobal)
    }

    miFuncion();

    console.log(miVariableGlobal)

    //VARIABLE DE AMBITO LOCAL: Se definen dentro de una funcion y solo se pueden usar dentro de una funcion

    function miFuncion() {
        var miVariableLocal = 4;
        console.log(miVariableLocal);
    }

    miFuncion();

    //console.log(miVariableLocal);  error esta fuera de la funcion

    //VARIABLE LOCAL VS GLOBAL

    var miNombre = "Nora";

    function mostrarMiNombre() {
        var miNombre = "Gino";
        console.log(miNombre);
    }

    //Las variables locales tienen prioridad sibre las variables globales si tienen el mismo nombre en una funcion

    mostrarMiNombre();

    console.log(miNombre);

    //RETORNAR UN VALOR
    function sumar(a, b) {
        return a + b;
    }

    console.log(sumar(5, 3));

        //undefined :
        function sumar(a, b) {
            console.log(a + b); 
        }

        console.log(sumar(5, 3)); // se muestra undefined
        
    //ASIGNAR UN VALOR RETORNADO
    function sumar(a, b) {
        return a + b;
    }

    var resultado = sumar(4, 5); // el valor de la suma se asigna a la variable 
    console.log(resultado);

        //ejemplo 

        function crearCdenaCaracteres(lenguajeProgramacion) {
            return "Mi meta es aprender a programar " + lenguajeProgramacion;
        }

        var miMeta = crearCdenaCaracteres("con js");

        console.log(miMeta)

//PERMANECE EN FILA
    // en informatica una cola, es una estructura de datos abstracta e4n la cual los elementos se mantienen en orden. los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola. 
    
    // Define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un numero (elemento) coo argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento que fue removido.

    function proximoEnLaFila(arreglo, elemento) {
        arreglo.push(elemento); //agregar al final del arreglo.
        return arreglo.shift();        //remover el primer elemento

    }

    var miArreglo = [1, 2, 3, 4, 5];

    console.log("Antes: " + JSON.stringify(miArreglo)); //JSON.stringify nos permite mostar el arreglo con unformato especifico 

    console.log(proximoEnLaFila(miArreglo, 6));

    console.log("Despues: " + JSON.stringify(miArreglo));

//VALORES BOOLEANOS
true
false 
//OPERADOR DE IGUALDAD  
   //no comparar arreglos con este operador  
console.log("Hola"=="Hola");

    //Operador de Igualdad Estricta
    console.log(9==="9") //tambien compara el tipo de dato

    //comparar valores con == y ===

    var a;
    var b;

    a = 5;
    b = 5; 

    console.log(a == b);  //true
    console.log(a === b); //true

    b = 8;
    console.log(a == b ); //false
    console.log(a === b); //false

    b = "5";

    console.log(a == b ); //true 
    console.log(a === b); //flase

    a = "JavaScript" 
    b = "JavaScript" 

    console.log(a == b ); //atrue
    console.log(a === b); //true

//OPERADOR DE DESIGUALDAD