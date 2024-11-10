import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { ValidaEmailUnico } from "../validacao/EmailUnico.Validator";
import { Optional } from "@nestjs/common";

export class AtualizaUsuarioDTO {

    @IsNotEmpty({message: 'nome não pode ser vazio'})
    @Optional()
    nome: string;

    @IsEmail(undefined, {message: 'email informado inválido'})
    @ValidaEmailUnico({message: 'Já existe usuário cadastrado com este email'})
    @Optional()
    email: string;

    @MinLength(6, { message: 'senha precisa ter pelo menos 6 caracteres'})
    @Optional()
    senha: string;
}