// express
import express from "express";
import path from "path";

// interface
// las opciones son las variables de entorno
interface Options {
    port: number;
    public_path?: string;
}


export class Server {
    // server
    private app = express();
    // port
    private readonly port: number;
    private readonly publicPath: string;

    // constructor
    constructor( options: Options ) {
        // desestructuracion
        // en caso de que no venga public_path le asignamos public_path = 'public'
        const { port, public_path = 'public' } = options;
        // 
        this.port = port;
        this.publicPath = public_path;
    }

    async start() {
                
        //* middlewares

        // * Public folder
        this.app.use( express.static( this.publicPath ));

        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html`);
            res.sendFile( indexPath );
        });

        this.app.listen( 3000, () => {

            console.log(`Server running on port ${ this.port }`);
            

        });

    }

}