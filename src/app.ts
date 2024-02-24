import { Server } from "./presentation/server";

(async () => {
    main();
})();



function main() {
    
    // creamos una instancia de Server
    const server = new Server();
    // llamamos al metodo para correr el server
    server.start();

}