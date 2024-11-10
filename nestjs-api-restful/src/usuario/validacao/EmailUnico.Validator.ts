import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../Usuario.Repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioEmail = await this.usuarioRepository.existeEmail(value);
        return !usuarioEmail;
    }

}

export const ValidaEmailUnico = (opcpesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcpesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        });
    }
}