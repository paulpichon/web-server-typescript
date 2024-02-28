// DTO: Data Transfer Object DTO Definition and Usage

export class UpdateTodoDto {

    // En un constructor privado solo se puede llamar dentro de un metodo estatico, dentro de esta clase CreateTodoDto
    private constructor(
        public readonly id: number,
        public readonly text?: string,
        public readonly completedAt?: Date,
    ) {}

    // valores para actualizar el TODO
    get values() {
        // creamos una constante 
        const returnObj: {[key: string]: any} = {};

        // validamos si viene alguna propieda, en este caso el text
        if ( this.text ) returnObj.text = this.text;
        // completedAt
        if ( this.completedAt ) returnObj.completedAt = this.completedAt;
        // retornamos el returnObj
        return returnObj;
    }

    // metodos
    // create
    // devolvemos [string?, CreateTodoDto?] ya que puede venir el error o lo que resulte de CreateTodoDto
    static create( props: {[key:string]: any} ): [string?, UpdateTodoDto?] {

        // desestructurar el text
        const { id, text, completedAt } = props;
        let newCompletedAt =completedAt;
   

        if ( completedAt ) {
            // verificar si viene un error de convercion de la fecha
            newCompletedAt = new Date( completedAt );
            if ( newCompletedAt.toString() === 'Invalid Date' ) {
                // retornar un mensaje si es que hay algun error
                // recordar que podriamos mandar el segundo argumento como undefined
                return ['CompletedAt must be a valid date'];
            }   
        }
        // retornamos la respuesta
        // [undefined, new CreateTodoDto(text)] mandamos el undefined ya que no hay error si es que paso la validacion
        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
    
}