import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({message: 'Name cannot be empty.'})
    name: string;

    @IsEmail(undefined, {message: 'Email cannot be empty.'})
    email: string;
}
