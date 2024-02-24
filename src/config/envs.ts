// configuracion de las variables de entrono con la ayuda de env-var
// dotenv: variables de entorno
import 'dotenv/config';
// env-var: validacion de las variables de entorno
import { get } from "env-var";

// variables de entorno
export const envs = {

    // puerto de ejecucion
    PORT: get('PORT').required().asPortNumber(),
    // PUBLIC_PATH: carpeta publica
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),

}