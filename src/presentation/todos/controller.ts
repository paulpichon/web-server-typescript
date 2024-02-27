import { Request, Response } from "express";

// * todos
const todos = [
    { id: 1, test: 'Buy Milk', createdAt: new Date()},
    { id: 2, test: 'Buy Bread', createdAt: null},
    { id: 3, test: 'Buy Butter', createdAt: new Date()},
];

// controladores
export class TodosController {
    // * DI: Inyeccion de dependencias
    constructor() {}

    // metodos
    // Metodo GET: obtener todos los registros
    public getTodos = ( req:Request, res:Response ) => {
        // respuesta
        return res.json( todos );
    }
    // Metodo GET: obtener un solo registro por ID
    public getTodoById = (req:Request, res:Response ) => {
        //! hacer la conevrsion de string a number: para esto se agrega + antes de req.params.id
        const id = +req.params.id;
        // validar que el ID sea un number
        if ( isNaN( id ) ) return res.status(400).json({ error: 'ID argument is not a number'});
        // buscar el registro con el ID mandado
        const todo = todos.find( todo => todo.id === id );

        // verificar si la respuesta existe o si no existe el ID
        ( todo ) 
            ? res.json( todo ) 
            : res.status(404).json({ error: `TODO with id: ${ id } not found` });
        
    }

    // metodo para crear registros
    public createTodo = ( req:Request, res:Response ) => {
        // obtener el body de la peticion
        const body = req.body;

        res.json( body );
    }

}