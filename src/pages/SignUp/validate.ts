import * as z from 'zod';

export const signUpValidate = z.object({
    name: z.string({
        required_error: "Você deve inserir seu nome",
    }).nonempty("Você deve inserir seu nome"),
    email: z.string({
        required_error: "Você deve inserir seu email"
    }).nonempty("Você deve inserir seu email").email("Insira um email valido"),
    password: z.string({
        required_error: "Você deve inserir sua senha"
    }).nonempty("Você deve inserir sua senha")
});