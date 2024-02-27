// Router express
import { Router } from 'express';
// controller TOODO
import { TodosController } from './controller';


// rutas del TODO
export class TodoRoutes {
    // getter estatico
    static get routes(): Router {
        // Asignamos a router la funcion Router de Express
        const router = Router();
        // Controller todo crear una instancia de la clase TodosController()
        const todoController = new TodosController();

        // GET, todos los registros
        router.get('/', todoController.getTodos );
        // GET: un solo registro
        router.get('/:id', todoController.getTodoById );
        // crear un registro
        router.post('/', todoController.createTodo );
        // Actualizar un registro
        router.put('/:id', todoController.updateTodo );


        return router;

    }

}