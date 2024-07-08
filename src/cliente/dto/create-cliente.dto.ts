import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateClienteDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    cpf: string;

    @IsNotEmpty()
    telefone: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'E-mail invalido!' })
    email: string;

}
