// request, response
import { Request, Response } from "express";
// postgres prisma
import { prisma } from "../../data/postgres";
// DTOS
import { CreateTodoDto } from "../../domain/dtos";

// controladores
export class TodosController {
    // * DI: Inyeccion de dependencias
    constructor() {}

    // metodos
    // Metodo GET: obtener todos los registros
    public getTodos = async ( req:Request, res:Response ) => {
        // buscar los registros en la BD
        const todos = await prisma.todo.findMany();
        // respuesta
        return res.json( todos );
    }
    // Metodo GET: obtener un solo registro por ID
    public getTodoById = async (req:Request, res:Response ) => {
        //! hacer la conevrsion de string a number: para esto se agrega + antes de req.params.id
        const id = +req.params.id;
        // validar que el ID sea un number
        if ( isNaN( id ) ) return res.status(400).json({ error: 'ID argument is not a number'});
        // buscar el registro con el ID mandado
        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        // verificar si la respuesta existe o si no existe el ID
        ( todo ) 
            ? res.json( todo ) 
            : res.status(404).json({ error: `TODO with id: ${ id } not found` });
        
    }

    // metodo para crear registros
    public createTodo = async ( req:Request, res:Response ) => {
        // mandamos la req.body al la clase CreateTodoDto
        const [ error, createTodoDto ] = CreateTodoDto.create( req.body );
        // si existe algun error
        if ( error ) return res.status( 400 ).json({ error });
        // crear un registro en la BD POSTGRES
        const todo = await prisma.todo.create({
            data: createTodoDto!
        });
        
        // mostrar la respuesta 
        res.json( todo );
    }

    // Metodo para actualizar
    public updateTodo = async ( req: Request, res: Response ) => {
        //! hacer la conevrsion de string a number: para esto se agrega + antes de req.params.id
        const id = +req.params.id;
        // validar que el ID sea un number
        if ( isNaN( id ) ) return res.status(400).json({ error: 'ID argument is not a number'});
        // buscar el registro con el ID mandado
        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        // validar si el ID existe
        if ( !todo ) return res.status(404).json({ error: `TODO with id: ${ id } not found`});

        // body
        const { text, completedAt } = req.body;
        // actualizar registro
        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { 
                text,  
                completedAt: ( completedAt ) ? new Date( completedAt ) : null 
            }
        });
       
        // mostramos la respuesta
        res.json( updatedTodo );

    }

    // funcion para eliminar un registro
    public deleteTodo = async ( req:Request, res:Response ) => {
        //! hacer la conevrsion de string a number: para esto se agrega + antes de req.params.id
        const id = +req.params.id;
        // buscar el registro con el ID mandado
        const todo = await prisma.todo.findFirst({
            where: {
                id
            }
        });

        // validar si existe
        if ( !todo ) return res.status( 404 ).json({error:`Todo with id ${ id } not found`});
        // eliminar el registro de la BD
        const deleted = await prisma.todo.delete({
            where: { id }
        });
        // si el deleted existe eliminarlo
        ( deleted )
            // retornamos la informacion del TODO eliminado
            ? res.json( deleted )
            : res.status( 400 ).json(`TODO with id ${ id } not found`);      

    }

}