import { IsInt, IsString, MaxLength, MinLength, IsDate, IsOptional } from "class-validator";

export class CustomerDto {

    @IsInt({ message: 'Id não é um numero inteiro válido!' })
    id: number;

    @IsString({message: "name não é uma string válida"})
    @MinLength(10, {message: "deve ter ao menos 10 caracteres" })
    @MaxLength(30, {message: "deve ter menos de 30 caracteres" })
    name: string;
    @IsString({message: "email não é uma string válida"})
    @MaxLength(80, {message: "O email deve ter menos de 80 caracteres" })
    email: string;

    @IsString({message: "phone não é uma string válida"})
    @MaxLength(20, {message: "O phone deve ter menos de 20 caracteres" })
    phone: string;
    @IsOptional()
    @IsString({message: "CPF não e uma string válida"})
    @MinLength(14, {message: "O CPF deve ter 14 caracteres, formato xxx.xxx.xxx-xx"})
    @MaxLength(14, {message: "O CPF deve ter 14 caracteres, formato xxx.xxx.xxx-xx"})
    cpf: string;

    @IsOptional()
    @IsString({message: "dataNascimento não é uma string válida"})
    @MinLength(10, {message: "O dataNascimento deve ter 10 caracteres, formato DD/MM/AAAA"})
    @MaxLength(10, {message: "O dataNascimento deve ter 10 caracteres, formato DD/MM/AAAA"})
    dataNascimento: string;


    @IsOptional()
    @IsString({message: "CEP não é uma string válida"})
    cep: string;
    @IsOptional()
    @IsString({message: "sexo não é uma string válida"})
    sexo: string;

    @IsOptional()
    @IsString({message: "rua não é uma string válida"})
    @MaxLength(50, {message: "A rua deve ter no máximo 50 caracteres"})
    rua: string;
    @IsOptional()
    @IsString({message: "numero não é uma string válida"})
    numero: string;

}
