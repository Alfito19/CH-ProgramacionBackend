// >> Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.

const fs = require('fs');

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }
    static id = 0;
    static productsList = [];
    
    save(title,price){
        Contenedor.id++;
        fs.appendFile('./productos.txt',`ID: ${Contenedor.id}\nTitle: ${title}\nPrice: ${price}\n\n`,error =>{
            if (error) {
                console.log('Se ha producido un error al guardar el producto')
            } else {
                console.log('Guardado con exito!')
            }
        })
        Contenedor.productsList.push(title)
        return Contenedor.id;
    }

    getById(number){
        if (number-1 <= Contenedor.id){
            console.log(`Id: ${number} -`,Contenedor.productsList[number-1])
        } else {
            console.log('Id: Null');
        }
    }

    getAll(){
        for (let i = 1; i <= Contenedor.productsList.length;i++){
            console.log(`ID: ${i} - ${Contenedor.productsList[i-1]}`)
        }
    }

    deleteById(number){
        
    }

    deleteAll(){
        fs.unlink('./productos.txt',(error =>{
            if(error){
                console.log('Se ha producido un error')
            } else {
                console.log('Se ha borrado el archivo con exito')
            }
        }))
    }
}

const productos = new Contenedor('Productos.txt');
console.log(productos.save('Licuadora',3));
console.log(productos.save('Teclado',124));
console.log(productos.getAll())
console.log(productos.save('Celular',34));
console.log(productos.getAll())
console.log(productos.getById(2));
console.log(productos.getById(5));
console.log(productos.deleteAll())