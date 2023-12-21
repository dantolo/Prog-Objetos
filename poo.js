/* paradigmas de programacion 

Programacion imperativa: se basa en instrucciones detalladas o un flujo o una secuencia determinada 

Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

programacion declarativa : Explicar lo que queremos obtener.

Programacion orienttada a objetos: Tooma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas y sus comportamientos o acciones (metodos.)

*/
//clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto

class Persona{
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
//objetos
//para inicializar un objeto es necesario definir un constructor 
// clases = molde ** Objeto = gomita** constructor = chefcito** atributos = ingredientets*** metodos = comportamientos.
constructor(nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}
comer(){
    console.log("Bon Appetit");
}//metodo comer

bailar (){
    console.log("Dale hasta el suelo");
}//metodo bailar

correr(){
    console.log("Correr como el viento");
}//metodo correr

pescar(){
    console.log("Pescadito");
}//metodo pescar

volar(){
    console.log("Volar como un pajaro");
}//metodo volar

mostrarInfo(){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Telefono: ",this.telefono);
}

}
let usuario1 =  new Persona("Juan", "Perez", 25, "juan@gmail.com", "123135132");
let usuario2 = new Persona("Pedro", "Robles", 22, "pedro@gmail.com", "2213223");
let usuario3 = new Persona("Maria", "Peredo", 26, "maria@gmail.com", "35465132");
let usuario4 = new Persona("Roger", "Escamilla", 28, "roger@gmail.com", "6151623");
let usuario5 = new Persona("Alberto", "Ibarra", 38, "alberto@gmail.com", "31665161");
let usuario6 = new Persona("Roman", "Lopez", 40, "roman@gmail.com", "269565131");
console.log(usuario1);
console.log(usuario2.email);
console.log(usuario1.email, usuario2.email, usuario3.email);
console.log(usuario4);
console.log(usuario5);
console.log(usuario6);

usuario4.comer();
usuario5.bailar();
usuario6.correr();
usuario1.pescar();
usuario2.volar();
//////////////////////////////////////
usuario1.mostrarInfo();
usuario2.mostrarInfo();
usuario3.mostrarInfo();
usuario4.mostrarInfo();
usuario5.mostrarInfo();

//herencias

class arrendador extends Persona{
    capacidad = 0;
    costo ="0";
    nombreLugar = "";

constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar){
    super(nombre, apellido, edad, email, telefono);
    this.capacidad = capacidad;
    this.costo = costo;
    this.nombreLugar = nombreLugar;
}
    



mostrarInfo(){
    console.log("capacidad", this.capacidad);
    console.log("costo", this.costo);
    console.log("nombre del lugar", this.nombreLugar);
}
}


let arrendador1 = new arrendador("Juan", "Perez", 25, "juan@gmail.com", "123135132", 5, 1000, "Casa");
let arrendador2 = new arrendador("Pedro", "Robles", 22, "pedro@gmail.com", "2213223", 10, 2000, "Departamento");
let arrendador3 = new arrendador("Maria", "Peredo", 26, "maria@gmail.com", "35465132", 15, 3000, "Casa");

//mostrar informacion 
console.log(arrendador1);
console.log(arrendador2);
console.log(arrendador3);

arrendador1.mostrarInfo();
arrendador2.mostrarInfo();

/*
Polimorfismo: Tener objetos de diferentes tipos que pueen ser manipulados en comun
*/
class producto{
    marca = "";
    precio = 0;

constructor(marca, precio){
    this.marca = marca;
    this.precio = precio;
}
mostrarDescripcion(){
    console.log("Marca: ", this.marca);
    console.log("Precio: ", this.precio);
}
}

let producto1 = new producto("Coca Cola", 10);
let producto2 = new producto("Pepsi", 10);
let producto3 = new producto("Fanta", 10);

producto1.mostrarDescripcion();
producto2.mostrarDescripcion();
producto3.mostrarDescripcion();
console.log(producto1);
console.log(producto2);

// usuario

class usuario {
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.#contraseña = contraseña;
    }
}




// objeto JSON 
let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

console.log("*******************************************");

class Alumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion() {
        return `La calificación de ${this.nombre} es: ${this.calificacion}`;
    }

    evaluacion() {
        if (this.calificacion >= 6) {
            return `${this.nombre} ha aprobado.`;
        } else {
            return `${this.nombre} no ha aprobado.`;
        }
    }
}

// Crear una instancia de Alumno
const alumno1 = new Alumno("Juan", 8);

// Uso
console.log(alumno1.imprimirCalificacion() + " por lo que " + alumno1.evaluacion());

