// Router de express
import { Router } from "express";

export class AppRoutes {
    // getter estatico
    static get routes(): Router {
        // Asignamos a router la funcion Router de Express
        const router = Router();

        router.get('/api/todos', ( req, res ) => {
            // respuesta
            res.json([
                {
                    id: 1,
                    test: 'Buy Milk',
                    createdAt: new Date()
                },
                {
                    id: 2,
                    test: 'Buy Bread',
                    createdAt: null
                },
                {
                    id: 3,
                    test: 'Buy Butter',
                    createdAt: new Date()
                },
            ]);
        });


        return router;

    }

}