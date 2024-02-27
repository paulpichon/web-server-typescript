// Router de express
import { Router } from "express";
// routes TODO
import { TodoRoutes } from "./todos/routes";

// Rutas globales
export class AppRoutes {
    // getter estatico
    static get routes(): Router {
        // Asignamos a router la funcion Router de Express
        const router = Router();

        // GET
        router.use('/api/todos', TodoRoutes.routes );


        return router;

    }

}