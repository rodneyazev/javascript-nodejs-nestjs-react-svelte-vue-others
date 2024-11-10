import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ValidaEmailUnico } from "../validacao/EmailUnico.Validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({message: 'nome não pode ser vazio'})
    nome: string;

    @IsEmail(undefined, {message: 'email informado inválido'})
    @ValidaEmailUnico({message: 'Já existe usuário cadastrado com este email'})
    email: string;

    @MinLength(6, { message: 'senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}