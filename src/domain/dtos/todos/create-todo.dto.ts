// DTO: Data Transfer Object DTO Definition and Usage

export class CreateTodoDto {

    // En un constructor privado solo se puede llamar dentro de un metodo estatico, dentro de esta clase CreateTodoDto
    private constructor(
        public readonly text: string,
    ) {}

        // metodos
        // create
        // devolvemos [string?, CreateTodoDto?] ya que puede venir el error o lo que resulte de CreateTodoDto
        static create( props: {[key:string]: any} ): [string?, CreateTodoDto?] {

            // desestructurar el text
            const { text } = props;
            // verificar si viene el text; en caso de que no venga mandamos un error
            // El undefined de "['Text property is required', undefined]" se puede mandar o no ya que es opcional
            if ( !text ) return ['Text property is required', undefined];

            // retornamos la respuesta
            // [undefined, new CreateTodoDto(text)] mandamos el undefined ya que no hay error si es que paso la validacion
            return [undefined, new CreateTodoDto(text)];
        }
    
}