import { envs } from "./config/envs";
import { Server } from "./presentation/server";

(async () => {
    main();
})();



function main() {
    
    // creamos una instancia de Server
    const server = new Server({
        port: envs.PORT,
        // se puede o no mandar el public_path
        public_path: envs.PUBLIC_PATH
    });
    // llamamos al metodo para correr el server
    server.start();

}