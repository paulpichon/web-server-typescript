import { request, response } from "express";

// controladores
export class TodosController {
    // * DI: Inyeccion de dependencias
    constructor() {}

    // metodos
    public getTodos = ( req = request, res = response ) => {
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
        }

}