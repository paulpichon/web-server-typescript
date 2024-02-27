// variables de entorno
import { envs } from "./config/envs";
// Routes
import { AppRoutes } from "./presentation/routes";
// clase server
import { Server } from "./presentation/server";

(async () => {
    main();
})();



function main() {
    
    // creamos una instancia de Server
    const server = new Server({
        port: envs.PORT,
        // se puede o no mandar el public_path
        public_path: envs.PUBLIC_PATH,
        // routes
        routes: AppRoutes.routes
    });
    // llamamos al metodo para correr el server
    server.start();

}