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
        // Controller todo
        const todoController = new TodosController();

        // GET
        router.get('/', todoController.getTodos );


        return router;

    }

}